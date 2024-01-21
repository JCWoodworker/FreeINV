import { LoggedInUser } from "../../App"
import { productList } from "./productSpecs"
import { Stack } from "react-bootstrap"

import ProductShowCard from "../../components/ProductShowCard"

interface Props {
	loggedInUser: LoggedInUser
}

const Home: React.FC<Props> = ({ loggedInUser }) => {
	if (loggedInUser.id === undefined) {
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
			<p>You've got no metrics to display yet ...</p>
			<p>Click "My Inventory" in the top navigation bar to get started</p>
		</div>
	)
}

export default Home
