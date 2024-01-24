import { useState, useContext } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { Form } from "react-bootstrap"

import BackButton from "../../../components/BackButton"
import SubmitButton from "../../../components/SubmitButton"

import { UserInventoryDataContext } from "../../../App"
import { Request, NewRoomDto } from "../../../utils/index"

const NewRoom: React.FC = () => {
	const { userInventoryData, setUserInventoryData } = useContext(
		UserInventoryDataContext
	)
	const navigate = useNavigate()
	const { state } = useLocation()
	const [newRoomData, setNewRoomData] = useState<NewRoomDto>({
		name: "",
		description: "",
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

	const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		const newRoom = await Request.post("/freeinv/rooms", newRoomData, true)
		if (!newRoom) {
			console.log(`Failed to add new room`)
			return false
		}

		const updatedInventoryData = userInventoryData?.map((location) => {
			if (location.id === state.locationId) {
				return {
					...location,
					rooms: location.rooms
						? [...location.rooms, { ...newRoom, items: [] }]
						: [{ ...newRoom, items: [] }],
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
