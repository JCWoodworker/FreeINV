import { Link } from "react-router-dom"
import { UserLocationData } from "../inventoryTypes"

interface Props {
	userInventoryData: UserLocationData[] | undefined
}

const ItemIndex: React.FC<Props> = ({ userInventoryData }) => {
	const itemList = userInventoryData?.flatMap((location) => {
		return location.rooms.flatMap((room) => {
			return room.items.map((item) => ({
				...item,
				locationId: location.id,
				locationName: location.name,
				roomName: room.name,
			}))
		})
	})

	return (
		<>
			<p>Items</p>
			<div>
				{itemList?.map((item) => (
					<Link
						key={item.id}
						to={`/my-inventory/items/${item.id}`}
						state={{
							locationId: item.locationId,
							roomId: item.roomId,
							itemId: item.id,
						}}
					>
						<div key={item.id}>
							<strong>{item.name}</strong>
							<p>Room: {item.roomName}</p>
							<p>Location: {item.locationName}</p>
						</div>
					</Link>
				))}
			</div>
		</>
	)
}

export default ItemIndex
