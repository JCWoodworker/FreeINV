
// interface Props {
// 	userInventoryData: UserLocationData[] | undefined
// 	setUserInventoryData: (value: UserLocationData[] | undefined) => void
// 	elementType: string
// 	locationId?: number
// 	roomId?: number
// 	itemId?: number
// }

const DeleteElementButton: React.FC = () => {

	return (
		<button className="delete-button" onClick={() => alert("this button does not delete anything yet")}>
			<i className="bi bi-dash-circle-fill"></i>
		</button>
	)
}

export default DeleteElementButton
