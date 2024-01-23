import { Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom"

interface Props {
	buttonText: string
	buttonAction: string
	linkTo?: string
	locationId?: number
	roomId?: number
}

const AddDeleteButton: React.FC<Props> = ({
	buttonText,
	buttonAction,
	linkTo,
	locationId,
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
				? navigate(linkTo, { state: { locationId } })
				: linkTo === "/my-inventory/items/new"
				? navigate(linkTo, { state: { locationId, roomId } })
				: navigate(linkTo)
			: null
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
