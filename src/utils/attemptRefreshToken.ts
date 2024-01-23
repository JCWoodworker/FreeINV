import axios from "axios"

export const attemptTokenRefresh = async (
	backendUrl: string,
	refreshToken: string
) => {
	try {
		const response = await axios.post(
			`${backendUrl}/authentication/refresh-tokens`,
			{ refreshToken }
		)
		if (response) {
			const data = await response
			const { accessToken, refreshToken } = data.data
			localStorage.setItem(
				"freeInvTokens",
				JSON.stringify({ accessToken, refreshToken })
			)
			return true
		} else {
			console.log("Failed to refresh token")
			return false
		}
	} catch (error) {
		console.log(error)
		return false
	}
}
