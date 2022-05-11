/** @format */

import { useEffect } from "react";
import { connect } from "react-redux";
import { Link as RouterLink, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import {
	Avatar,
	Box,
	Button,
	Divider,
	Drawer,
	Hidden,
	List,
	Typography,
} from "@material-ui/core";
import {
	BarChart as BarChartIcon,
	ShoppingBag as ShoppingBagIcon,
	User as UserIcon,
	FilePlus as FilePlusIcon,
} from "react-feather";
import NavItem from "./NavItem";
import { logout } from "../redux/action";

const user = {
	avatar: "/static/images/avatars/profile.jpeg",
	jobTitle: "투자자",
	name: "여수현",
};

const items = [
	{
		href: "/market",
		icon: BarChartIcon,
		title: "Market",
	},
	{
		href: "/mypage",
		icon: UserIcon,
		title: "My page",
	},
];

const DashboardSidebar = ({ onMobileClose, openMobile, logout }) => {
	const location = useLocation();

	useEffect(() => {
		if (openMobile && onMobileClose) {
			onMobileClose();
		}
		//eslint-disable-next-line
	}, [location.pathname]);

	const content = (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				height: "100%",
			}}>
			<Box
				sx={{
					alignItems: "center",
					display: "flex",
					flexDirection: "column",
					p: 2,
				}}>
				<Avatar
					component={RouterLink}
					src={user.avatar}
					sx={{
						cursor: "pointer",
						width: 64,
						height: 64,
					}}
					to='/account'
				/>
				<Typography color='textPrimary' variant='h5'>
					{user.name}
				</Typography>
				<Typography color='textSecondary' variant='body2'>
					{user.jobTitle}
				</Typography>
			</Box>
			<Divider />
			<Box sx={{ p: 2 }}>
				<List>
					{items.map((item) => (
						<NavItem
							href={item.href}
							key={item.title}
							title={item.title}
							icon={item.icon}
						/>
					))}
				</List>
			</Box>
			<Box sx={{ flexGrow: 1 }} />
		</Box>
	);

	const buttonLogout = (
		<Box
			sx={{
				backgroundColor: "background.default",
				m: 1,
				p: 2,
			}}>
			<Box
				sx={{
					display: "flex",
					justifyContent: "center",
				}}>
				<Button
					onClick={logout}
					color='primary'
					component='a'
					variant='contained'>
					Logout
				</Button>
			</Box>
		</Box>
	);

	return (
		<>
			<Hidden lgUp>
				<Drawer
					anchor='left'
					onClose={onMobileClose}
					open={openMobile}
					variant='temporary'
					PaperProps={{
						sx: {
							width: 256,
						},
					}}>
					{content}
					{buttonLogout}
				</Drawer>
			</Hidden>
			<Hidden lgDown>
				<Drawer
					anchor='left'
					open
					variant='persistent'
					PaperProps={{
						sx: {
							width: 256,
							top: 64,
							height: "calc(100% - 64px)",
						},
					}}>
					{content}
				</Drawer>
			</Hidden>
		</>
	);
};

DashboardSidebar.propTypes = {
	onMobileClose: PropTypes.func,
	openMobile: PropTypes.bool,
};

DashboardSidebar.defaultProps = {
	onMobileClose: () => {},
	openMobile: false,
};

const mapStateToProps = (state) => ({
	title: state.app.title,
});

const mapDispatchToProps = (dispatch) => ({
	logout: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardSidebar);
