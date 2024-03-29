import { MemoryRouter } from "react-router-dom"
import { render, screen } from "@testing-library/react"
import UserHome from "./UserHome"

describe("UserHome Component", () => {
	beforeEach(() => {
		render(
			<MemoryRouter>
				<UserHome />
			</MemoryRouter>
		)
	})

	it("renders the UserHome component", () => {})

	it(`renders the title "Welcome Back!"`, () => {
		const title = screen.getByText("Welcome Back!")
		expect(title).toBeInTheDocument()
	})

})
