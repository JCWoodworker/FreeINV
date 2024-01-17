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
					onClick={() => handleLocationClick(location.id)}
				>
					{location.name}
				</li>
				{expandedLocationId === location.id && (
					<ul>
						<div>
							<NewElementButton
								to="/my-inventory/rooms/new"
								state={location.id}
							/>
						</div>
						{location.rooms?.map((room) => (
							<div key={room.id} >
								<Link
									to={`/my-inventory/rooms/${room.id}`}
									state={location.id}
								>
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
			<h1>My Inventory</h1>
			<div>
				<h2>Locations:</h2>
				<NewElementButton to="/my-inventory/new" />
			</div>
			<ul>{locationList}</ul>
			<BackButton />
		</>
	)
}

export default LocationIndex
