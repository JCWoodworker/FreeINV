import { UserLocationData } from "../types"
import { Link } from "react-router-dom"

interface Props {
	userInventoryData: UserLocationData[] | undefined
}

const LocationIndex: React.FC<Props> = ({ userInventoryData }) => {

	const locationList = userInventoryData
		? userInventoryData.map((location) => (
				<li key={location.id}>
					<Link to={`/my-inventory/${location.id}`}>
						{location.name}
					</Link>
				</li>
		))
		: "No Locations Yet"

	return (
		<>
			<h1>Location Index</h1>
			<Link to={".."}>
				<p>{`<- Back`}</p>
			</Link>
			<Link to="/my-inventory/new">New Location</Link>
			<ul>{locationList}</ul>
		</>
	)
}

export default LocationIndex
