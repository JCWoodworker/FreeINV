import { expect, describe, it } from 'vitest'
import Home from './Home'

describe ('Home Component', () => {
  it('should render', () => {
    expect(Home()).toBeTruthy()
  })
  it('should be a function', () => {
    expect(Home).toBeInstanceOf(Function)
  })
})
