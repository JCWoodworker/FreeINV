import { useState } from "react"
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google"

interface Props {
	backendUrl: string
}

const GoogleOAuth: React.FC<Props> = ({ backendUrl }) => {
	const [tokens, setTokens] = useState({})
	const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID

	// this is just here because I hate squiggly lines 
	// and don't need the tokens variable yet
	if (tokens == "magicFuckyString") {
		console.log('meh')
	}

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
						.then((data) => setTokens(data))
				}}
			/>
		</GoogleOAuthProvider>
	)
}

export default GoogleOAuth
