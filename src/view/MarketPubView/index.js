/** @format */

import { useEffect, useCallback } from "react";
import { connect } from "react-redux";
import Album from "./Album";
// import { Link as RouterLink } from "react-router-dom";
import { getNftList, initNear } from "../../redux/action";
import Container from "@material-ui/core/Container";
import Popular from "./popular";
import Grid from "@material-ui/core/Grid";
import New from "./new";

const MarketView = (props) => {
	const { nftList, getNftList, initNear } = props;
	// if (!nftList) {
	//   setInterval(getNftList, 3000);
	// }

	const initNearGetNft = useCallback(async () => {
		await initNear();
		await getNftList();
	}, [initNear, getNftList]);

	// The depencies to nftList if nftList add depencies to cycle call initNearGetNft()
	useEffect(() => {
		initNearGetNft();
	}, [initNearGetNft]);

	return (
		<Container sx={{ paddingTop: "24px", paddingBottom: "24px" }} maxWidth='md'>
			<Grid container spacing={1}>
				<Grid item xs={12}>
					<img src='/mainpic.png' width='800px' />
				</Grid>
			</Grid>
			<Grid container spacing={2}>
				<Grid item xs={5}>
					<New />
				</Grid>
				<Grid item xs={7}>
					<Popular />
				</Grid>
			</Grid>
		</Container>
	);
};

const mapStateToProps = (state) => ({
	wallet: state.app.wallet,
	nftList: state.app.nftList,
});

const mapDispatchToProps = (dispatch) => ({
	initNear: () => dispatch(initNear()),
	getNftList: () => dispatch(getNftList()),
});
export default connect(mapStateToProps, mapDispatchToProps)(MarketView);
