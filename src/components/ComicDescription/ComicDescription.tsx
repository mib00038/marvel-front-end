import React from "react";
import {styled, Typography} from "@mui/material";
import format from "date-fns/format";
import responsiveHOC from 'react-lines-ellipsis/lib/responsiveHOC'
import HTMLEllipsis from 'react-lines-ellipsis/lib/html'
const ResponsiveHTMLEllipsis = responsiveHOC()(HTMLEllipsis)

const ComicDescription = ({comic}) => {
	const published = comic["dates"].filter((date) => date.type === "onsaleDate")[0].date;
	const formattedDate = format(new Date(published), 'MMMM do, yyyy');
	const writers = comic["creators"].items.filter((item) => item.role === "writer").map((item => item.name)).join(", ");
	return (
		<>
			<Typography
				variant="h6"
				sx={{fontWeight: 700, lineHeight: "2.75rem", fontSize: "2rem"}}
			>
				{comic.title}
			</Typography>
			<Typography
				variant="h6"
				sx={{fontWeight: 700, lineHeight: "1.125rem", fontSize: "1.125rem", marginTop: "1.5rem"}}
			>
				Published:
			</Typography>
			<Typography
				variant="p"
				sx={{fontWeight: 400, fontSize: "1.125rem", marginTop: 0}}
			>
				{formattedDate}
			</Typography>
			<Typography
				variant="h6"
				sx={{fontWeight: 700, lineHeight: "1.125rem", fontSize: "1.125rem", marginTop: "1.5rem"}}
			>
				Writer:
			</Typography>
			<Typography
				variant="h6"
				sx={{fontWeight: 400, fontSize: "1.125rem", marginTop: 0, marginBottom: "1rem"}}
			>
				{writers}
			</Typography>
			<StyledEllipsis
				maxLine={6}
				ellipsis='...'
				basedOn='letters'
				unsafeHTML={comic.description}
			/>
		</>
	)
}

const StyledEllipsis = styled(ResponsiveHTMLEllipsis)(({theme}) => ({
	fontWeight: 400,
	fontSize: "0.875rem",
	fontFamily: "Roboto, sans-serif",
	color: theme.palette["neutral70"].main
}));

export default ComicDescription;