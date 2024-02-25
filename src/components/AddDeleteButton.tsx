import { useNavigate } from "react-router-dom"
import { Button } from "@mui/material"

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

	const buttonClickHandler = () => {
		linkTo
			? linkTo === "/my-inventory/rooms/new"
				? navigate(linkTo, { state: { locationId, locationName } })
				: linkTo === "/my-inventory/items/new"
				? navigate(linkTo, { state: { locationId, roomId, roomName } })
				: navigate(linkTo)
			: null
		buttonAction.toLowerCase() === "delete"
			? alert("Feature coming soon!")
			: null
	}

	return (
		<Button
			variant="contained"
			onClick={buttonClickHandler}
			sx={{ m: 1 }}
		>
			{buttonText}
		</Button>
	)
}

export default AddDeleteButton
