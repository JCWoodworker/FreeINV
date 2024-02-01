import { useContext } from "react"
import { useParams } from "react-router-dom"

import NotFound from "../../not-found/NotFound"
import BackButton from "../../../components/BackButton"

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
		<div className="w-100 d-flex flex-column justify-content-center align-items-center">
			<div className="m-2 d-flex flex-column justify-content-center align-items-center">
				<h1>{currentLocation?.name}</h1>
				<p>{currentLocation?.description}</p>
			</div>
			<div className="m-2 d-flex flex-column justify-content-center align-items-center">
				<AddDeleteButton
					buttonAction="add"
					buttonText="Add Room"
					linkTo="/my-inventory/rooms/new"
					locationName={currentLocation?.name}
					locationId={currentLocation?.id}
				/>
				<BackButton />
				<AddDeleteButton buttonAction="delete" buttonText="Delete Location" />
			</div>
		</div>
	)
}

export default LocationShow
