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
		<div className="location-index m-2 w-100 d-flex flex-column justify-content-center align-items-center">
			<h1>My Inventory</h1>
			<h2>Locations:</h2>
			<ListGroup className="m-2 w-100">
				{userInventoryData?.map((location) => (
					<div
						key={location.id}
						className="d-flex flex-row justify-content-center align-items-center text-center"
						>
						<Link to={`/my-inventory/locations/${location.id}`} className="w-sm-100, w-50">
							<ListGroup.Item
								key={location.id}
								eventKey={location.id.toString()}
								className="m-1 rounded"
							>
								<strong>{location.name}</strong>
							</ListGroup.Item>
						</Link>
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
