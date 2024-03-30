import { Link } from "react-router-dom"
import { UserLocationData } from "../inventoryTypes"

interface Props {
	userInventoryData: UserLocationData[] | undefined
}

const RoomIndex: React.FC<Props> = ({ userInventoryData }) => {
	const roomList = userInventoryData?.flatMap((location) => {
		return location.rooms.map((room) => ({
			...room,
			locationName: location.name,
		}))
	})

	return (
		<>
			<p>Rooms</p>
			<div>
				{roomList?.map((room) => (
					<Link to={`/my-inventory/rooms/${room.id}`} key={room.id}>
						<div key={room.id}>
							<strong>{room.name}</strong>
							<p>Location: {room.locationName}</p>
						</div>
					</Link>
				))}
			</div>
		</>
	)
}
export default RoomIndex
