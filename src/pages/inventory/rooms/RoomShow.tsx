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
	const itemsList = currentRoom?.items
	
	if (!currentRoom) {
		return <NotFound />
	}

	return (
		<>
			<h1>{currentRoom?.name}</h1>
			<NewElementButton to="/my-inventory/rooms/new" />
			<ul>{itemsList?.map((item) => <li key={item.id}>{item.name}</li>)}</ul>
			<BackButton />
		</>
	)
}

export default RoomShow
