import { useNavigate } from "react-router-dom"
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google"

interface Props {
	backendUrl: string
}

const GoogleOAuth: React.FC<Props> = ({ backendUrl }) => {
	const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID
	const navigate = useNavigate()

	return (
		<GoogleOAuthProvider clientId={clientId}>
			<GoogleLogin
				onSuccess={(credentialResponse) => {
					fetch(`${backendUrl}/authentication/google`, {
						method: "POST",
						headers: {
							"Content-Type": "application/json",
						},
						body: JSON.stringify({
							token: credentialResponse.credential,
						}),
					})
						.then((response) => response.json())
						.then((data) => {
							localStorage.setItem("user", JSON.stringify(data.user))
							localStorage.setItem("loginTokens", JSON.stringify(data.tokens))
							navigate("/")
							window.location.reload()
						})
				}}
			/>
		</GoogleOAuthProvider>
	)
}

export default GoogleOAuth
