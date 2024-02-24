import { useContext } from "react"
import { Room, Item } from "../inventoryTypes"
import { Link, useParams } from "react-router-dom"

import NotFound from "../../not-found/NotFound"
import AddDeleteButton from "../../../components/AddDeleteButton"

import { UserInventoryDataContext } from "../../../App"

const RoomShow: React.FC = () => {
	// const [locationName, setLocationName] = useState<string>("")
	const { userInventoryData } = useContext(UserInventoryDataContext)
	const { id } = useParams()
	// const { state } = useLocation()
	// setLocationName(state.locationName)

	const currentRoom: Room | undefined = userInventoryData
		?.flatMap((location) => location.rooms)
		.find((room) => room?.id === Number(id))
	const locationId = Number(currentRoom?.locationId)
	const itemsList: Item[] | undefined = currentRoom?.items

	if (!currentRoom) {
		return <NotFound />
	}

	return (
		<>
			<div>
				<h1>{currentRoom?.name}</h1>
				<p>{currentRoom?.description}</p>
				<ul>
					{itemsList?.map((item) => (
						<div key={item.id}>
							<Link
								to={`/my-inventory/items/${item.id}`}
								state={{ locationId, roomId: id, itemId: item.id }}
							>
								<li key={item.id}>
									<strong>{item.name}</strong>
								</li>
							</Link>
						</div>
					))}
				</ul>
				<div>
					<AddDeleteButton
						buttonText="Add an Item"
						buttonAction="add"
						linkTo="/my-inventory/items/new"
						locationId={locationId}
						roomId={Number(id)}
						roomName={currentRoom?.name}
					/>
				</div>
			</div>
		</>
	)
}

export default RoomShow
