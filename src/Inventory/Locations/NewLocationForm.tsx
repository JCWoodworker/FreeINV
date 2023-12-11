import { useState } from "react"
import { Form, Button } from "react-bootstrap"

interface Props {
	addLocation: () => void
}

const NewLocationForm: React.FC<Props> = ({ addLocation }) => {
	const [formData, setFormData] = useState("")
	console.log(formData + setFormData)

	return (
		<>
			<Form className="locations-form" onSubmit={() => addLocation()}>
				<Form.Group className="form-group" controlId="location-name">
					<Form.Label>Location Name</Form.Label>
					<Form.Control
						className="form-control"
						type="text"
						placeholder="Enter Name"
					/>
				</Form.Group>

				<Form.Group className="form-group" controlId="location-description">
					<Form.Label>Location Description</Form.Label>
					<Form.Control
						className="form-control-text-area"
						type="text-area"
						placeholder="Enter Description"
					/>
				</Form.Group>

				<Button type="submit">Submit</Button>
			</Form>
		</>
	)
}

export default NewLocationForm
