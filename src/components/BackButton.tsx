import { Link } from "react-router-dom"

const BackButton = () => {
	return (
		<Link to={".."}>
			<i className="bi bi-arrow-left icon"></i>
		</Link>
	)
}

export default BackButton
