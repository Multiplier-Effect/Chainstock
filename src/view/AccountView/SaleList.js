/** @format */
import { useEffect, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import IconButton from "@material-ui/core/IconButton";
import Link from "@material-ui/core/Link";
import { FavoriteBorder as FavoriteBorderIcon } from "@material-ui/icons";
import { render } from "@testing-library/react";

const SaleList = (props) => {
	const { salesArr, wallet } = props;

	const [rerender, setRerender] = useState(false);
	useEffect(() => {
		setRerender(!rerender);
		console.log(rerender);
	}, []);
	return <></>;
};

export default SaleList;
