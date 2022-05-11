/** @format */
import { useEffect, useState } from "react";
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
	const { dataArr, salesArr } = props;

	const [rerender, setRerender] = useState(false);
	const onSale = (i) => {
		salesArr.push(dataArr[i]);
		console.log("sales", salesArr);
		dataArr.splice(i, 1);
		setRerender(!rerender);
	};
	useEffect(() => {
		setRerender(!rerender);
	}, []);

	return (
		<>
			<Grid container spacing={4}>
				{dataArr.map((el, i) => (
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
									<Button
										size='small'
										color='primary'
										onClick={() => onSale(i)}>
										판매하기
									</Button>
								</Grid>
							</CardActions>
						</Card>
					</Grid>
				))}
			</Grid>
			<Typography
				noWrap
				gutterBottom
				variant='h3'
				component='h3'
				sx={{ paddingTop: "42px", paddingBottom: "24px" }}>
				판매 중인 비상장주식
			</Typography>
			<Grid container spacing={4}>
				{salesArr &&
					salesArr.map((el, i) => (
						<Grid item key={i} xs={6} sm={4} md={3}>
							<Card
								sx={{
									height: "100%",
									display: "flex",
									flexDirection: "column",
								}}>
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
									<Grid
										container
										direction='row'
										justifyContent='space-between'>
										<Link component={RouterLink} to={`/token/${el.token_id}`}>
											<Button size='small' color='primary'>
												View
											</Button>
										</Link>
										<Button size='small' color='primary'>
											판매하기
										</Button>
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
