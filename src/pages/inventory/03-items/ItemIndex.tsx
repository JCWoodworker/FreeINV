import { Typography } from "@mui/material"
import InventoryPageBox from "../../../layouts/InventoryPageBox"
import { UserLocationData } from "../inventoryTypes"

interface Props {
	userInventoryData: UserLocationData[] | undefined
}

const ItemIndex: React.FC<Props> = ({ userInventoryData }) => {
	console.log(userInventoryData)
	return (
		<InventoryPageBox>
			<Typography variant="h4">Items</Typography>
		</InventoryPageBox>
	)
}

export default ItemIndex
