import { useContext } from "react"
import { useLocation } from "react-router-dom"

import { UserInventoryDataContext } from "../../../App"
// import AddImage from "../../../components/AddImage"

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
			<h5>{currentItem?.name}</h5>
			<p>{currentItem?.description}</p>
			{/* <AddImage itemId={currentItem?.id} /> */}
			<img
				src={
					currentItem?.image_url ||
					"https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/832px-No-Image-Placeholder.svg.png"
				}
				style={{ width: "200px", height: "auto" }}
				alt={currentItem?.name}
			/>
		</div>
	)
}

export default ItemShow
