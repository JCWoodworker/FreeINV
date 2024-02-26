import { useNavigate } from "react-router-dom"
import { Button } from "@mui/material"
import { Request } from "../utils/requests/Request"
import useAuth from "../hooks/useAuth"

interface Props {
	buttonText: string
	buttonAction: string
	linkTo?: string
	locationName?: string
	locationId?: number
	roomName?: string
	roomId?: number
}

const AddDeleteButton: React.FC<Props> = ({
	buttonText,
	buttonAction,
	linkTo,
	locationName,
	locationId,
	roomName,
	roomId,
}) => {
	const navigate = useNavigate()
	const { auth } = useAuth()

	const buttonClickHandler = async () => {
		linkTo
			? linkTo === "/my-inventory/rooms/new"
				? navigate(linkTo, { state: { locationId, locationName } })
				: linkTo === "/my-inventory/items/new"
				? navigate(linkTo, { state: { locationId, roomId, roomName } })
				: navigate(linkTo)
			: null
		if (buttonAction.toLowerCase() === "delete") {
			try {
				await Request.delete(
					`/subapps/freeinv/locations/${locationId}`,
					auth.accessToken
				)
				// window.location.reload()
				navigate("/my-inventory")
				return true
			} catch (error) {
				console.log(`DELETE request error: ${error}`)
				return false
			}
			//need to get access tokena dn pass in location/room/item id a query param
		}
	}

	return (
		<Button variant="contained" onClick={buttonClickHandler} sx={{ m: 1 }}>
			{buttonText}
		</Button>
	)
}

export default AddDeleteButton
