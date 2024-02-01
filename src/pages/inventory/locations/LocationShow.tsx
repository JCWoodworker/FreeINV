import { useContext } from "react"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import { ListGroup } from "react-bootstrap"

import NotFound from "../../not-found/NotFound"

import { UserInventoryDataContext } from "../../../App"
import AddDeleteButton from "../../../components/AddDeleteButton"

const LocationShow: React.FC = () => {
	const { userInventoryData } = useContext(UserInventoryDataContext)
	const { id } = useParams()
	const currentLocation = userInventoryData?.find(
		(location) => location.id === Number(id)
	)
	if (!currentLocation) {
		return <NotFound />
	}

	return (
		<div className="m-2 d-flex flex-column justify-content-center align-items-center">
			<h1>{currentLocation?.name}</h1>
			<p>{currentLocation?.description}</p>
			<ListGroup className="m-2">
				{currentLocation?.rooms?.map((room) => (
					<div key={room.id}>
						<Link
							to={`/my-inventory/rooms/${room.id}`}
							state={{ locationId: id, roomId: room.id }}
						>
							<ListGroup.Item key={room.id} className="m-1 rounded">
								{room.name}
							</ListGroup.Item>
						</Link>
					</div>
				))}
			</ListGroup>
			<AddDeleteButton
				locationId={Number(id)}
				buttonText="Add Room"
				buttonAction="Add"
				linkTo="/my-inventory/rooms/new"
			/>
		</div>
	)
}

export default LocationShow
