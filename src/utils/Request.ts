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

	static async get(
		urlEndpoint: string,
		authorization: boolean,
		accessToken: string
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
	): Promise<any> {
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
			| GoogleOAuthDto
			| FormData,
		authorization: boolean,
		accessToken?: string
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
	): Promise<any> {
		const urlPrefix = await this.getBackendUrl()
		const fullUrl = `${urlPrefix}${urlEndpoint}`
		let headers = {}
		if (data instanceof File) {
			headers = { ...headers, "Content-Type": "multipart/form-data" }
		}
		if (authorization) {
			headers = { ...headers, Authorization: `Bearer ${accessToken}` }
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

	static async refresh() {
		const urlPrefix = await this.getBackendUrl()
		const refreshToken = localStorage.getItem("refreshToken")
		try {
			const response = await axios.post(
				`${urlPrefix}/authentication/refresh-tokens`,
				{ refreshToken }
				// { headers: { withCredentials: true } }
			)
			if (response) {
				return response.data
			}
		} catch (error) {
			console.log(error)
			return false
		}
	}

	private static async getBackendUrl() {
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
}
