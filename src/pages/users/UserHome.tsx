import { useContext } from "react"

import { UserInventoryDataContext } from "../../App"

const UserHome: React.FC = () => {
	const { userInventoryData } = useContext(UserInventoryDataContext)
	console.log("refreshed home page")

	return (
		<div>
			<h1>Welcome Back!</h1>
			<p>You've got the following:</p>
			<br />
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
			<br />
			<p>
				Click "My Inventory" in the top navigation bar manage your inventory
			</p>
		</div>
	)
}

export default UserHome
