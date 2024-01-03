import { useLocation, Link } from "react-router-dom"
import { InventoryRecord } from "../../routes/testUserData"
import { userData } from "../../routes/testUserData"
import { ElementType } from "../../routes/testUserData"

const InventoryShow: React.FC = () => {
	const { state } = useLocation()

	let elementList: InventoryRecord[] = []
	if (state.element.elementType === ElementType.LOCATION) {
		elementList = userData.allRooms.filter(
			(room) => room.parentId === state.element.id
		)
	} else if (state.element.elementType === ElementType.ROOM) {
		elementList = userData.allItems.filter(
			(item) => item.parentId === state.element.id
		)
	} else if (state.element.elementType === ElementType.ITEM) {
		return (
			<>
				<h2>{state.element.name}</h2>
			</>
		)
	}

	// console.log(state.element.elementType)
	
	return (
		<div>
			<h1>{state.element.name}</h1>
			<ul>
				{elementList?.map((element) => (
					<Link
						to={`/${element.elementType}/${element.id}`}
						state={{ element }}
						key={element.id}
					>
						<li className="show-list-item">
							<strong>{element.name} -</strong> {element.description}
						</li>
					</Link>
				))}
			</ul>
		</div>
	)
}

export default InventoryShow
