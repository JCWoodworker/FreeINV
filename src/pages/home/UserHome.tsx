import { useContext } from "react"
import { Link } from "react-router-dom"
import { Typography, Button, Card } from "@mui/material"

import { UserInventoryDataContext } from "../../App"
import InventoryPageBox from "../../layouts/InventoryPageBox"

const UserHome: React.FC = () => {
	const { userInventoryData } = useContext(UserInventoryDataContext)

	return (
		<InventoryPageBox>
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
		</InventoryPageBox>
	)
}

export default UserHome
