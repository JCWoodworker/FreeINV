import { useContext } from "react"
import { productList } from "./productSpecs"
import { Stack, ListGroup } from "react-bootstrap"

import ProductShowCard from "../../components/ProductShowCard"
import { UserInventoryDataContext } from "../../App"
import useAuth from "../../hooks/useAuth"

const Home: React.FC = () => {
	const { userInventoryData } = useContext(UserInventoryDataContext)
	const { persist } = useAuth()
	if (!persist) {
		return (
			<div className="m-2 d-flex flex-column justify-content-center align-items-center">
				<h1>Welcome to Free INV!</h1>
				<p>Your FREE inventory management application</p>
				<p>{`Tap any subscription below to sign up -->`}</p>
				<Stack gap={1}>
					{productList.map((product) => (
						<ProductShowCard key={product.title} productSpec={product} />
					))}
				</Stack>
			</div>
		)
	}

	return (
		<div className="m-2 text-center d-flex flex-column justify-content-center align-items-center">
			<h1>Welcome Back!</h1>
			<p>You've got the following:</p>
			<br />
			<ListGroup>
				<ListGroup.Item>
					{userInventoryData?.length}
					{` `}Locations
				</ListGroup.Item>
				<ListGroup.Item>
					{userInventoryData?.flatMap((location) => location.rooms).length}
					{` `}Rooms
				</ListGroup.Item>
				<ListGroup.Item>
					{
						userInventoryData
							?.flatMap((location) => location.rooms)
							.flatMap((room) => room.items).length
					}
					{` `}Items
				</ListGroup.Item>
			</ListGroup>
			<br />
			<p>
				Click "My Inventory" in the top navigation bar manage your inventory
			</p>
		</div>
	)
}

export default Home
