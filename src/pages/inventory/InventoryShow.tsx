import { useParams } from "react-router-dom"

interface Props {
	elementName: string
}
const InventoryShow: React.FC<Props> = ({ elementName }) => {
	const { id } = useParams()
	return (
		<div>
			<h1>
				{elementName} {id}
			</h1>
		</div>
	)
}

export default InventoryShow
