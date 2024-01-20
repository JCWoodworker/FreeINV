import { UserLocationData } from "../types"
import { Link, useLocation, useParams } from "react-router-dom"

import NewElementButton from "../../../components/NewElementButton"
import NotFound from "../../not-found/NotFound"
import BackButton from "../../../components/BackButton"

interface Props {
	userInventoryData: UserLocationData[] | undefined
}

const RoomShow: React.FC<Props> = ({ userInventoryData }) => {
	const { id } = useParams()
	const { state } = useLocation()

	const currentRoom = userInventoryData?.find(
		(location) => location.id === Number(state)
	)?.rooms?.find((room) => room.id === Number(id))

	const itemsList = currentRoom?.items

	if (!currentRoom) {
		return <NotFound />
	}

	return (
		<div className="m-2 d-flex flex-column justify-content-center align-items-center">
			<h1>{currentRoom?.name}</h1>
			<NewElementButton to="/my-inventory/items/new" />
			<ul>
				{itemsList?.map((item) => (
					<div key={item.id}>
						<Link
							to={`/my-inventory/items/${item.id}`}
							state={{ locationId: state, roomId: id, itemId: item.id }}
						>
							<li key={item.id}>{item.name}</li>
						</Link>
					</div>
				))}
			</ul>
			<BackButton />
		</div>
	)
}

export default RoomShow
