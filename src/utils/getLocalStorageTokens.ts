export const getLocalStorageTokens = async (token: string) => {
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
