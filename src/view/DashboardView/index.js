/** @format */

import { useEffect, useCallback } from "react";
import { connect } from "react-redux";
import { getNftList } from "../../redux/action";
import Container from "@material-ui/core/Container";
import Album from "./Album";
import StockList from "../AccountView/StockList";

const DashboardView = (props) => {
	const { wallet, nftList, getNftList } = props;

	const getNftListDashboard = useCallback(async () => {
		await getNftList();
	}, [getNftList]);

	useEffect(() => {
		getNftListDashboard();
	}, [getNftListDashboard]);

	return (
		<Container sx={{ paddingTop: "24px", paddingBottom: "24px" }} maxWidth='md'>
			<h1>구매 가능 비상장 주식</h1>
			{Array.isArray(nftList) && nftList.length > 0 && (
				<Album dataArr={nftList} />
			)}
			{!nftList && <h1>loading...</h1>}
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

export default connect(mapStateToProps, mapDispatchToProps)(DashboardView);
