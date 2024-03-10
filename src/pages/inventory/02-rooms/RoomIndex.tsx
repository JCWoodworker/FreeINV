import { Typography } from "@mui/material"
import InventoryPageBox from "../../../layouts/InventoryPageBox"
import { UserLocationData } from "../inventoryTypes"

interface Props {
	userInventoryData: UserLocationData[] | undefined
}

const RoomIndex: React.FC<Props> = ({ userInventoryData }) => {
	console.log(userInventoryData)
	return (
		<InventoryPageBox>
			<Typography variant="h4">Rooms</Typography>
		</InventoryPageBox>
	)
}
export default RoomIndex
