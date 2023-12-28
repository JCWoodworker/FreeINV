interface Props {
  elementName: string
}

const inventoryIndex: React.FC<Props> = ({ elementName }) => {
	return <h1>{elementName} List</h1>
}

export default inventoryIndex
