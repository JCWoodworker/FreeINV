import { useNavigate } from "react-router-dom"
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google"
import { Request, GoogleOAuthDto } from "../../utils/index"
import useAuth from "../../hooks/useAuth"


const GoogleOAuth: React.FC = () => {
	const { setAuth, setPersist } = useAuth()
	const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID
	const navigate = useNavigate()

	// This is a shitty workaround ... fix this later and don't use "any" you lazy-ass!!
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
				setPersist && setPersist(true)
				setAuth &&
						setAuth({
							user: "USER",
							accessToken: response.tokens.accessToken,
							refreshToken: response.tokens.refreshToken,
							apps: [],
						})
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
