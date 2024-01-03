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

	console.log(state.element)
	console.log(elementList)

	return (
		<div>
			<h1>{state.element.name}</h1>
			{elementList?.map((element) => (
				<Link to={`/${state.element.elementType}/${element.id}`} state={{ element }}>
					<div key={element.id} className={"show-list-item"}>
						<h3>{element.name} -</h3>
						<p>{element.description}</p>
					</div>
				</Link>
			))}
		</div>
	)
}

export default InventoryShow
