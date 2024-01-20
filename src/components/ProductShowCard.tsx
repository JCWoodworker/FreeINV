import { Link } from "react-router-dom"
import { ProductSpec } from "../pages/home/productSpecs"
import { ListGroup } from "react-bootstrap"

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
		? (monthlyFee = <ListGroup.Item>{`$${productSpec.monthlyFees} per month`}</ListGroup.Item>)
		: (monthlyFee = null)

	return (
		<Link
			to="/signup"
			state={productSpec.tier}
			className="text-decoration-none d-flex flex-column justify-content-center align-items-center"
		>
			<h2>{productSpec.title}</h2>
			<ListGroup variant="flush" className="rounded">
				<ListGroup.Item>
					{`${sentencePrefix} `}
					<strong>{productSpec.allowedLocations}</strong> locations
				</ListGroup.Item>
				<ListGroup.Item>
					{`${sentencePrefix} `}
					<strong>{productSpec.allowedRoomsPerLocation}</strong> rooms per
					location
				</ListGroup.Item>
				<ListGroup.Item>
					{`${sentencePrefix} `}
					<strong>{productSpec.allowedItemsPerRoom}</strong> items per room
				</ListGroup.Item>
				{monthlyFee}
				<ListGroup.Item>{`Must opt in to receive ${productSpec.emailFrequency} blog emails with affiliate links`}</ListGroup.Item>
			</ListGroup>
		</Link>
	)
}

export default ProductShowCard
