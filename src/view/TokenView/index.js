/** @format */

import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import MediaNft from "./MediaNft";
import InfoNft from "./InfoNft";

const useStyles = makeStyles((theme) => ({
	root: {
		backgroundColor: theme.palette.background.dark,
		minHeight: "100%",
		paddingBottom: theme.spacing(3),
		paddingTop: theme.spacing(3),
	},
}));

const TokenView = (props, state) => {
	const { nftList } = props;
	const linkId = useParams().id;
	const classes = useStyles();

	const tokenData = nftList.find((el) => el.token_id === linkId);

	console.log("list:", nftList);

	const resultArr = nftList.filter((i) => {
		if (tokenData.metadata.title == i.metadata.title) {
			return i;
		}
	});
	console.log("resultArr: ", resultArr);
	//resultArr.owner_id
	//customner profile 보여주기 가능

	return (
		<Container className={classes.root}>
			<Grid container spacing={3}>
				<Grid item lg={6} md={6} xs={12}>
					<MediaNft
						img={tokenData.metadata.media}
						title={tokenData.metadata.title}
					/>
				</Grid>
				<Grid item lg={6} md={6} xs={12}>
					<InfoNft nft={tokenData} wallet={state} />
				</Grid>
			</Grid>
		</Container>
	);
};

const mapStateToProps = (state) => ({
	nftList: state.app.nftList,
	wallet: state.app.wallet,
});

export default connect(mapStateToProps)(TokenView);
