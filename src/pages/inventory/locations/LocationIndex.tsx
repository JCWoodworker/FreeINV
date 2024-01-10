import { useState } from "react"
import { UserLocationData } from "../types"
import { Link } from "react-router-dom"

import NewElementButton from "../../../components/NewElementButton"
import DeleteElementButton from "../../../components/DeleteElementButton"
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
							<div key={room.id} className="room-list">
								<Link to={`/my-inventory/rooms/${room.id}`} state={location.id}>
									<li key={room.id}>{room.name}</li>
								</Link>
								<DeleteElementButton />
							</div>
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
