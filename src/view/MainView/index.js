/** @format */

import { useEffect, useCallback } from "react";
import { connect } from "react-redux";
import { getNftList, initNear } from "../../redux/action";

const MainView = (props) => {
	return <>main</>;
};

const mapStateToProps = (state) => ({
	wallet: state.app.wallet,
	nftList: state.app.nftList,
});

const mapDispatchToProps = (dispatch) => ({
	initNear: () => dispatch(initNear()),
	getNftList: () => dispatch(getNftList()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainView);
