import axios from "axios"
import { getLocalStorageTokens } from "../../utils"

export interface NewLocationDto {
	name: string
	description: string
	type: "location"
}

export interface NewRoomDto {
	name: string
	description: string
	type: "room"
	locationId: number
}

export interface NewItemDto {
	name: string
	description: string
	type: "item"
	roomId: number
}



export const submitNewLocation = async (payload: NewLocationDto) => {
  try {
    const accessToken = await getLocalStorageTokens("accessToken")
    const response = await axios.post(
      // `${backendUrl}/inventory/locations`,
      `http://localhost:3000/api/v1/freeinv/locations`,
      payload,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    )
    if (response) {
      return response.data
    }
  } catch (error) {
    console.log(error)
  }
}


export const submitNewRoom = async (payload: NewRoomDto) => {
  try {
    const accessToken = await getLocalStorageTokens("accessToken")
    const response = await axios.post(
      // `${backendUrl}/inventory/rooms`,
      `http://localhost:3000/api/v1/freeinv/rooms`,
      payload,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    )
    return response.data
  } catch (error) {
    console.log(error)
  }
}

export 	const submitNewItem = async (payload: NewItemDto) => {
  try {
    const accessToken = await getLocalStorageTokens("accessToken")
    const response = await axios.post(
      // `${backendUrl}/inventory/items`,
      `http://localhost:3000/api/v1/freeinv/items`,
      payload,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    )
    return response.data
  } catch (error) {
    console.log(error)
  }
}


