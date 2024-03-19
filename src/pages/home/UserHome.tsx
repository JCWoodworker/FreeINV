import { useContext } from "react"
import { Link } from "react-router-dom"
import { Typography, Button, Card } from "@mui/material"

import { UserInventoryDataContext } from "../../App"
import { Box } from "@mui/system"

const UserHome: React.FC = () => {
	const { userInventoryData } = useContext(UserInventoryDataContext)

	return (
		<Box
			sx={{
				mt: 5,
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
				gap: 2
			}}
		>
			<Typography variant="h3">Welcome Back!</Typography>
			<Card
				variant="outlined"
				sx={{
					p: 2,
					width: 300,
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
					gap: 1,
				}}
			>
				<p>You've got the following:</p>
				<ul>
					<li>
						{userInventoryData?.length}
						{` `}Locations
					</li>
					<li>
						{userInventoryData?.flatMap((location) => location.rooms).length}
						{` `}Rooms
					</li>
					<li>
						{
							userInventoryData
								?.flatMap((location) => location.rooms)
								.flatMap((room) => room.items).length
						}
						{` `}Items
					</li>
				</ul>
			</Card>
			<Link to="/my-inventory">
				<Button variant="contained">View Locations</Button>
			</Link>
		</Box>
	)
}

export default UserHome
