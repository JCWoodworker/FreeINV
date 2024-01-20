import { useState } from "react"
import { UserLocationData } from "../types"
import { Link } from "react-router-dom"
import { Accordion } from "react-bootstrap"

import NewElementButton from "../../../components/NewElementButton"
import DeleteElementButton from "../../../components/DeleteElementButton"
import BackButton from "../../../components/BackButton"

interface Props {
	userInventoryData: UserLocationData[] | undefined
}
const LocationIndex: React.FC<Props> = ({ userInventoryData }) => {

	return (
		<div className="m-2 d-flex flex-column justify-content-center align-items-center">
			<h1>My Inventory</h1>
			<div>
				<h2>Locations:</h2>
				<NewElementButton to="/my-inventory/new" />
			</div>
			<BackButton />
			<Accordion flush>
				{userInventoryData?.map((location) => (
					<Accordion.Item
						key={location.id}
						eventKey={location.id.toString()}
					>
						<Accordion.Header>{location.name}</Accordion.Header>
						<Accordion.Body>
							{location.description}
							{location.rooms.map((room) => (
								<div key={room.id}>
									<Link
										to={`/my-inventory/rooms/${room.id}`}
										state={location.id}
									>
										{room.name}
									</Link>
									<DeleteElementButton />
								</div>
							))}
						</Accordion.Body>
					</Accordion.Item>
				))}

			</Accordion>
		</div>
	)
}

export default LocationIndex
