import { useState } from "react"
import { Link } from "react-router-dom"
import MenuIcon from "@mui/icons-material/Menu"
import {
	AppBar,
	Toolbar,
	IconButton,
	Typography,
	Menu,
	MenuItem
} from "@mui/material"
import { loggedInLinks, loggedOutLinks } from "./navLinks"
import useAuth from "../hooks/useAuth"

const Navigation = () => {
	const { persist } = useAuth()
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
	const linkList = persist ? loggedInLinks : loggedOutLinks

	const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget)
	}

	const handleClose = () => {
		setAnchorEl(null)
	}

	return (
		<AppBar position="static" color="primary">
			<Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
				<Link to="/">
					<Typography variant="h6" component="div">
						My Free INV
					</Typography>
				</Link>

				<div>
					<IconButton
						size="large"
						aria-label="account of current user"
						aria-controls="menu-appbar"
						aria-haspopup="true"
						onClick={handleMenu}
						color="inherit"
					>
						<MenuIcon />
					</IconButton>
					<Menu
						id="menu-appbar"
						anchorEl={anchorEl}
						anchorOrigin={{
							vertical: "bottom",
							horizontal: "left",
						}}
						keepMounted
						open={Boolean(anchorEl)}
						onClose={handleClose}
					>
						{linkList.map((link) => (
							<Link to={link.path} key={link.name} onClick={handleClose}>
								<MenuItem key={link.name}>{link.name}</MenuItem>
							</Link>
						))}
					</Menu>
				</div>
			</Toolbar>
		</AppBar>
	)
}

export default Navigation
