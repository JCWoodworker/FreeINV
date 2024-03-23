import { test, expect, describe } from "vitest"
import UserHome from "./UserHome"

describe("UserHome", () => {
	test("UserHome component should be defined and an instance of a function", () => {
		expect(UserHome).toBeDefined()
		expect(UserHome).toBeInstanceOf(Function)
	})
})
