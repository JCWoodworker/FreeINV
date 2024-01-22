import { useState, useContext } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { Form } from "react-bootstrap"
import BackButton from "../../../components/BackButton"
import SubmitButton from "../../../components/SubmitButton"
import { Room } from "../../inventory/types"

import { UserInventoryDataContext } from "../../../App"

const NewRoom: React.FC = () => {
	const { userInventoryData, setUserInventoryData } = useContext(
		UserInventoryDataContext
	)
	const navigate = useNavigate()
	const { state } = useLocation()
	const [newRoomData, setNewRoomData] = useState({
		name: "",
		description: "",
		id: null,
		items: [],
		type: "room",
		locationId: state.locationId,
	})

	const handleTextInputChange = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		setNewRoomData({
			...newRoomData,
			[event.target.name]: event.target.value,
		})
	}

	const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()

		const newRoom = { ...newRoomData, id: Math.floor(Math.random() * 1000000) }
		const updatedInventoryData = userInventoryData?.map((location) => {
			if (location.id === state.locationId) {
				return {
					...location,
					rooms: [...location.rooms, newRoom as Room],
				}
			}
			return location
		})

		setUserInventoryData(updatedInventoryData)
		navigate(`/my-inventory`)
	}

	return (
		<div className="m-2 d-flex flex-column justify-content-center align-items-center">
			<h1>New Room</h1>
			<Form onSubmit={onSubmit}>
				<Form.Group className="mb-3" controlId="formRoomName">
					<Form.Label>Room Name</Form.Label>
					<Form.Control
						type="text"
						placeholder="Enter Room Name"
						name="name"
						onChange={handleTextInputChange}
					/>
				</Form.Group>
				<Form.Group className="mb-3" controlId="formRoomDescription">
					<Form.Label>Room Description</Form.Label>
					<Form.Control
						type="text"
						placeholder="Enter Room Description"
						name="description"
						onChange={handleTextInputChange}
					/>
				</Form.Group>
				<SubmitButton buttonText="Create Room" />
			</Form>
			<BackButton />
		</div>
	)
}

export default NewRoom
