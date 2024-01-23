import axios from "axios"

export const fetchUserInventoryData = async (
	backendUrl: string,
	accessToken: string
) => {
	try {
		const response = await axios.get(`${backendUrl}/freeinv/locations`, {
			headers: {
				Authorization: `Bearer ${accessToken}`,
			},
		})
		if (response) {
			const data = await response.data
			return data
		}
	} catch (error) {
		console.log(error)
	}
}
