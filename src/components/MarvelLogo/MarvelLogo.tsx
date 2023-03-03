import {SvgIcon} from "@mui/material";
import { ReactComponent as Logo } from "../../assets/marvel-logo.svg";
const MarvelLogo = () => {
	return (
		<div style={{padding:4, marginTop: 8, backgroundColor: "red", width: "fit-content"}}>
			<div style={{width: "auto", height: 44}}>
				<SvgIcon component={Logo} inheritViewBox sx={{width: "inherit", height:"inherit"}} />
			</div>
		</div>
	)
}

export default MarvelLogo;