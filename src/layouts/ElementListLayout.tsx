import { Link, Outlet } from "react-router-dom"
import { userData } from "../routes/testUserData"
import { InventoryRecord } from "../routes/testUserData"

interface Props {
	elementPath: string
}

const ElementListLayout: React.FC<Props> = ({ elementPath }) => {
	// This is using test data for now
	// TODO: fetch from backend and save to state

	// ALSO: this logic should be in some sort of a custom hook.
	// We shouldn't be using similar logic again in the Show componenet
	let elementList: InventoryRecord[] = []
	switch (elementPath) {
		case "locations":
			elementList = userData.allLocations
			break
		case "rooms":
			elementList = userData.allRooms
			break
		case "items":
			elementList = userData.allItems
			break
		default:
			elementList = []
	}

	return (
		<div>
			<ul>
				{elementList?.map((element) => {
					return (
						<Link
							to={`/${element.elementType}/${element.id}`}
							state={{ element }}
							key={element.id}
						>
							<li className="show-list-item">
								<strong>{element.name} -</strong> {element.description}
							</li>
						</Link>
					)
				})}
				<li>
					<Link to={`/${elementPath}/new`}>+</Link>
				</li>
			</ul>
			<Outlet />
		</div>
	)
}

export default ElementListLayout
