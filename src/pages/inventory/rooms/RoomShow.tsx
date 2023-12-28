import { useParams } from "react-router-dom"

const RoomShow = () => {
	const { id } = useParams()
	return (
		<div>
			<h1>Room {id}</h1>
		</div>
	)
}

export default RoomShow
