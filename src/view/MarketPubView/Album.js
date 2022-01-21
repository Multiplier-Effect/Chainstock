/** @format */

import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

const Album = (props) => {
	const { dataArr } = props;

	return (
		<Container sx={{ paddingTop: "24px", paddingBottom: "24px" }} maxWidth='md'>
			<Grid container spacing={4}>
				{dataArr.map((el, i) => (
					<Grid item key={i} xs={6} sm={4} md={3}>
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
								<Typography>{el.owner_id}</Typography>
							</CardContent>
							<CardActions>
								<Grid
									container
									direction='row'
									justifyContent='space-between'
									alignItems='center'>
									<Button size='small' color='primary'>
										View
									</Button>
									<Typography>{el.metadata.extra} NEAR</Typography>
								</Grid>
							</CardActions>
						</Card>
					</Grid>
				))}
			</Grid>
		</Container>
	);
};

export default Album;
