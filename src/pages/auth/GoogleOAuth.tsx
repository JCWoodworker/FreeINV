import { useNavigate } from "react-router-dom"
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google"
import axios from "axios"

interface Props {
	backendUrl: string
	setUserIsLoggedIn: (value: boolean) => void
}

const GoogleOAuth: React.FC<Props> = ({ backendUrl, setUserIsLoggedIn }) => {
	const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID
	const navigate = useNavigate()

	// This is a shitty workaround ... fix this later and don't use "any" you lazy-ass!!
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const onSuccess = async (credentialResponse: any) => {
		try {
			const response = await axios.post(`${backendUrl}/authentication/google`, {
				token: credentialResponse.credential,
			})
			if (response) {
				const data = await response.data
				localStorage.setItem("freeInvTokens", JSON.stringify(data.tokens))
				setUserIsLoggedIn(true)
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
