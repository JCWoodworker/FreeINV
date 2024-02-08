import { useNavigate } from "react-router-dom"
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google"
import { Request, GoogleOAuthDto } from "../../Utils/Request"
import useAuth from "../../Hooks/useAuth"

const GoogleOAuth: React.FC = () => {
	const { setAuth, setPersist } = useAuth()
	const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID
	const navigate = useNavigate()

	// Fix this later and don't use "any" you lazy-ass!!
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const onSuccess = async (credentialResponse: any) => {
		try {
			const token: GoogleOAuthDto = { token: credentialResponse.credential }
			const response = await Request.post(
				"/authentication/google",
				token,
				false
			)
			if (response) {
				setPersist(true)
				setAuth({
					user: "GOOGLE-USER",
					accessToken: response.tokens.accessToken,
				})
				localStorage.setItem("user", "GOOGLE-USER")
				localStorage.setItem("accessToken", response.tokens.accessToken)
				// JUST FOR TESTING UNTIL I SET UP HTTP ONLY COOKIES
				localStorage.setItem("refreshToken", response.tokens.refreshToken)
				// END OF TEST

				navigate("/")
			}
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<GoogleOAuthProvider clientId={clientId}>
			<GoogleLogin
				onSuccess={(credentialResponse) => {
					onSuccess(credentialResponse)
				}}
			/>
		</GoogleOAuthProvider>
	)
}

export default GoogleOAuth
