import { useParams } from "react-router-dom"
import { UserLocationData } from "../types"

import BackButton from "../../../components/BackButton"

interface Props {
	userInventoryData: UserLocationData[] | undefined
}

const LocationShow: React.FC<Props> = ({ userInventoryData }) => {
	const { id } = useParams()
	const currentLocation = userInventoryData?.find(
		(location) => location.id === Number(id)
	)

	return (
		<>
			<h2>{currentLocation?.name}</h2>
			<p>{currentLocation?.description}</p>
			<BackButton />
		</>
	)
}

export default LocationShow
