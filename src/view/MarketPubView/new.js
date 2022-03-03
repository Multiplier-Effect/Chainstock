/** @format */

import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";

export default function New() {
	return (
		<ImageList sx={{ hieght: 450 }}>
			<ImageListItem key='Subheader' cols={2}>
				<ListSubheader component='div'>새 종목</ListSubheader>
			</ImageListItem>
			{itemData.map((item) => (
				<ImageListItem key={item.img}>
					<img
						src={`${item.img}?w=248&fit=crop&auto=format`}
						srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
						alt={item.title}
						loading='lazy'
					/>
					<ImageListItemBar
						title={item.title}
						subtitle={item.author}
						actionIcon={
							<IconButton
								sx={{ color: "rgba(255, 255, 255, 0.54)" }}
								aria-label={`info about ${item.title}`}>
								<InfoIcon />
							</IconButton>
						}
					/>
				</ImageListItem>
			))}
		</ImageList>
	);
}

const itemData = [
	{
		img: "/static/images/logo/socar.png",
		title: "쏘카",
		author: "socar",
		rows: 2,
		cols: 2,
		featured: true,
	},
	{
		img: "/static/images/logo/kurly.png",
		title: "컬리",
		author: "kurly",
	},
	{
		img: "/static/images/logo/yanolja.png",
		title: "야놀자",
		author: "yanolja",
	},
	{
		img: "/static/images/logo/toss.png",
		title: "비바리퍼블리카",
		author: "toss",
		cols: 2,
	},
];
