import { Box } from "@mui/material"

interface Props {
	children: React.ReactNode
}

const InventoryElementBox: React.FC<Props> = ({ children }) => {
	return (
		<Box
			sx={{
				mt: 2,
				display: "flex",
				flexWrap: "wrap",
				alignItems: "center",
				justifyContent: "center",
				gap: 2,
			}}
		>
			{children}
		</Box>
	)
}

export default InventoryElementBox
