import ProductShowCard from "./ProductShowCard"
import { productList } from "./productSpecs"
import { Box } from "@mui/material"
const Home = () => {
	return (
		<div>
			<h1>Welcome to Free INV!</h1>
			<p>Your FREE inventory management application</p>
			<p>{`Tap any subscription below to sign up -->`}</p>
			<Box
				sx={{
					display: "flex",
					flexWrap: "wrap",
					alignItems: "center",
					justifyContent: "center",
					gap: 2,
				}}
			>
				{productList.map((product) => (
					<ProductShowCard key={product.title} productSpec={product} />
				))}
			</Box>
		</div>
	)
}

export default Home
