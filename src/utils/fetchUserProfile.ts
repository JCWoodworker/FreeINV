export const fetchUserProfile = async (backendUrl: string) => {
	try {
		const { accessToken, refreshToken } = JSON.parse(
			localStorage.getItem("loginTokens") || ""
		)

		if (!accessToken || !refreshToken) {
			console.log(
				"FetchUserProfile: No access or refresh token found in local storage"
			)
			return false
		}

		const response = await fetch(
			`${backendUrl}/api/v1/users/user-profile`,
			{
				method: "GET",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${accessToken}`,
				},
			}
		)

		if (response) {
			const data = await response.json()

			localStorage.setItem("user", JSON.stringify(data))
			return data
		}
	} catch (error) {
		console.log(error)
		return false
	}
}
