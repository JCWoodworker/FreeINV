import { useContext } from "react"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import { ListGroup } from "react-bootstrap"

import NotFound from "../../not-found/NotFound"

import { UserInventoryDataContext } from "../../../App"
import AddDeleteButton from "../../../components/AddDeleteButton"
import BackButton from "../../../components/BackButton"

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
		<div className="location-show m-2 w-100 d-flex flex-column justify-content-center align-items-center">
			<h1>{currentLocation?.name}</h1>
			<p>{currentLocation?.description}</p>
			<ListGroup className="m-2 w-100">
				{currentLocation?.rooms?.map((room) => (
					<div
						key={room.id}
						className="w-100 d-flex flex-row justify-content-center align-items-center text-center"
					>
						<Link
							to={`/my-inventory/rooms/${room.id}`}
							state={{
								locationId: id,
								roomId: room.id,
								locationName: currentLocation?.name,
							}}
							className="w-sm-100, w-50"
						>
							<ListGroup.Item
								action variant="light"
								key={room.id}
								className="m-1 rounded"
							>
								<strong>{room.name}</strong>
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
				locationName={currentLocation?.name}
			/>
			<BackButton />
		</div>
	)
}

export default LocationShow
