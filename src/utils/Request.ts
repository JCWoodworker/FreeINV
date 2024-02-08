import axios from "axios"

interface SignUpAndLoginDto {
	email: string
	password: string
}

interface GoogleOAuthDto {
	token: string
}

export class Request {
	constructor() {}

	static async get(
		urlEndpoint: string,
		authorizationRequired: boolean,
		accessToken?: string
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
	): Promise<any> {
		let headers = {}
		if (authorizationRequired) {
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
			console.error("GET request error:", error)
			throw error
		}
	}

	static async post(
		urlEndpoint: string,
		data: SignUpAndLoginDto | GoogleOAuthDto | FormData,
		authorizationRequired: boolean,
		accessToken?: string
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
	): Promise<any> {
		const urlPrefix = await this.getBackendUrl()
		const fullUrl = `${urlPrefix}${urlEndpoint}`
		let headers = {}
		if (data instanceof File) {
			headers = { ...headers, "Content-Type": "multipart/form-data" }
		}
		if (authorizationRequired) {
			headers = { ...headers, Authorization: `Bearer ${accessToken}` }
		}
		try {
			const response = await axios.post(fullUrl, data, { headers })
			return response.data
		} catch (error) {
			console.error("POST request error:", error)
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
				/*
				We'll need the following headers once refresh tokens are in HTTP only cookies:
				{ headers: { withCredentials: true } }
				*/
			)

			if (response.status === 401) {
				localStorage.removeItem("refreshToken")
				console.log(
					"401 Unauthorized, removing token from local storage - it can only be used once"
				)
				return false
			}

			localStorage.setItem("refreshToken", response.data.refreshToken)
			return response.data

			// eslint-disable-next-line @typescript-eslint/no-explicit-any
		} catch (error: any) {
			if (error.response.status === 401) {
				console.log("401 Unauthorized, removing token from local storage")
				localStorage.removeItem("refreshToken")
				localStorage.setItem("persist", "false")
				return false
			}
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
