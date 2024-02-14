import { useContext } from "react"
import { ListGroup } from "react-bootstrap"

import { UserInventoryDataContext } from "../../App"

const UserHome: React.FC = () => {
	const { userInventoryData } = useContext(UserInventoryDataContext)
	console.log("refreshed home page")

	return (
		<div className="m-2 text-center d-flex flex-column justify-content-center align-items-center">
			<h1>Welcome Back!</h1>
			<p>You've got the following:</p>
			<br />
			<ListGroup>
				<ListGroup.Item>
					{userInventoryData?.length}
					{` `}Locations
				</ListGroup.Item>
				<ListGroup.Item>
					{userInventoryData?.flatMap((location) => location.rooms).length}
					{` `}Rooms
				</ListGroup.Item>
				<ListGroup.Item>
					{
						userInventoryData
							?.flatMap((location) => location.rooms)
							.flatMap((room) => room.items).length
					}
					{` `}Items
				</ListGroup.Item>
			</ListGroup>
			<br />
			<p>
				Click "My Inventory" in the top navigation bar manage your inventory
			</p>
		</div>
	)
}

export default UserHome