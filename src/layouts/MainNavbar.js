/** @format */

import { connect } from "react-redux";
import { Link as RouterLink } from "react-router-dom";
import { AppBar, Toolbar, IconButton, Box } from "@material-ui/core";
import { LogIn as LoginIcon } from "react-feather";
import Logo from "../components/Logo";
import { login } from "../redux/action";
import Typography from "@material-ui/core/Typography";

const MainNavbar = (props) => {
	const { login, ...prop } = props;
	return (
		<AppBar elevation={0} {...prop}>
			<Toolbar sx={{ height: 64 }}>
				<RouterLink to='/'>
					<Logo height='48' weight='68' />
				</RouterLink>
				<RouterLink to='/' padding='20'>
					<Typography
						gutterBottom
						variant='h3'
						component='h2'
						padding='20'
						color='white'>
						ChainStock
					</Typography>
				</RouterLink>
				<Box sx={{ flexGrow: "1" }} />
				<IconButton onClick={() => login()} color='inherit'>
					<LoginIcon />
				</IconButton>
			</Toolbar>
		</AppBar>
	);
};

const mapStateToProps = (state) => ({
	wallet: state.app.wallet,
});

const mapDispatchToProps = (dispatch) => ({
	login: () => dispatch(login()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainNavbar);
