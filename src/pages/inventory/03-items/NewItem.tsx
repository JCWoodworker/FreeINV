import { useState, useContext } from "react"
import { useLocation, useNavigate } from "react-router-dom"

import useAuth from "../../../hooks/useAuth"
import { UserInventoryDataContext } from "../../../App"
import { Item } from "../inventoryTypes"

import { Request } from "../../../utils/requests/Request"
import { NewItemDto } from "../../../utils/requests/types"

const NewItem: React.FC = () => {
	const { auth } = useAuth()
	const { userInventoryData, setUserInventoryData } = useContext(
		UserInventoryDataContext
	)
	const { state } = useLocation()
	const navigate = useNavigate()
	const [newItemData, setNewItemData] = useState<NewItemDto>({
		name: "",
		description: "",
		type: "item",
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

	const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		const accessToken = auth?.accessToken
		const newItem: Item = await Request.post(
			"/subapps/freeinv/items",
			newItemData,
			true,
			accessToken
		)
		if (!newItem) {
			console.log(`Failed to add new item`)
			return false
		}

		const updatedInventoryData = userInventoryData?.map((location) => {
			if (location.id === state.locationId) {
				const targetRoom = location.rooms.find(
					(room) => room.id === state.roomId
				)
				if (targetRoom) {
					return {
						...location,
						rooms: location?.rooms?.map((room) =>
							room === targetRoom
								? room.items
									? { ...room, items: [...room.items, newItem] }
									: { ...room, items: [newItem] }
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
		<div>
			<h1>New item in {state.roomName}</h1>
			<form onSubmit={onSubmit}>
				<label>Item Name</label>
				<input
					type="text"
					placeholder="Enter Item Name"
					name="name"
					onChange={handleTextInputChange}
					required={true}
				/>
				<label>Item Description</label>
				<input
					type="text"
					placeholder="Enter Item Description"
					name="description"
					onChange={handleTextInputChange}
				/>
				<button type="submit">Submit</button>
			</form>
		</div>
	)
}

export default NewItem
