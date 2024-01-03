import { useLocation, Link } from "react-router-dom"
import { InventoryRecord } from "../../routes/testUserData"
import { userData } from "../../routes/testUserData"
import { ElementType } from "../../routes/testUserData"

const InventoryShow: React.FC = () => {
	const { state } = useLocation()

	let elementList: InventoryRecord[] = []
	let subElement: string = ""
	if (state.element.elementType === ElementType.LOCATION) {
		elementList = userData.allRooms.filter(
			(room) => room.parentId === state.element.id
		)
		subElement = "rooms"
	} else if (state.element.elementType === ElementType.ROOM) {
		elementList = userData.allItems.filter(
			(item) => item.parentId === state.element.id
		)
		subElement = "items"
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
			<p>
				<Link to={`/${subElement}/new`}>+</Link>
			</p>
			<ul className="show-list">
				{elementList?.map((element) => (
					<Link
						to={`/${element.elementType}/${element.id}`}
						state={{ element }}
						key={element.id}
					>
						<li className="show-list-item element-link">
							<strong className="strong-highlight">{element.name}</strong>{" "}
							{element.description}
						</li>
					</Link>
				))}
			</ul>
		</div>
	)
}

export default InventoryShow
