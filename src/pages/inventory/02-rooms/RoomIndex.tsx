import { Link } from "react-router-dom"
import { Typography } from "@mui/material"
import InventoryPageBox from "../../../layouts/InventoryPageBox"
import { UserLocationData } from "../inventoryTypes"
import InventoryElementCard from "../../../layouts/InventoryElementCard"

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
			<Typography variant="h4" sx={{ mt: 5 }}>
				Rooms
			</Typography>
			<InventoryPageBox>
				{roomList?.map((room) => (
					<Link to={`/my-inventory/rooms/${room.id}`} key={room.id}>
						<InventoryElementCard key={room.id}>
							<strong>{room.name}</strong>
							<p>Location: {room.locationName}</p>
						</InventoryElementCard>
					</Link>
				))}
			</InventoryPageBox>
		</>
	)
}
export default RoomIndex
