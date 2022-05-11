/** @format */

import { useEffect, useCallback } from "react";
import { connect } from "react-redux";
import { getNftList } from "../../redux/action";
import Container from "@material-ui/core/Container";
import Album from "./Album";
import Typography from "@material-ui/core/Typography";

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
			<Typography noWrap gutterBottom variant='h1' component='h1'>
				구매 가능 비상장 주식
			</Typography>
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
