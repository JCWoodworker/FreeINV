import { Box } from "@mui/material"

interface Props {
	children: React.ReactNode
}

const InventoryPageBox: React.FC<Props> = ({ children }) => {
	return (
		<Box
			sx={{
				mt: 2,
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
				gap: 1,
			}}
		>
			{children}
		</Box>
	)
}

export default InventoryPageBox
