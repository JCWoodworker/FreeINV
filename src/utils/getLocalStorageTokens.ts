export const getLocalStorageTokens = async (token: string) => {
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

}