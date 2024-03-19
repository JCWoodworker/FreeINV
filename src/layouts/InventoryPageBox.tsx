import { Box } from "@mui/material"

interface Props {
	children: React.ReactNode
}

const InventoryPageBox: React.FC<Props> = ({ children }) => {
	return (
		<Box
			sx={{
				mt: 5,
				display: "flex",
				flexFlow: "row wrap",
				justifyContent: "center",
				alignItems: "center",
				gap: 2,
			}}
		>
			{children}
		</Box>
	)
}

export default InventoryPageBox
