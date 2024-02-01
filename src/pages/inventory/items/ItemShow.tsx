import { useContext } from "react"
import { useLocation } from "react-router-dom"

import { UserInventoryDataContext } from "../../../App"

const ItemShow: React.FC = () => {
	const { userInventoryData } = useContext(UserInventoryDataContext)
	const { state } = useLocation()
	const { locationId, roomId, itemId } = state

	const currentItem = userInventoryData
		?.find((location) => location.id === Number(locationId))
		?.rooms?.find((room) => room.id === Number(roomId))
		?.items?.find((item) => item.id === Number(itemId))


	return (
		<div className="m-2 d-flex flex-column justify-content-center align-items-center">
			<h1>{currentItem?.name}</h1>
			<p>{currentItem?.description}</p>
			
		</div>
	)
}

export default ItemShow
