import { useContext } from "react"
import { Room, Item } from "../inventoryTypes"
import { Link, useParams } from "react-router-dom"
import { ListGroup } from "react-bootstrap"

import NotFound from "../../not-found/NotFound"
import AddDeleteButton from "../../../components/AddDeleteButton"

import { UserInventoryDataContext } from "../../../App"
import BackButton from "../../../components/BackButton"

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
		<div className="room-show w-100 m-2 d-flex flex-column justify-content-center align-items-center">
			<h1>
				{currentRoom?.name}
			</h1>
			<p>{currentRoom?.description}</p>
			<ListGroup className="m-2 w-100">
				{itemsList?.map((item) => (
					<div
						key={item.id}
						className="w-100 d-flex flex-row justify-content-center align-items-center text-center"
					>
						<Link
							to={`/my-inventory/items/${item.id}`}
							state={{ locationId, roomId: id, itemId: item.id }}
							className="w-sm-100, w-50"
						>
							<ListGroup.Item
								action
								variant="light"
								key={item.id}
								className="m-1 rounded"
							>
								<strong>{item.name}</strong>
							</ListGroup.Item>
						</Link>
					</div>
				))}
			</ListGroup>
			<AddDeleteButton
				buttonText="Add an Item"
				buttonAction="add"
				linkTo="/my-inventory/items/new"
				locationId={locationId}
				roomId={Number(id)}
				roomName={currentRoom?.name}
			/>
			<BackButton />
		</div>
	)
}

export default RoomShow
