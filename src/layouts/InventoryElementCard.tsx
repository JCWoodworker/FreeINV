import { Card } from "@mui/material"

interface Props {
	children: React.ReactNode
}

const InventoryElementCard: React.FC<Props> = ({ children }) => {
	return (
		<Card
			variant="elevation"
			sx={{
				display: "flex",
				flexFlow: "column",
				alignItems: "center",
				justifyContent: "center",
				width: 160,
				height: 200,
				gap: 1,
			}}
		>
			{children}
		</Card>
	)
}

export default InventoryElementCard
