/** @format */

import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import MediaNft from "./MediaNft";
import InfoNft from "./InfoNft";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
	root: {
		backgroundColor: theme.palette.background.dark,
		minHeight: "100%",
		paddingTop: theme.spacing(3),
	},
}));

const TokenView = (props, state) => {
	const { nftList } = props;
	const linkId = useParams().id;
	const classes = useStyles();

	const tokenData = nftList.find((el) => el.token_id === linkId);

	const resultArr = nftList.filter((i) => {
		if (tokenData.metadata.title == i.metadata.title) {
			return i;
		}
	});

	const columns: GridColDef[] = [
		{ field: "id", headerName: "ID", width: 70 },
		{ field: "Name", headerName: "주주명", width: 230 },
		{ field: "transaction", headerName: "거래 증명서", width: 500 },
	];
	const row = [];

	for (let i = 0; i < resultArr.length; i++) {
		row.push({
			id: i,
			Name: resultArr[i].owner_id,
			transaction: `https://explorer.testnet.near.org/accounts/${resultArr[i].owner_id}`,
		});
		console.log(row);
	}

	return (
		<>
			<Container className={classes.root}>
				<h1>{tokenData.metadata.title}</h1>
				<br />
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
			<Container>
				<h1>주주 명부</h1>
				<br />
				<div style={{ height: 400, width: "100%", margin: 10 }}>
					<DataGrid
						rows={row}
						columns={columns}
						pageSize={5}
						rowsPerPageOptions={[5]}
					/>
				</div>
			</Container>
		</>
	);
};

const mapStateToProps = (state) => ({
	nftList: state.app.nftList,
	wallet: state.app.wallet,
});

export default connect(mapStateToProps)(TokenView);
