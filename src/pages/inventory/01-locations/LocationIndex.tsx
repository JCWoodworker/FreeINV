import { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"

import AddDeleteButton from "../../../components/AddDeleteButton"

import { UserLocationData } from "../inventoryTypes"
import useAuth from "../../../hooks/useAuth"

interface Props {
	userInventoryData: UserLocationData[] | undefined
}

const LocationIndex: React.FC<Props> = ({ userInventoryData }) => {
	const { persist } = useAuth()
	const navigate = useNavigate()
	useEffect(() => {
		if (!persist) {
			navigate("/")
		}
	})
	const [orphanLocation, setOrphanLocation] = useState<UserLocationData>({
		id: 0,
		name: "",
		description: "",
		type: "location",
		rooms: [],
		image_url: "",
		orphan_location: false,
	})

	useEffect(() => {
		const findOrphanLocation = () => {
			const orphan = userInventoryData?.find(
				(location) => location.orphan_location
			)
			if (!orphan) return
			setOrphanLocation(orphan)
		}

		findOrphanLocation()
	}, [userInventoryData])

	let showOrphanLocation = null
	if (orphanLocation.id != 0) {
		showOrphanLocation = (
			<Link
				to={`/my-inventory/locations/${orphanLocation.id}`}
				key={orphanLocation.id}
			>
				<div key={orphanLocation.id}>
					<strong>{orphanLocation.name}</strong>
				</div>
			</Link>
		)
	}

	return (
		<>
			<p>Locations</p>
			<div>
				<div>
					{userInventoryData
						?.filter((location) => !location.orphan_location)
						.map((location) => (
							<Link
								to={`/my-inventory/locations/${location.id}`}
								key={location.id}
							>
								<div key={location.id}>
									<strong>{location.name}</strong>
								</div>
							</Link>
						))}
				</div>
				<AddDeleteButton
					buttonText="New Location"
					buttonAction="add"
					linkTo="/my-inventory/locations/new"
				/>
				{showOrphanLocation}
			</div>
		</>
	)
}

export default LocationIndex
