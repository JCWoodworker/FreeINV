export const fetchUserProfile = async () => {
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
			`http://localhost:3000/api/v1/users/user-profile`,
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
			// setUser(data)
			return true
		}
	} catch (error) {
		console.log(error)
		return false
	}
}
