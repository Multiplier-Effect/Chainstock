/** @format */

import { NFTStorage } from "nft.storage";
import { useEffect, useCallback } from "react";
import { connect } from "react-redux";
import { getNftList } from "../../redux/action";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import StockList from "./StockList";

const client = new NFTStorage({
	token: process.env.REACT_APP_NFT_STORAGE_API_KEY,
});

console.log(client);

const AccountView = (props) => {
	console.log("p: ", props);
	const { wallet, nftList, getNftList } = props;

	const getNftListAccount = useCallback(async () => {
		await getNftList();
	}, [getNftList]);

	useEffect(() => {
		getNftListAccount();
	}, [getNftListAccount]);

	return (
		<Container sx={{ paddingTop: "24x", paddingBottom: "24px" }} maxWidth='md'>
			<Grid container spacing={1}>
				<Typography
					noWrap
					gutterBottom
					variant='h3'
					component='h2'
					sx={{ paddingTop: "42px" }}>
					마이페이지
				</Typography>
				<StockList dataArr={nftList} />
			</Grid>
		</Container>
	);
};

const mapStateToProps = (state) => ({
	wallet: state.app.wallet,
	nftList: state.app.nftList,
});

const mapDispatchToProps = (dispatch) => ({
	getNftList: () => dispatch(getNftList()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AccountView);
