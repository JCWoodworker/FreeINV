import { UserLocationData } from "../types"
import { Link } from "react-router-dom"

import BackButton from "../../../components/BackButton"
import NewElementButton from "../../../components/NewElementButton"

interface Props {
	userInventoryData: UserLocationData[] | undefined
}

const LocationIndex: React.FC<Props> = ({ userInventoryData }) => {
	const locationList = userInventoryData
		? userInventoryData.map((location) => (
				<li key={location.id}>
					<Link to={`/my-inventory/${location.id}`}>{location.name}</Link>
				</li>
		))
		: "No Locations Yet"

	return (
		<>
			<div className="page-header">
				<BackButton />
				<h1>My Inventory</h1>
				<NewElementButton to="/my-inventory/new" />
			</div>
			<ul>{locationList}</ul>
		</>
	)
}

export default LocationIndex
