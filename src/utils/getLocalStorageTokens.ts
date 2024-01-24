export const getLocalStorageTokens = async (token: string) => {
	try {
		if (!localStorage.getItem("freeInvTokens")) {
			console.log(
				"FetchUserProfile: No access or refresh token found in local storage"
			)
			return false
		}

		const { accessToken, refreshToken } = JSON.parse(
			localStorage.getItem("freeInvTokens") || ""
		)

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
