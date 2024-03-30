import ProductShowCard from "./ProductShowCard"
import { productList } from "./productSpecs"
const Home = () => {
	return (
		<>
			<div>
				<p>Welcome to My Free INV!</p>
				<p>Your FREE inventory management application</p>
				<p>{`Tap any subscription below to sign up -->`}</p>
			</div>
			<div>
				{productList.map((product) => (
					<ProductShowCard key={product.title} productSpec={product} />
				))}
			</div>
		</>
	)
}

export default Home
