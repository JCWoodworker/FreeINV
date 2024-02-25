import { useContext } from "react"
import { useLocation } from "react-router-dom"
import { Typography } from "@mui/material"

import { UserInventoryDataContext } from "../../../App"
import InventoryShowBox from "../../../layouts/InventoryPageBox"

const ItemShow: React.FC = () => {
	const { userInventoryData } = useContext(UserInventoryDataContext)
	const { state } = useLocation()
	const { locationId, roomId, itemId } = state

	const currentItem = userInventoryData
		?.find((location) => location.id === Number(locationId))
		?.rooms?.find((room) => room.id === Number(roomId))
		?.items?.find((item) => item.id === Number(itemId))

	return (
		<InventoryShowBox>
			<Typography variant="h3">{currentItem?.name}</Typography>
			<Typography variant="caption">{currentItem?.description}</Typography>
			<img
				src={
					currentItem?.image_url ||
					"https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/832px-No-Image-Placeholder.svg.png"
				}
				alt={currentItem?.name}
			/>
		</InventoryShowBox>
	)
}

export default ItemShow
