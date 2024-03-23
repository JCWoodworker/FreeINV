import { test, expect, describe } from "vitest"
import Home from "./Home"

describe("Home", () => {
  test("Home component should be defined and an instance of a function", () => {
    expect(Home).toBeDefined()
    expect(Home).toBeInstanceOf(Function)
  })
})
