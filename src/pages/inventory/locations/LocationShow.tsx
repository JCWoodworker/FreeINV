import { useParams } from "react-router-dom"
import { UserLocationData } from "../types"

import NotFound from "../../not-found/NotFound"
import BackButton from "../../../components/BackButton"

interface Props {
	userInventoryData: UserLocationData[] | undefined
}

const LocationShow: React.FC<Props> = ({ userInventoryData }) => {
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
