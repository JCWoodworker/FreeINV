import { useLocation } from "react-router-dom"

const InventoryShow: React.FC = () => {
	const { state } = useLocation()
	return (
		<div>
			<h1>{state.name}</h1>
		</div>
	)
}

export default InventoryShow
