import { useState } from "react"
import { Container, Row, Button } from "react-bootstrap"
import NewLocationForm from "./NewLocationForm"


interface Location {
	id: number
	name: string
	description: string
}

const LoactionsIndex: React.FC = () => {
	const [locations, setLocations] = useState<Location[]>([])
  const [showNewLocationForm, setShowNewLocationForm] = useState(false)
	console.log(setLocations)

  const addLocation = () => {
		return true
	}

  const showLocationForm = () => {
    setShowNewLocationForm(() =>!showNewLocationForm)
  }

	return (
		<Container>
			<Row>
				<h3>Locations</h3>
				{locations.length > 0 ? (
					locations.map((location) => <p key={location.id}>{location.name}</p>)
				) : (
					<p>None Yet</p>
				)}
			</Row>
			<Row>
				<Button className="button" onClick={showLocationForm}>
					{showNewLocationForm ? "Cancel" : "Add Location"}
				</Button>
			</Row>
      <Row>
        {showNewLocationForm ? <NewLocationForm addLocation={addLocation}/> : null}
      </Row>
		</Container>
	)
}

export default LoactionsIndex
