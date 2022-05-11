/** @format */

import { NFTStorage } from "nft.storage";
import { useEffect, useCallback, useState } from "react";
import { connect } from "react-redux";
import { getNftList } from "../../redux/action";

import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import StockList from "./StockList";
import Charts from "./Charts";
import SaleList from "./SaleList";

const AccountView = (props) => {
	const { wallet, nftList, getNftList } = props;
	const [rerender, setRerender] = useState(false);

	const getNftListAccount = useCallback(async () => {
		await getNftList();
	}, [getNftList]);

	const salesArr = [];

	useEffect(() => {
		getNftListAccount();
	}, [getNftListAccount]);

	const resultArr = nftList.filter((i) => {
		if (wallet._authData.accountId == i.owner_id) {
			return i;
		}
	});

	// useEffect(() => {
	// 	setRerender(!rerender);
	// 	console.log(rerender);
	// }, [salesArr]);

	return (
		<Container sx={{ paddingTop: "24x", paddingBottom: "24px" }} maxWidth='md'>
			<Typography
				noWrap
				gutterBottom
				variant='h1'
				component='h1'
				sx={{ paddingTop: "42px" }}>
				마이페이지
			</Typography>
			<Typography
				noWrap
				gutterBottom
				variant='h3'
				component='h3'
				sx={{ paddingTop: "42px", paddingBottom: "24px" }}>
				보유 주식 현황
			</Typography>
			<Charts dataArr={nftList} wallet={wallet._authData.accountId} />
			<Typography
				noWrap
				gutterBottom
				variant='h3'
				component='h3'
				sx={{ paddingTop: "42px", paddingBottom: "24px" }}>
				보유 중인 비상장주식
			</Typography>
			<StockList
				salesArr={salesArr}
				dataArr={resultArr}
				wallet={wallet._authData.accountId}
			/>

			{/* <SaleList salesArr={salesArr} /> */}
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
