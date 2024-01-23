export const fetchUserProfile = async (
	backendUrl: string,
	accessToken: string
) => {
	try {
		const response = await fetch(`${backendUrl}/users/user-profile`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${accessToken}`,
			},
		})
		if (response) {
			const data = await response.json()
			localStorage.setItem("user", JSON.stringify(data))
			const { id, email } = data
			return { id, email }
		}
	} catch (error) {
		console.log(error)
		return false
	}
}
