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
				flexFlow: "row wrap",
				alignItems: "center",
				justifyContent: "center",
				width: {
					xs: 220,
					sm: 300,
				},
				height: {
					xs: 50,
					sm: 80,
				},
				gap: 1,
			}}
		>
			{children}
		</Card>
	)
}

export default InventoryElementCard
