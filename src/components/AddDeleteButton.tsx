import { Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom"

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
	let iconClassName
	buttonAction.toLowerCase() === "add"
		? (iconClassName = "bi-plus-circle-fill")
		: (iconClassName = "bi-dash-circle-fill")

	const buttonClickHandler = () => {
		linkTo
			? linkTo === "/my-inventory/rooms/new"
				? navigate(linkTo, { state: { locationId, locationName } })
				: linkTo === "/my-inventory/items/new"
				? navigate(linkTo, { state: { locationId, roomId, roomName } })
				: navigate(linkTo)
			: null
		buttonAction.toLowerCase() === "delete" ? alert("Feature coming soon!") : null
	}

	return (
		<Button
			className={`add-delete-button mt-3 d-flex flex-row align-items-center justify-content-center gap-2 ${
				buttonAction.toLowerCase() === "add" ? "btn-success" : "btn-danger"
			}`}
			onClick={buttonClickHandler}
		>
			<i className={`bi ${iconClassName}`}></i>
			{buttonText}
		</Button>
	)
}

export default AddDeleteButton
