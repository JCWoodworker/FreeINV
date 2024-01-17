import { useState } from "react"
import { UserLocationData } from "../../inventory/types.ts"
import { useNavigate } from "react-router-dom"
import BackButton from "../../../components/BackButton.tsx"

interface Props {
	userInventoryData: UserLocationData[] | undefined
	setUserInventoryData: (value: UserLocationData[] | undefined) => void
}

const NewLocation: React.FC<Props> = ({
	userInventoryData,
	setUserInventoryData,
}) => {
	const [newLocationData, setNewLocationData] = useState<UserLocationData>({
		id: Math.floor(Math.random() * 1000),
		name: "",
		description: "",
		type: "location",
		rooms: [],
	})
	const navigate = useNavigate()

	// This is for testing purposes.
	// When sending a requests to the backend we only need name and description

	const textInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setNewLocationData({
			...newLocationData,
			[event.target.name]: event.target.value,
		})
	}
	const formSubmit = (event: React.FormEvent) => {
		event.preventDefault()
		const newUserInventory = userInventoryData?.concat(newLocationData)
		setUserInventoryData(newUserInventory)
		navigate("/my-inventory")
	}
	return (
		<>
			<h2>Add A New Location</h2>
			<form onSubmit={formSubmit}>
				<input
					type="text"
					name="name"
					onChange={textInputChange}
					placeholder="Name"
				/>
				<input
					type="text"
					name="description"
					onChange={textInputChange}
					placeholder="Description"
				/>
				<input type="submit" value="Submit" />
			</form>
			<BackButton />
		</>
	)
}

export default NewLocation
