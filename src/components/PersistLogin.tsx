import { Outlet } from "react-router-dom"
import { useState, useEffect } from "react"
import { Request } from "../utils"
import useAuth from "../hooks/useAuth"

const PersistLogin = () => {
	const [isLoading, setIsLoading] = useState(true)
	const { auth, setAuth, setPersist } = useAuth()

	useEffect(() => {
		const verifyRefreshToken = async () => {
			try {
				const response = await Request.refresh()
				if (response) {
					setPersist && setPersist(true)
					setAuth &&
						setAuth({
							user: "USER",
							accessToken: response.accessToken,
							apps: [],
						})
					// JUST FOR TESTING UNTIL I SET UP HTTP ONLY COOKIES
					localStorage.setItem("refreshToken", response.tokens.refreshToken)
					// END OF TEST
				}
			} catch (err) {
				console.error(err)
			} finally {
				setIsLoading(false)
			}
		}
		auth?.accessToken ? verifyRefreshToken() : setIsLoading(false)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	useEffect(() => {
		console.log(`isLoading: ${isLoading}`)
		console.log(`authTokenOnRefresh: ${JSON.stringify(auth?.accessToken)}`)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isLoading])

	return <>{isLoading ? <p>Loading...</p> : <Outlet />}</>
}

export default PersistLogin
