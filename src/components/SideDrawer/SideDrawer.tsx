import React from "react";
import {Drawer} from "@mui/material";
import ReadingList from "../ReadingList/ReadingList";

const SideDrawer = ({open, toggleDrawer}) => (
	<Drawer
		anchor='right'
		open={open}
		onClose={toggleDrawer(false)}
	>
		<ReadingList />
	</Drawer>
);

export default SideDrawer;
