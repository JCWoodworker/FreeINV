import { Link } from "react-router-dom"
import { ProductSpec } from "./productSpecs"
import { Card, Typography } from "@mui/material"

interface Props {
	productSpec: ProductSpec
}
const ProductShowCard: React.FC<Props> = ({ productSpec }) => {
	let sentencePrefix
	typeof productSpec.allowedLocations === "number"
		? (sentencePrefix = "Up to")
		: (sentencePrefix = "")

	let monthlyFee
	productSpec.monthlyFees > 0
		? (monthlyFee = <li>{`$${productSpec.monthlyFees} per month`}</li>)
		: (monthlyFee = null)

	return (
		<Card
			variant="elevation"
			sx={{
				display: "flex",
				placeItems: "center",
				width: 350,
				height: 220,
				padding: 2,
			}}
		>
			<Link to="/signup" state={productSpec.tier}>
				<Typography variant="h5">{productSpec.title}</Typography>
				<ul>
					<li>
						{`${sentencePrefix} `}
						<strong>{productSpec.allowedLocations}</strong> locations
					</li>
					<li>
						{`${sentencePrefix} `}
						<strong>{productSpec.allowedRoomsPerLocation}</strong> rooms per
						location
					</li>
					<li>
						{`${sentencePrefix} `}
						<strong>{productSpec.allowedItemsPerRoom}</strong> items per room
					</li>
					{monthlyFee}
					<br />
					<li>{`Must opt in to receive ${productSpec.emailFrequency} blog emails with affiliate links`}</li>
				</ul>
			</Link>
		</Card>
	)
}

export default ProductShowCard
