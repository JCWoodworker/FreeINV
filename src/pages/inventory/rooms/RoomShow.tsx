import { useContext } from "react"
import { Room, Item } from "../inventoryTypes"
import { Link, useParams } from "react-router-dom"
import { ListGroup } from "react-bootstrap"

import NotFound from "../../not-found/NotFound"
import AddDeleteButton from "../../../components/AddDeleteButton"

import { UserInventoryDataContext } from "../../../App"

const RoomShow: React.FC = () => {
	const { userInventoryData, } = useContext(
		UserInventoryDataContext
	)
	const { id } = useParams()
	
	const currentRoom: Room | undefined = userInventoryData
	?.flatMap((location) => location.rooms)
	.find((room) => room?.id === Number(id))
	const locationId = Number(currentRoom?.locationId)
	const itemsList: Item[] | undefined = currentRoom?.items

	if (!currentRoom) {
		return <NotFound />
	}

	return (
		<div className="m-2 d-flex flex-column justify-content-center align-items-center">
			<h1>{currentRoom?.name}</h1>
			<p>{currentRoom?.description}</p>
			<ListGroup className="m-2">
				{itemsList?.map((item) => (
					<div key={item.id}>
						<Link
							to={`/my-inventory/items/${item.id}`}
							state={{ locationId, roomId: id, itemId: item.id }}
						>
							<ListGroup.Item key={item.id} className="m-1 rounded">
								{item.name}
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
			/>
			
		</div>
	)
}

export default RoomShow
