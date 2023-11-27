/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react'

/**
 *
 * @param {String} key The key to set in localStorage for this value
 * @param {Object} defaultValue The value to use if it is not already in localStorage
 * @param {{serialize: Function, deserialize: Function}} options The serialize and deserialize functions to use (defaults to JSON.stringify and JSON.parse respectively)
 */

function useLocalStorageState(
  key: string,
  defaultValue: any,
  {serialize = JSON.stringify, deserialize = JSON.parse} = {},
) {
  const [localStorageState, setLocalStorageState] = React.useState(() => {
    const valueInLocalStorage = window.localStorage.getItem(key)
    if (valueInLocalStorage) {
      return deserialize(valueInLocalStorage)
    }
    return defaultValue
  })

  const prevKeyRef = React.useRef(key)

  React.useEffect(() => {
    const prevKey = prevKeyRef.current
    if (prevKey !== key) {
      window.localStorage.removeItem(prevKey)
    }
    prevKeyRef.current = key
    window.localStorage.setItem(key, serialize(localStorageState))
  }, [key, localStorageState, serialize])

  return [localStorageState, setLocalStorageState]
}

export {useLocalStorageState}
