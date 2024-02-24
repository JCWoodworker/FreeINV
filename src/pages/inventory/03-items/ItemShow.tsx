import { useContext } from "react"
import { useLocation } from "react-router-dom"

import { UserInventoryDataContext } from "../../../App"
import BackButton from "../../../components/BackButton"

const ItemShow: React.FC = () => {
	const { userInventoryData } = useContext(UserInventoryDataContext)
	const { state } = useLocation()
	const { locationId, roomId, itemId } = state

	const currentItem = userInventoryData
		?.find((location) => location.id === Number(locationId))
		?.rooms?.find((room) => room.id === Number(roomId))
		?.items?.find((item) => item.id === Number(itemId))


	return (
		<div>
			<h1>{currentItem?.name}</h1>
			<p>{currentItem?.description}</p>
			<BackButton />
		</div>
	)
}

export default ItemShow
