import { Stack } from "react-bootstrap"
import ProductShowCard from "../../components/ProductShowCard"
import { productList } from "./productSpecs"
const Home = () => {
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

export default Home