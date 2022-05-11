/** @format */
import { useEffect, useCallback } from "react";
import { Link as RouterLink } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import IconButton from "@material-ui/core/IconButton";
import Link from "@material-ui/core/Link";
import { FavoriteBorder as FavoriteBorderIcon } from "@material-ui/icons";
import Stack from "@mui/material/Stack";

const Charts = (props) => {
	const { dataArr, wallet } = props;
	let count = 0;
	const resultArr = dataArr.filter((i) => {
		if (wallet == i.owner_id) {
			count = count + 1;
		}
		return 0;
	});

	return (
		<Stack direction='row' spacing={20}>
			<Card sx={{ minWidth: 300 }}>
				<CardContent>
					<Typography sx={{ fontSize: 14 }} color='text.secondary' gutterBottom>
						보유 비상장 주식 수
					</Typography>
					<Typography variant='h2' component='div' gutterBottom>
						{count}
					</Typography>
					<Typography color='text.secondary'>{wallet}</Typography>
				</CardContent>
			</Card>
			<Card sx={{ minWidth: 300 }}>
				<CardContent>
					<Typography sx={{ fontSize: 14 }} color='text.secondary' gutterBottom>
						판매 중인 비상장 주식 수
					</Typography>
					<Typography variant='h2' component='div'>
						0
					</Typography>
					<Typography color='text.secondary'>{wallet}</Typography>
				</CardContent>
			</Card>
		</Stack>
	);
};

export default Charts;
