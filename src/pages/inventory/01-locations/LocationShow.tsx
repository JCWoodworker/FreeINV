import { useContext } from "react"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"

import NotFound from "../../not-found/NotFound"

import { UserInventoryDataContext } from "../../../App"
import AddDeleteButton from "../../../components/AddDeleteButton"
// import AddImage from "../../../components/AddImage"

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
			<h5>{currentLocation?.name}</h5>
			<h5>{currentLocation?.description}</h5>
			{/* <AddImage locationId={currentLocation?.id} /> */}
			<div>
				{currentLocation?.rooms?.map((room) => (
					<Link
						key={room.id}
						to={`/my-inventory/rooms/${room.id}`}
						state={{
							locationId: id,
							roomId: room.id,
							locationName: currentLocation?.name,
						}}
					>
						<div key={room.id}>
							<strong>{room.name}</strong>
						</div>
					</Link>
				))}
			</div>
			<div>
				<AddDeleteButton
					buttonAction="add"
					buttonText="Add Room"
					linkTo="/my-inventory/rooms/new"
					locationName={currentLocation?.name}
					locationId={currentLocation?.id}
				/>
				<AddDeleteButton
					buttonAction="delete"
					buttonText="Delete Location"
					locationId={currentLocation?.id}
				/>
			</div>
		</div>
	)
}

export default LocationShow
