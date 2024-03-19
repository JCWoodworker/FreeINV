import { Box } from "@mui/material"

interface Props {
	children: React.ReactNode
}

const InventoryShowBox: React.FC<Props> = ({ children }) => {
	return (
		<Box
			sx={{
				mt: 5,
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
				gap: 2,
			}}
		>
			{children}
		</Box>
	)
}

export default InventoryShowBox
