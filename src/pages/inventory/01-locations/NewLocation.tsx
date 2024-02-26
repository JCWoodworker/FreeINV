import { useState, useContext } from "react"
import { useNavigate } from "react-router-dom"

import { Request } from "../../../utils/requests/Request.ts"
import { NewLocationDto } from "../../../utils/requests/types.ts"
import { UserInventoryDataContext } from "../../../App.tsx"

import useAuth from "../../../hooks/useAuth.tsx"

const NewLocation: React.FC = () => {
	const { auth } = useAuth()
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

	const formSubmit = async (event: React.FormEvent) => {
		event.preventDefault()
		const accessToken = auth?.accessToken
		const newLocation = await Request.post(
			"/subapps/freeinv/locations",
			newLocationData,
			true,
			accessToken
		)
		if (!newLocation) {
			console.log(`Failed to add new location`)
			return false
		}
		const newUserInventory = userInventoryData?.concat({
			...newLocation,
			rooms: [],
		})
		setUserInventoryData(newUserInventory)
		navigate("/my-inventory")
		return true
	}

	return (
		<div>
			<h2>Add A New Location</h2>
			<form onSubmit={formSubmit}>
				<input
					type="text"
					name="name"
					maxLength={30}			
					onChange={handleTextInputChange}
					placeholder="Name"
					required={true}
				/>
				<input
					type="text"
					name="description"
					onChange={handleTextInputChange}
					placeholder="Description"
				/>
				<input type="submit" value="Submit" />
			</form>
		</div>
	)
}

export default NewLocation
