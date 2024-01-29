import { useContext } from "react"
import { productList } from "./productSpecs"
import { Stack, ListGroup, Image } from "react-bootstrap"

import ProductShowCard from "../../components/ProductShowCard"
import { UserInventoryDataContext } from "../../App"

interface Props {
	userIsLoggedIn: boolean
}

const Home: React.FC<Props> = ({ userIsLoggedIn }) => {
	const { userInventoryData } = useContext(UserInventoryDataContext)
	if (!userIsLoggedIn) {
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
			<Image src="https://free-inv-images.s3.amazonaws.com/castlehill" style={{ maxWidth: "100%", height: "auto" }}></Image>
		</div>
	)
}

export default Home
