import { UserLocationData } from "../types"
import { useLocation, useParams } from "react-router-dom"

import NewElementButton from "../../../components/NewElementButton" 
import NotFound from "../../not-found/NotFound"
import BackButton from "../../../components/BackButton"

interface Props {
	userInventoryData: UserLocationData[] | undefined
}

const RoomShow: React.FC<Props> = ({ userInventoryData }) => {
	const { id } = useParams()
	const { state } = useLocation()
	const currentLocation = userInventoryData?.find(
		(location) => location.id === Number(state)
	)
	const currentRoom = currentLocation?.rooms?.find(
		(room) => room.id === Number(id)
	)
	
	if (!currentRoom) {
		return <NotFound />
	}

	const itemList = "Items will eventually go here"

	return (
		<>
			<h1>{currentRoom?.name}</h1>
			<NewElementButton to="/my-inventory/rooms/new" />
			<ul>{itemList}</ul>
			<BackButton />
		</>
	)
}

export default RoomShow
