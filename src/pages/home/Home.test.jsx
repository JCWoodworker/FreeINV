import { MemoryRouter } from "react-router-dom"
import { render, screen } from "@testing-library/react"
import Home from "./Home"
import { productList } from "./productSpecs"

describe("Home Component", () => {
	beforeEach(() => {
		render(
			<MemoryRouter>
				<Home />
			</MemoryRouter>
		)
	})

	expect(<Home />).toRender()

	it(`renders the title "Welcome to My Free INV!"`, () => {
		const title = screen.getByText("Welcome to My Free INV!")
		expect(title).toBeInTheDocument()
	})

	it("renders the correct number of ProductShowCard components", () => {
		const productCards = screen.getAllByTestId("product-card")
		expect(productCards).toHaveLength(productList.length)
	})

	it("renders the correct title for each ProductShowCard", () => {
		productList.forEach((product) => {
			const expectedTitle = productList[0].title
			const titleElement = screen.getByText(expectedTitle)
			expect(titleElement).toBeInTheDocument()
		})
	})
})
