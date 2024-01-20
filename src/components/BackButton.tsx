import { Button } from "react-bootstrap"
import { Link } from "react-router-dom"

const BackButton = () => {
	return (
		<Link to={".."}>
			<Button variant="primary">
				<i className="bi bi-arrow-left">Back</i>
			</Button>
		</Link>
	)
}

export default BackButton
