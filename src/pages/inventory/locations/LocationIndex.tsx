import { UserLocationData } from "../types"
import { Link } from "react-router-dom"

import NewElementButton from "../../../components/NewElementButton"
import BackButton from "../../../components/BackButton"

interface Props {
	userInventoryData: UserLocationData[] | undefined
}

const LocationIndex: React.FC<Props> = ({ userInventoryData }) => {
	const locationList = userInventoryData
		? userInventoryData.map((location) => (
				<li key={location.id} className="location-list-item">
					<Link to={`/my-inventory/${location.id}`}>{location.name}</Link>
				</li>
		))
		: "No Locations Yet"

	return (
		<>
			<h1>My Inventory</h1>
			<NewElementButton to="/my-inventory/new" />
			<ul>{locationList}</ul>
			<BackButton />
		</>
	)
}

export default LocationIndex
