import { useContext } from "react"
import { Typography } from "@mui/material"

import { UserInventoryDataContext } from "../../App"
import InventoryPageBox from "../../layouts/InventoryPageBox"

const UserHome: React.FC = () => {
	const { userInventoryData } = useContext(UserInventoryDataContext)

	return (
		<InventoryPageBox>
			<Typography variant="h3">Welcome Back!</Typography>
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
			<p>
				Click "My Inventory" in the top navigation bar manage your inventory
			</p>
		</InventoryPageBox>
	)
}

export default UserHome
