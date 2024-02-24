import { useState, useContext } from "react"
import { useLocation, useNavigate } from "react-router-dom"

import SubmitButton from "../../../components/SubmitButton"

import { UserInventoryDataContext } from "../../../App"
import { Request } from "../../../utils/requests/Request"
import { NewRoomDto } from "../../../utils/requests/types"
import useAuth from "../../../hooks/useAuth"

const NewRoom: React.FC = () => {
	const { auth } = useAuth()
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
		const accessToken = auth?.accessToken
		const newRoom = await Request.post(
			"/subapps/freeinv/rooms",
			newRoomData,
			true,
			accessToken
		)
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
		navigate(`/my-inventory/locations/${state.locationId}`)
	}

	return (
		<div>
			<h1>New room in {state.locationName}</h1>
			<form onSubmit={onSubmit}>
				<label>Room Name</label>
				<input
					type="text"
					placeholder="Enter Room Name"
					name="name"
					onChange={handleTextInputChange}
					required={true}
				/>
				<label>Room Description</label>
				<input
					type="text"
					placeholder="Enter Room Description"
					name="description"
					onChange={handleTextInputChange}
				/>
				<SubmitButton buttonText="Create Room" />
			</form>
		</div>
	)
}

export default NewRoom
