import { Card } from "@mui/material"

interface Props {
	children: React.ReactNode
}

const InventoryElementCard: React.FC<Props> = ({ children }) => {
	return (
		<Card
			variant="elevation"
			sx={{
				p: 1,
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
				width: {
					xs: 220,
					sm: 300,
				},
				minHeight: {
					xs: 100,
					sm: 100,
				},
				gap: 1,
			}}
		>
			{children}
		</Card>
	)
}

export default InventoryElementCard
