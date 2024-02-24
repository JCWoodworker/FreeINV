import { useEffect } from "react"
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

	return (
		<div>
			<h1>My Inventory</h1>
			<h2>Locations:</h2>
			<ul>
				{userInventoryData?.map((location) => (
					<div key={location.id}>
						<Link to={`/my-inventory/locations/${location.id}`}>
							<li key={location.id}>
								<strong>{location.name}</strong>
							</li>
						</Link>
					</div>
				))}
			</ul>
			<br />
			<AddDeleteButton
				buttonText="New Location"
				buttonAction="add"
				linkTo="/my-inventory/locations/new"
			/>
		</div>
	)
}

export default LocationIndex
