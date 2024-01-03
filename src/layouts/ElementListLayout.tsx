import { Link, Outlet } from "react-router-dom"
import { userData } from "../routes/testUserData"
import { InventoryRecord } from "../routes/testUserData"

interface Props {
	elementPath: string
}

const ElementListLayout: React.FC<Props> = ({ elementPath }) => {
	// This is using test data for now
	// TODO: fetch from backend and save to state

	let elementList: InventoryRecord[] = []
	switch (elementPath) {
		case "locations":
			elementList = userData.allLocations
			break;
		case "rooms":
			elementList = userData.allRooms
			break;
		case "items":
			elementList = userData.allItems
			break;
		default:
			elementList = []
	}

	return (
		<div>
			<ul>
				{elementList?.map((element) => (
					<li key={element.id}>
						<Link to={`/${elementPath}/${element.id}`} state={{element}}>
							{element.name}
						</Link>
					</li>
				))}
				<li>
					<Link to={`/${elementPath}/new`}>+</Link>
				</li>
			</ul>
			<Outlet />
		</div>
	)
}

export default ElementListLayout
