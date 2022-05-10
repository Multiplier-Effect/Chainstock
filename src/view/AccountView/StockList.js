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

const StockList = (props) => {
	const { dataArr, wallet } = props;

	const resultArr = dataArr.filter((i) => {
		if (wallet == i.owner_id) {
			return i;
		}
	});

	return (
		<>
			<Grid container spacing={4}>
				{resultArr.map((el, i) => (
					<Grid item key={i} xs={6} sm={4} md={3}>
						<Card
							sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
							<CardMedia
								sx={{ paddingTop: "100%", backgroundSize: "contain" }}
								image={el.metadata.media}
								title={el.metadata.title}
							/>
							<CardContent sx={{ flexGrow: 1 }}>
								<Typography gutterBottom variant='h3' component='h2'>
									{el.metadata.title}
								</Typography>
								<Typography>{el.metadata.extra} NEAR</Typography>
								<Typography>{el.owner_id}</Typography>
							</CardContent>
							<CardActions>
								<Grid container direction='row' justifyContent='space-between'>
									<Link component={RouterLink} to={`/token/${el.token_id}`}>
										<Button size='small' color='primary'>
											View
										</Button>
									</Link>
									<IconButton>
										<FavoriteBorderIcon />
									</IconButton>
								</Grid>
							</CardActions>
						</Card>
					</Grid>
				))}
			</Grid>
		</>
	);
};

export default StockList;
