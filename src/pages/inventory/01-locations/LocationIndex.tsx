import { useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Typography } from "@mui/material"

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

	return (
		<InventoryPageBox>
			<Typography variant="h2">My Inventory</Typography>
			<Typography variant="h3">Locations:</Typography>
			<InventoryElementBox>
				{userInventoryData?.map((location) => (
					<Link to={`/my-inventory/locations/${location.id}`} key={location.id}>
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
		</InventoryPageBox>
	)
}

export default LocationIndex
