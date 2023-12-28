import { useParams } from "react-router-dom"

const ItemShow = () => {
	const { id } = useParams()
	return (
		<div>
			<h1>Item {id}</h1>
		</div>
	)
}

export default ItemShow
