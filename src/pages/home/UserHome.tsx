import { useContext } from "react"
import { Link } from "react-router-dom"

import { UserInventoryDataContext } from "../../App"

const UserHome: React.FC = () => {
	const { userInventoryData } = useContext(UserInventoryDataContext)
	console.log(JSON.stringify(userInventoryData, null, 2))

	return (
		<div data-testid="user-home">
			<p>Welcome Back!</p>
			<div>
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
			</div>
			<Link to="/my-inventory">
				<button>View Locations</button>
			</Link>
		</div>
	)
}

export default UserHome
