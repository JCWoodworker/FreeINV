// import { Button } from "react-bootstrap"
// import { Request } from "../utils"
// import useAuth from "../hooks/useAuth"

// const ManualRefreshToken: React.FC = () => {
// 	const { setAuth, setPersist } = useAuth()
// 	const refresh = async () => {
// 		const response = await Request.refresh()
// 		if (response) {
// 			setPersist && setPersist(true)
// 			setAuth &&
// 				setAuth({
// 					user: "USER",
// 					accessToken: response.accessToken,
// 					apps: [],
// 				})
// 			// JUST FOR TESTING UNTIL I SET UP HTTP ONLY COOKIES
// 			localStorage.setItem("refreshToken", response.tokens.refreshToken)
// 			// END OF TEST
// 		}
// 		console.log(response)
// 	}

// 	return (
// 		<div>
// 			<h1>Manual Refresh Token</h1>
// 			<Button variant="primary" onClick={refresh}>
// 				Refresh
// 			</Button>
// 		</div>
// 	)
// }

// export default ManualRefreshToken
