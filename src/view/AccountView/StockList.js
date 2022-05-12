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
import Link from "@material-ui/core/Link";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";

const StockList = (props) => {
	const { dataArr, salesArr, wallet } = props;

	const [rerender, setRerender] = useState(false);
	const [open, setOpen] = useState(false);
	const handleOpen = () => {
		setOpen(true);
	};
	const handleClose = () => {
		setOpen(false);
	};

	const onSale = (i) => {
		salesArr.push(dataArr[i]);
		dataArr.splice(i, 1);
		setRerender(!rerender);
		handleOpen();
	};
	useEffect(() => {
		setRerender(!rerender);
	}, []);
	let count = 0;
	const resultArr = dataArr.filter((i) => {
		if (wallet == i.owner_id) {
			count = count + 1;
		}
		return 0;
	});
	const style = {
		position: "absolute",
		top: "50%",
		left: "50%",
		transform: "translate(-50%, -50%)",
		width: 400,
		bgcolor: "background.paper",
		border: "2px solid #000",
		// boxShadow: 24,
		p: 4,
	};

	return (
		<>
			<Stack direction='row' spacing={20}>
				<Card sx={{ minWidth: 300 }}>
					<CardContent>
						<Typography
							sx={{ fontSize: 14 }}
							color='text.secondary'
							gutterBottom>
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
						<Typography
							sx={{ fontSize: 14 }}
							color='text.secondary'
							gutterBottom>
							판매 중인 비상장 주식 수
						</Typography>
						<Typography variant='h2' component='div'>
							{salesArr.length}
						</Typography>
						<Typography color='text.secondary'>{wallet}</Typography>
					</CardContent>
				</Card>
			</Stack>
			<Typography
				noWrap
				gutterBottom
				variant='h3'
				component='h3'
				sx={{ paddingTop: "42px", paddingBottom: "24px" }}>
				보유 중인 비상장주식
			</Typography>
			<Grid container spacing={4}>
				{dataArr.map((el, i) => (
					<Grid item key={i} xs={6} sm={4} md={3}>
						<Modal hideBackdrop open={open} onClose={handleClose}>
							<Box sx={style}>
								<h2 id='child-modal-title'>비상장 주식 판매하기</h2>
								<br />
								<p id='child-modal-description'>판매 가격을 입력해주세요</p>
								<br />
								<TextField
									id='outlined-basic'
									label='NEAR'
									variant='outlined'
								/>
								<br />
								<Button onClick={handleClose}>확인</Button>
							</Box>
						</Modal>
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
