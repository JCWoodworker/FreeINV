import { useState, useContext } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { Form } from "react-bootstrap"
import { Item } from "../../inventory/types"

import BackButton from "../../../components/BackButton"
import SubmitButton from "../../../components/SubmitButton"

import { UserInventoryDataContext } from "../../../App"

const NewItem: React.FC = () => {
	const { userInventoryData, setUserInventoryData } = useContext(
		UserInventoryDataContext
	)
	const { state } = useLocation()
	const navigate = useNavigate()
	const [newItemData, setNewItemData] = useState<Item>({
		name: "",
		description: "",
		type: "item",
		id: Math.floor(Math.random() * 1000000),
		roomId: state.roomId,
	})

	const handleTextInputChange = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		setNewItemData({
			...newItemData,
			[event.target.name]: event.target.value,
		})
	}

	const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()

		const newItem = { ...newItemData }
		const updatedInventoryData = userInventoryData?.map((location) => {
			if (location.id === state.locationId) {
				const targetRoom = location.rooms.find(
					(room) => room.id === state.roomId
				)
				if (targetRoom) {
					return {
						...location,
						rooms: location.rooms.map((room) =>
							room === targetRoom
								? { ...room, items: [...room.items, newItem] }
								: room
						),
					}
				}
			}
			return location
		})

		setUserInventoryData(updatedInventoryData)
		navigate(`/my-inventory/rooms/${state.roomId}`)
	}

	return (
		<div className="m-2 d-flex flex-column justify-content-center align-items-center">
			<h1>New Item</h1>
			<Form onSubmit={onSubmit}>
				<Form.Group className="mb-3" controlId="formItemName">
					<Form.Label>Item Name</Form.Label>
					<Form.Control
						type="text"
						placeholder="Enter Item Name"
						name="name"
						onChange={handleTextInputChange}
					/>
				</Form.Group>
				<Form.Group className="mb-3" controlId="formItemDescription">
					<Form.Label>Item Description</Form.Label>
					<Form.Control
						type="text"
						placeholder="Enter Item Description"
						name="description"
						onChange={handleTextInputChange}
					/>
				</Form.Group>
				<SubmitButton buttonText="Create Item" />
			</Form>
			<BackButton />
		</div>
	)
}

export default NewItem
