import { useState } from "react"
import { useLocation, Link } from "react-router-dom"
import { Form, FormLabel } from "react-bootstrap"

import GoogleOAuth from "./GoogleOAuth"
import FormCheckInput from "react-bootstrap/esm/FormCheckInput"

const Login = () => {
	const { state } = useLocation()
	const validSubscriptionTiers = ["basic", "mid", "high", "unlimited"]
	const [selectedTier, setSelectedTier] = useState("basic")

	return (
		<div className="google-oauth mt-2 p-2 d-flex flex-column justify-content-center align-items-center gap-4">
			<h1 className="px-2">
				Sign Up or Login
				<br />
				with Google
			</h1>
			<div className="google-oauth d-flex justify-content-center align-items-center">
				<GoogleOAuth subscriptionTier={selectedTier} />
			</div>
			<Link to="/" className="p-2 border rounded">
				Click here to view subscription tiers
			</Link>
			<Form className="d-flex flex-row gap-2">
				{validSubscriptionTiers.map((tier) => (
					<FormLabel key={tier}>
						{`${tier[0].toUpperCase() + tier.slice(1)} -> `}
						<FormCheckInput
							type="checkbox"
							checked={tier === selectedTier}
							onChange={() => setSelectedTier(tier)}
						/>
					</FormLabel>
				))}
			</Form>
			<p>{`Your subscription selection: ${state}`}</p>
		</div>
	)
}

export default Login
