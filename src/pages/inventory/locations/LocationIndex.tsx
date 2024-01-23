import { Link, useNavigate } from "react-router-dom"
import { Accordion } from "react-bootstrap"

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
	if (!userIsLoggedIn) {
		navigate("/")
	}
	return (
		<div className="location-indexm-2 vw-100 d-flex flex-column justify-content-center align-items-center">
			<h1>My Inventory</h1>
			<h2>Locations:</h2>
			<Accordion flush>
				{userInventoryData?.map((location) => (
					<Accordion.Item
						key={location.id}
						eventKey={location.id.toString()}
						className="m-1 rounded w-100"
					>
						<Accordion.Header>
							<strong>{location.name}</strong>
						</Accordion.Header>
						<Accordion.Body className="accordion-item-body d-flex flex-column justify-content-center align-items-center">
							<div className="accordion-item-description-and-list d-flex flex-column justify-content-center align-items-center gap-2">
								{location.description}
								{location?.rooms?.map((room) => (
									<div key={room.id}>
										<Link
											to={`/my-inventory/rooms/${room.id}`}
											state={location.id}
										>
											{room.name}
										</Link>
									</div>
								))}
							</div>
							<AddDeleteButton
								buttonText="Add a Room"
								buttonAction="add"
								linkTo="/my-inventory/rooms/new"
								locationId={location.id}
							/>
						</Accordion.Body>
					</Accordion.Item>
				))}
			</Accordion>
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
