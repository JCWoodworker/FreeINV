import { useLocation } from "react-router-dom"
import { Link } from "react-router-dom"

import GoogleOAuth from "./GoogleOAuth"

const Login = () => {
	let { state } = useLocation()
	let subscriptionLink = (
		<Link to="/" className="p-2 w-75 border rounded">
			Click here to change your subscription selection
		</Link>
	)

	console.log(`BEFORE: ${state}`)
	if (
		state !== "basic" &&
		state !== "mid" &&
		state !== "high" &&
		state !== "unlimited"
	) {
		state = "Please follow the link above to select a tier"
		subscriptionLink = (
			<Link to="/" className="p-2 border rounded">
				Click here to view subscription tiers
			</Link>
		)
	}
	console.log(`AFTER: ${state}`)

	return (
		<div className="google-oauth mt-2 p-2 d-flex flex-column justify-content-center align-items-center gap-4">
			<h1 className="px-2">
				Sign Up or Login
				<br />
				with Google
			</h1>
			<div className="google-oauth d-flex justify-content-center align-items-center">
				<GoogleOAuth />
			</div>
			{subscriptionLink}
			<p>{`Your subscription selection: ${state}`}</p>
		</div>
	)
}

export default Login
