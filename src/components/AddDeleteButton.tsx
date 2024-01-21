import { Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom"

interface Props {
	buttonText: string
	buttonAction: string
	linkTo?: string
}

const AddDeleteButton: React.FC<Props> = ({
	buttonText,
	buttonAction,
	linkTo,
}) => {
  const navigate = useNavigate()
	let iconClassName
	buttonAction.toLowerCase() === "add"
		? (iconClassName = "bi bi-plus-circle-fill fs-2")
		: (iconClassName = "bi bi-dash-circle-fill fs-2")

  const buttonClickHandler = () => {
    if (linkTo) {
      navigate(linkTo)
    }
  }

	return (
		<Button className="add-delete-button mt-3 d-flex flex-row align-items-center justify-content-center gap-2" onClick={buttonClickHandler}>
			<i className={`bi ${iconClassName} fs-2`}></i>
			{buttonText}
		</Button>
	)
}

export default AddDeleteButton
