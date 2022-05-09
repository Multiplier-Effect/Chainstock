/** @format */

import Divider from "@material-ui/core/Divider";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import { Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";
import { payment } from "../../redux/action";

const InfoNft = (props, wallet) => {
	const { nft } = props;
	// console.log("st", wallet);
	console.log("st", nft.metadata);
	const buy = () => {
		console.log("st", nft.metadata);
		payment(nft.owner_id, nft.metadata.token_id, 1, nft.metadata.extra);
	};
	return (
		<Card>
			<CardHeader title='Information' subheader='NFT token' />
			<Divider />
			<CardContent>
				<Typography>Owner</Typography>
				<Typography>{nft.owner_id}</Typography>
				<Divider />
				<Typography>Price</Typography>
				<Typography style={{ color: "#e6b000" }}>
					{nft.metadata.extra} NEAR
				</Typography>
				<Divider />
			</CardContent>
			<CardActions style={{ flexDirection: "column" }}>
				<Button
					color='primary'
					onClick={buy}
					size='large'
					type='submit'
					variant='contained'>
					Buy
				</Button>
			</CardActions>
		</Card>
	);
};

export default InfoNft;
