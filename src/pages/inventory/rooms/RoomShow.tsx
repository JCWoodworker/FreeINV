import { UserLocationData } from "../types"
import { Link, useLocation, useParams } from "react-router-dom"

import NewElementButton from "../../../components/NewElementButton"
import DeleteElementButton from "../../../components/DeleteElementButton"
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
			<ul>
				{itemsList?.map((item) => (
					<div key={item.id} className="room-and-item-list">
						<Link
							to={`/my-inventory/items/${item.id}`}
							state={{ locationId: state, roomId: id, itemId: item.id }}
						>
							<li key={item.id}>{item.name}</li>
						</Link>
						<DeleteElementButton />
					</div>
				))}
			</ul>
			<BackButton />
		</>
	)
}

export default RoomShow
