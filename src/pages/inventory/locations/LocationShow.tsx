import { useContext } from "react"
import { useParams } from "react-router-dom"

import NotFound from "../../not-found/NotFound"
import BackButton from "../../../components/BackButton"

import { UserInventoryDataContext } from "../../../App"


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
			<BackButton />
		</div>
	)
}

export default LocationShow
