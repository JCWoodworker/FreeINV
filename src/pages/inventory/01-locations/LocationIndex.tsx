import { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Typography, Card } from "@mui/material"

import AddDeleteButton from "../../../components/AddDeleteButton"

import { UserLocationData } from "../inventoryTypes"
import useAuth from "../../../hooks/useAuth"
import InventoryElementBox from "../../../layouts/InventoryElementBox"
import InventoryElementCard from "../../../layouts/InventoryElementCard"
import InventoryPageBox from "../../../layouts/InventoryPageBox"

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
				<Card
					variant="outlined"
					key={orphanLocation.id}
					sx={{ m: 1, p: 1, display: "grid", placeItems: "center" }}
				>
					<strong>{orphanLocation.name}</strong>
				</Card>
			</Link>
		)
	}

	return (
		<InventoryPageBox>
			<Typography variant="h3">My Inventory</Typography>
			<Typography variant="h4">Locations:</Typography>
			<InventoryElementBox>
				{userInventoryData
					?.filter((location) => !location.orphan_location)
					.map((location) => (
						<Link
							to={`/my-inventory/locations/${location.id}`}
							key={location.id}
						>
							<InventoryElementCard key={location.id}>
								<strong>{location.name}</strong>
							</InventoryElementCard>
						</Link>
					))}
			</InventoryElementBox>
			<AddDeleteButton
				buttonText="New Location"
				buttonAction="add"
				linkTo="/my-inventory/locations/new"
			/>
			{showOrphanLocation}
		</InventoryPageBox>
	)
}

export default LocationIndex
