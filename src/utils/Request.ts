import axios from "axios"

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

export interface SignInSignUpDto {
	email: string
	password: string
}

export interface GoogleOAuthDto {
	token: string
}

export class Request {
	constructor() {}

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	static async get(urlEndpoint: string, authorization: boolean): Promise<any> {
		const accessToken = await this.getLocalStorageTokens("accessToken")
		let headers = {}
		if (authorization) {
			headers = {
				Authorization: `Bearer ${accessToken}`,
			}
		}
		const urlPrefix = await this.getBackendUrl()
		const fullUrl = `${urlPrefix}${urlEndpoint}`
		try {
			const response = await axios.get(fullUrl, { headers })
			return response.data
		} catch (error) {
			console.error("Request error:", error)
			throw error
		}
	}

	static async post(
		urlEndpoint: string,
		data:
			| NewLocationDto
			| NewItemDto
			| NewRoomDto
			| SignInSignUpDto
			| GoogleOAuthDto,
		authorization: boolean
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
	): Promise<any> {
		const urlPrefix = await this.getBackendUrl()
		const fullUrl = `${urlPrefix}${urlEndpoint}`
		const accessToken = await this.getLocalStorageTokens("accessToken")
		if (!accessToken) {
			console.log(
				"No access token found in local storage while attempting to send a POST request"
			)
			return false
		}
		let headers = {}
		if (authorization) {
			headers = {
				Authorization: `Bearer ${accessToken}`,
			}
		}
		try {
			const response = await axios.post(fullUrl, data, { headers })
			debugger
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

	static async refresh() {
		const urlPrefix = await this.getBackendUrl()
		const refreshToken = await this.getLocalStorageTokens("refreshToken")
		try {
			const response = await axios.post(
				`${urlPrefix}/authentication/refresh-tokens`,
				{ refreshToken }
			)
			if (response) {
				return response.data
			}
		} catch (error) {
			console.log(error)
			return false
		}
	}

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
