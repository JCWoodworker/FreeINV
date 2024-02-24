import ProductShowCard from "./ProductShowCard"
import { productList } from "./productSpecs"
import { Box, Typography } from "@mui/material"
const Home = () => {
	return (
		<>
			<Box sx={{ textAlign: "center", mt: 1, p: 2 }}>
				<Typography variant="h2">
					Welcome to <strong>My Free INV!</strong>
				</Typography>
				<p>Your FREE inventory management application</p>
				<p>{`Tap any subscription below to sign up -->`}</p>
			</Box>
			<Box
				sx={{
					mt: 2,
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
		</>
	)
}

export default Home
