import { useState } from "react"
import { useLocation, Link } from "react-router-dom"
import { Form, FormLabel } from "react-bootstrap"

import GoogleOAuth from "./GoogleOAuth"
import FormCheckInput from "react-bootstrap/esm/FormCheckInput"

const Login = () => {
	const { state } = useLocation()
	const validSubscriptionTiers: string[] = ["basic", "mid", "high", "unlimited"]
	const [selectedTier, setSelectedTier] = useState<string>(state || "basic")

	return (
		<div className="google-oauth mt-2 p-2 d-flex flex-column justify-content-center align-items-center gap-4">
			<h1 className="px-2">
				Sign Up or Login
				<br />
				with Google
			</h1>
				<GoogleOAuth subscriptionTier={selectedTier} />
			<p>Select a subscription tier:</p>
			<Form className="w-100 d-flex flex-column justify-content-center align-items-center gap-2">
					{validSubscriptionTiers.map((tier) => (
						<FormLabel key={tier}>
							{`${tier[0].toUpperCase() + tier.slice(1)} `}
							<FormCheckInput
								type="checkbox"
								checked={tier === selectedTier}
								onChange={() => setSelectedTier(tier)}
							/>
						</FormLabel>
					))}
			<Link to="/" className="p-2 width-100 border rounded">
				Click here to review subscription tiers
			</Link>
			</Form>
		</div>
	)
}

export default Login
