/** @format */

import { Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import RouteWithLayout from "./utils/RouteWithLayout";
import DashboardLayout from "./layouts/DashboardLayout";
import AccountView from "./view/AccountView";
import DashboardView from "./view/DashboardView";
import MainLayout from "./layouts/MainLayout";
import MarketView from "./view/MarketPubView";
import TokenView from "./view/TokenView";
import MainView from "./view/MainView";
import CreateTokenView from "./view/CreateTokenView";

const Routes = (props) => {
	const { wallet, auth } = props;

	console.log(auth);

	if (wallet ? wallet.isSignedIn() : false) {
		return (
			<Switch>
				<RouteWithLayout
					path='/'
					exact
					component={DashboardView}
					layout={DashboardLayout}
				/>
				<RouteWithLayout
					path='/market'
					exact
					component={DashboardView}
					layout={DashboardLayout}
				/>
				<RouteWithLayout
					path='/mypage'
					exact
					component={AccountView}
					layout={DashboardLayout}
				/>
				<RouteWithLayout
					path='/token/:id'
					exact
					component={TokenView}
					layout={DashboardLayout}
				/>
				<Redirect exact to='/dashboard' />
			</Switch>
		);
	}
	return (
		<Switch>
			<RouteWithLayout
				path='/market'
				exact
				component={MarketView}
				layout={MainLayout}
			/>
			<Redirect exact to='/market' />
		</Switch>
	);
};

const mapStateToProps = (state) => ({
	wallet: state.app.wallet,
	auth: state.app.auth,
});

export default connect(mapStateToProps)(Routes);
