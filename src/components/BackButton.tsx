import { Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
// import { useLocation } from "react-router-dom"

const BackButton = () => {
	// const location = useLocation()
	const navigate = useNavigate()

	return (
		<Button
			variant="primary"
			onClick={() => (navigate(-1))}
			className="button mt-3"
		>
			<i className="bi bi-arrow-left">Back</i>
		</Button>
	)
}

export default BackButton
