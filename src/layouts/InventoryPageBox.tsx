import { Box } from "@mui/material"

interface Props {
	children: React.ReactNode
}

const InventoryPageBox: React.FC<Props> = ({ children }) => {
	return <Box sx={{ mt: 3 }}>{children}</Box>
}

export default InventoryPageBox
