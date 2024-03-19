import { Link } from "react-router-dom"
import { Typography } from "@mui/material"
import { UserLocationData } from "../inventoryTypes"
import InventoryPageBox from "../../../layouts/InventoryPageBox"
import InventoryElementCard from "../../../layouts/InventoryElementCard"

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
			<Typography variant="h5" sx={{ mt: 5 }}>Items</Typography>
			<InventoryPageBox>
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
						<InventoryElementCard key={item.id}>
							<strong>{item.name}</strong>
							<p>Room: {item.roomName}</p>
							<p>Location: {item.locationName}</p>
						</InventoryElementCard>
					</Link>
				))}
			</InventoryPageBox>
		</>
	)
}

export default ItemIndex
