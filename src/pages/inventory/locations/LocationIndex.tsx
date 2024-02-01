import { useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import { ListGroup } from "react-bootstrap"

import AddDeleteButton from "../../../components/AddDeleteButton"

import { UserLocationData } from "../inventoryTypes"

interface Props {
	userInventoryData: UserLocationData[] | undefined
	userIsLoggedIn: boolean
}

const LocationIndex: React.FC<Props> = ({
	userInventoryData,
	userIsLoggedIn,
}) => {
	const navigate = useNavigate()
	useEffect(() => {
		if (!userIsLoggedIn) {
			navigate("/")
		}
	})
	return (
		<div className="location-indexm-2 vw-100 d-flex flex-column justify-content-center align-items-center">
			<h1>My Inventory</h1>
			<h2>Locations:</h2>
			<ListGroup>
				{userInventoryData?.map((location) => (
					<div key={location.id} className="d-flex flex-row justify-content-center align-items-center text-center">
						<ListGroup.Item
							key={location.id}
							eventKey={location.id.toString()}
							className="m-1 rounded w-100"
						>
							<Link to={`/my-inventory/locations/${location.id}`}>
								<strong>{location.name}</strong>
							</Link>
						</ListGroup.Item>
					</div>
				))}
			</ListGroup>
			<br />
			<AddDeleteButton
				buttonText="New Location"
				buttonAction="add"
				linkTo="/my-inventory/new"
			/>
		</div>
	)
}

export default LocationIndex
