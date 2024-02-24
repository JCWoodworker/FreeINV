import ProductShowCard from "../../components/ProductShowCard"
import { productList } from "./productSpecs"
const Home = () => {
	return (
		<div>
			<h1>Welcome to Free INV!</h1>
			<p>Your FREE inventory management application</p>
			<p>{`Tap any subscription below to sign up -->`}</p>
			<div>
				{productList.map((product) => (
					<ProductShowCard key={product.title} productSpec={product} />
				))}
			</div>
		</div>
	)
}

export default Home
