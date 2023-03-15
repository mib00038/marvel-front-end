import React, {useState} from "react";

const useSideDrawer = () => {
	const [open, setOpen] = useState(false);

	const toggleDrawer =
		(open: boolean) =>
			(event: React.KeyboardEvent | React.MouseEvent) => {
				if (
					event.type === 'keydown' &&
					((event as React.KeyboardEvent).key === 'Tab' ||
						(event as React.KeyboardEvent).key === 'Shift')
				) {
					return;
				}

				setOpen(open);
			};

	return {open, setOpen, toggleDrawer};
}

export default useSideDrawer;
