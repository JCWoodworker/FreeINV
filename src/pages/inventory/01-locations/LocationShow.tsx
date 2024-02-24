import { useContext } from "react"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"

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
		<div>
			<div>
				<h1>{currentLocation?.name}</h1>
				<p>{currentLocation?.description}</p>
			</div>
			<ul>
				{currentLocation?.rooms?.map((room) => (
					<div key={room.id}>
						<Link
							to={`/my-inventory/rooms/${room.id}`}
							state={{
								locationId: id,
								roomId: room.id,
								locationName: currentLocation?.name,
							}}
						>
							<li key={room.id}>
								<strong>{room.name}</strong>
							</li>
						</Link>
					</div>
				))}
			</ul>
			<div>
				<AddDeleteButton
					buttonAction="add"
					buttonText="Add Room"
					linkTo="/my-inventory/rooms/new"
					locationName={currentLocation?.name}
					locationId={currentLocation?.id}
				/>
				<AddDeleteButton buttonAction="delete" buttonText="Delete Location" />
			</div>
		</div>
	)
}

export default LocationShow
