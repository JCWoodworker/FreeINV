import { useState, useContext } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { getLocalStorageTokens } from "../../../utils/getLocalStorageTokens.ts"

import BackButton from "../../../components/BackButton.tsx"

import { UserInventoryDataContext } from "../../../App.tsx"

interface NewLocationDto {
	name: string
	description: string
	type: "location"
}

const NewLocation: React.FC = () => {
	const { userInventoryData, setUserInventoryData } = useContext(
		UserInventoryDataContext
	)

	const [newLocationData, setNewLocationData] = useState<NewLocationDto>({
		name: "",
		description: "",
		type: "location",
	})
	const navigate = useNavigate()

	const handleTextInputChange = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		setNewLocationData({
			...newLocationData,
			[event.target.name]: event.target.value,
		})
	}

	const submitNewLocation = async (payload: NewLocationDto) => {
		try {
			const accessToken = await getLocalStorageTokens("accessToken")
			const response = await axios.post(
				// `${backendUrl}/inventory/locations`,
				`http://localhost:3000/api/v1/freeinv/locations`,
				payload,
				{
					headers: {
						Authorization: `Bearer ${accessToken}`,
					},
				}
			)
			if (response) {
				return response.data
			}
		} catch (error) {
			console.log(error)
		}
	}

	const formSubmit = async (event: React.FormEvent) => {
		event.preventDefault()
		const newLocation = await submitNewLocation(newLocationData)
		if (!newLocation) {
			console.log(`Failed to add new location`)
			return false
		}
		const newUserInventory = userInventoryData?.concat({ ...newLocation, rooms: [] })
		setUserInventoryData(newUserInventory)
		console.log(`Added new location: ${JSON.stringify(newLocation)}`)
		navigate("/my-inventory")
		return true
	}
	
	return (
		<div className="m-2 d-flex flex-column justify-content-center align-items-center">
			<h2>Add A New Location</h2>
			<form
				onSubmit={formSubmit}
				className="d-flex m-2 flex-column justify-content-center align-items-center gap-2"
			>
				<input
					type="text"
					name="name"
					onChange={handleTextInputChange}
					placeholder="Name"
				/>
				<input
					type="text"
					name="description"
					onChange={handleTextInputChange}
					placeholder="Description"
				/>
				<input type="submit" value="Submit" />
			</form>
			<BackButton />
		</div>
	)
}

export default NewLocation
