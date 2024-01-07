import { Link } from "react-router-dom"

interface Props {
	to: string
}

const NewElementButton: React.FC<Props> = ({ to }) => {
	return (
		<Link to={to}>
			<i className="bi bi-plus-circle-fill icon"></i>
		</Link>
	)
}

export default NewElementButton
