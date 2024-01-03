import ElementListLayout from "../../layouts/ElementListLayout"

interface Props {
	elementPath: string
}

const inventoryIndex: React.FC<Props> = ({ elementPath }) => {

	return (
		<ElementListLayout elementPath={elementPath} />
	)
}

export default inventoryIndex
