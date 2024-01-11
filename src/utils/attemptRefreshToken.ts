export const attemptTokenRefresh = async () => {
  try {
    const { accessToken, refreshToken } = JSON.parse(
      localStorage.getItem("loginTokens") || ""
    )

    if (!accessToken || !refreshToken) {
      console.log(
        "attemptTokenRefresh: No access or refresh token found in local storage"
      )
      return false
    }

    const response = await fetch(
      `http://localhost:3000/api/v1/authentication/refresh-tokens`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ refreshToken: refreshToken }),
      }
    )
    if (response) {
      const data = await response.json()
      
      localStorage.setItem("loginTokens", JSON.stringify(data))
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
