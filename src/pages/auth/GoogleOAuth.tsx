import { useNavigate } from "react-router-dom"
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google"
import { Request } from "../../utils/requests/Request"
import { GoogleOAuthDto } from "../../utils/requests/types"
import useAuth from "../../hooks/useAuth"

interface Props {
	subscriptionTier?: string
	signUpOrIn: "signup" | "signin"
}

const GoogleOAuth: React.FC<Props> = ({ subscriptionTier, signUpOrIn }) => {
	const { setAuth, setPersist } = useAuth()
	const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID
	const navigate = useNavigate()

	// Fix this later and don't use "any" you lazy-ass!!
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const onSuccess = async (credentialResponse: any) => {
		try {
			const payload: GoogleOAuthDto = {
				token: credentialResponse.credential,
				signUpOrIn,
				subappId: "FREEINV",
				subscriptionTier,
			}
			const response = await Request.post(
				"/authentication/google",
				payload,
				false
			)
			if (response) {
				if (response.status && response.status === 403) {
					localStorage.setItem("persist", "false")
					alert(response.message)
					navigate("/signup")
					return false
				}
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
