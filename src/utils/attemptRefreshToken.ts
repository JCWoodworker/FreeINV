import axios from "axios"

export const attemptTokenRefresh = async (backendUrl: string) => {
	if (!localStorage.getItem("freeInvTokens")) {
		console.log("attemptTokenRefresh: No tokens found in local storage")
		return false
	}
	const { accessToken, refreshToken } = JSON.parse(
		localStorage.getItem("freeInvTokens") || ""
	)

  if (!refreshToken) {
    console.log("attemptTokenRefresh: No refresh token found in local storage")
    return false
  }

	try {
		const response = await axios.post(
			`${backendUrl}/authentication/refresh-tokens`,
			{ refreshToken }
		)

		if (response) {
			const data = await response
      const { accessToken, refreshToken } = data.data
			localStorage.setItem("freeInvTokens", JSON.stringify({accessToken, refreshToken}))
		} else {
			console.log("Failed to refresh token")
			return false
		}
	} catch (error) {
		console.log(error)
		return false
	}
	return true
}
