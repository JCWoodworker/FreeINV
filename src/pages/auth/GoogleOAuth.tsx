import { useState } from "react"
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google"

const GoogleOAuth = () => {
	const [tokens, setTokens] = useState({})
	const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID

	console.log(tokens)

	return (
		<GoogleOAuthProvider clientId={clientId}>
			<GoogleLogin
				onSuccess={(credentialResponse) => {
					fetch("http://localhost:3000/authentication/google", {
						method: "POST",
						headers: {
							"Content-Type": "application/json",
						},
						body: JSON.stringify({
							token: credentialResponse.credential,
						}),
					})
						.then((response) => response.json())
						.then((data) => setTokens(data))
				}}
			/>
		</GoogleOAuthProvider>
	)
}

export default GoogleOAuth
