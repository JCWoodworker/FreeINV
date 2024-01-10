import { useState } from "react"
import { UserLocationData } from "../types"
import { Link } from "react-router-dom"

import NewElementButton from "../../../components/NewElementButton"
import BackButton from "../../../components/BackButton"

// <Link key={location.id} to={`/my-inventory/${location.id}`} />

interface Props {
	userInventoryData: UserLocationData[] | undefined
}
const LocationIndex: React.FC<Props> = ({ userInventoryData }) => {
	const [expandedLocationId, setExpandedLocationId] = useState<number | null>(
		null
	)

	const handleLocationClick = (locationId: number) => {
		setExpandedLocationId(expandedLocationId === locationId ? null : locationId)
	}

	const locationList = userInventoryData?.map((location) => {
		return (
			<>
				<li
					key={location.id}
					className="location-list-item"
					onClick={() => handleLocationClick(location.id)}
				>
					{location.name}
				</li>
				{expandedLocationId === location.id && (
					<ul className="rooms-list">
						{location.rooms?.map((room) => (
							<>
								<Link
									key={room.id}
									to={`/my-inventory/rooms/${room.id}`}
									state={location.id}
								>
									<li key={room.id}>{room.name}</li>
								</Link>
								<NewElementButton to="/rooms/new" state={location.id} />
							</>
						))}
					</ul>
				)}
			</>
		)
	})

	return (
		<>
			<h1>My Inventory Locations</h1>
			<NewElementButton to="/my-inventory/new" />
			<ul>{locationList}</ul>
			<BackButton />
		</>
	)
}

export default LocationIndex
