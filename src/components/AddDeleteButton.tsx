import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { Button } from "@mui/material"
import { Request } from "../utils/requests/Request"
import useAuth from "../hooks/useAuth"
import { UserInventoryDataContext } from "../App"

interface Props {
	buttonText: string
	buttonAction: string
	linkTo?: string
	locationName?: string
	locationId?: number
	roomName?: string
	roomId?: number
	itemId?: number
}

const AddDeleteButton: React.FC<Props> = ({
	buttonText,
	buttonAction,
	linkTo,
	locationName,
	locationId,
	roomName,
	roomId,
	itemId,
}) => {
	const navigate = useNavigate()
	const { auth } = useAuth()
	const { userInventoryData, setUserInventoryData } = useContext(
		UserInventoryDataContext
	)

	const currentId = locationId || roomId || itemId || null
	const currentType = locationId
		? "locations"
		: roomId
		? "rooms"
		: itemId
		? "items"
		: null

	const buttonClickHandler = async () => {
		linkTo
			? linkTo === "/my-inventory/rooms/new"
				? navigate(linkTo, { state: { locationId, locationName } })
				: linkTo === "/my-inventory/items/new"
				? navigate(linkTo, { state: { locationId, roomId, roomName } })
				: navigate(linkTo)
			: null
		if (buttonAction.toLowerCase() === "delete") {
			const response = await Request.delete(
				`/subapps/freeinv/${currentType}/${currentId}`,
				auth.accessToken
			)
			navigate("/my-inventory")
			const data = await response
			if (!data) {
				console.log(`Failed to delete ${currentType}`)
				return false
			}
			if (currentType === "locations") {
				const newUserInventoryData = userInventoryData?.filter(
					(location) => location.id !== currentId
				)
				setUserInventoryData(newUserInventoryData)
			}
			return true
		}
	}

	return (
		<Button variant="contained" onClick={buttonClickHandler} sx={{ m: 1 }}>
			{buttonText}
		</Button>
	)
}

export default AddDeleteButton
