import { useNavigate } from "react-router-dom"
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google"

interface Props {
	backendUrl: string
}

const GoogleOAuth: React.FC<Props> = ({ backendUrl }) => {
	const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID
	const navigate = useNavigate()

	// This is a shitty workaround ... fix this later and don't use "any" you lazy-ass!!
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const onSuccess = async (credentialResponse: any) => {
		try {
			const response = await fetch(`${backendUrl}/authentication/google`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					token: credentialResponse.credential,
				}),
			})
			if (response) {
				const data = await response.json()
				
				localStorage.setItem("loginTokens", JSON.stringify(data.tokens))
				localStorage.setItem("user", JSON.stringify(data.user))
				navigate("/")
				window.location.reload()
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