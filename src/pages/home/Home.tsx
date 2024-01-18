import { LoggedInUser } from "../../App"
import { productList } from "./productSpecs"

import ProductShowCard from "../../components/ProductShowCard"


interface Props {
	loggedInUser: LoggedInUser
}

const Home: React.FC<Props> = ({ loggedInUser }) => {
	if (loggedInUser.id === undefined) {
		return (
			<div>
				<div>
					<h1>Welcome to Free INV!</h1>
					<h3>Your FREE inventory management application</h3>						
					<div>
						{productList.map((product) => (
							<ProductShowCard
								key={product.title}
								productSpec={product}
							/>
						))}
					</div>
				</div>
			</div>
		)
	}

	return <h1>Welcome Back!</h1>
}

export default Home
