import { useParams } from "react-router-dom"

const LocationShow = () => {
	const { id } = useParams()
	return (
		<div>
			<h1>Location {id}</h1>
		</div>
	)
}

export default LocationShow
