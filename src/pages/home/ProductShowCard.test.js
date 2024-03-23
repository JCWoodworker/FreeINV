import { test, expect, describe } from "vitest"
import ProductShowCard from "./ProductShowCard"

describe("ProductShowCard", () => {
	test("ProductShowCard component should be defined and an instance of a function", () => {
		expect(ProductShowCard).toBeDefined()
		expect(ProductShowCard).toBeInstanceOf(Function)
	})
})
