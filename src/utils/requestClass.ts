import { NewLocationDto, NewRoomDto, NewItemDto } from "../pages/inventory/postNewInventory"
import axios from "axios"

export class Request {
	constructor() {}

	// static async get(url: string, options?: any): Promise<any> {
	// 	// Implement GET request logic using fetch
	// }

	static async post(
		urlEndpoint: string,
		data: NewLocationDto | NewItemDto | NewRoomDto,
		authorization: boolean
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
	): Promise<any> {
		const urlPrefix = await this.getBackendUrl()
		const fullUrl = `${urlPrefix}${urlEndpoint}`
		const accessToken = await this.getLocalStorageTokens("accessToken")
		const headers = authorization
			? {
					Authorization: `Bearer ${accessToken}`,
			}
			: {
					"Content-Type": "application/json",
			}
		try {
			const response = await axios.post(fullUrl, data, { headers })
			return response.data
		} catch (error) {
			console.error("Request error:", error)
			throw error
		}
	}

	// static async patch(url: string, data: any, options?: any): Promise<any> {
	// 	// Implement PATCH request logic using fetch
	// }

	// static async delete(url: string, options?: any): Promise<any> {
	// 	// Implement DELETE request logic using fetch
	// }


	static async getBackendUrl() {
		try {
			const environment: string = import.meta.env.VITE_ENVIRONMENT
			switch (environment) {
				case "dev":
					return import.meta.env.VITE_BACKEND_URL_DEV
				case "preprod":
					return import.meta.env.VITE_BACKEND_URL_PREPROD
				case "prod":
					return import.meta.env.VITE_BACKEND_URL_PROD
				default:
					return "http://localhost:3000/api/v1"
			}
		} catch (error) {
			console.log(error)
			return "http://localhost:3000/api/v1"
		}
	}

	static async getLocalStorageTokens(token: string) {
		try {
			const { accessToken, refreshToken } = JSON.parse(
				localStorage.getItem("freeInvTokens") || ""
			)

			if (!accessToken || !refreshToken) {
				console.log(
					"FetchUserProfile: No access or refresh token found in local storage"
				)
				return false
			}

			if (token === "accessToken") {
				return accessToken
			} else if (token === "refreshToken") {
				return refreshToken
			} else if (token === "both") {
				return { accessToken, refreshToken }
			}
		} catch (error) {
			console.log(error)
			return false
		}
	}
}
