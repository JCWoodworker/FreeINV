import { useState } from "react"
import { useLocation, Link } from "react-router-dom"
import { Form, FormLabel } from "react-bootstrap"

import GoogleOAuth from "./GoogleOAuth"
import FormCheckInput from "react-bootstrap/esm/FormCheckInput"

const SignUp = () => {
	const { state } = useLocation()
	const validSubscriptionTiers: string[] = ["basic", "mid", "high", "unlimited"]
	const [selectedTier, setSelectedTier] = useState<string>(state || "basic")

	return (
		<div className="google-oauth mt-2 p-2 d-flex flex-column justify-content-center align-items-center gap-4">
			<h1 className="px-2">Sign Up Using Google</h1>
			<p>Select a subscription tier:</p>
			<Form className="signup-form">
				{validSubscriptionTiers.map((tier) => (
					<FormLabel key={tier} className="form-input-box w-100 p-2 border rounded">
						{`${tier[0].toUpperCase() + tier.slice(1)} `}
						<FormCheckInput
							type="checkbox"
							checked={tier === selectedTier}
							onChange={() => setSelectedTier(tier)}
						/>
					</FormLabel>
				))}
			</Form>
			<Link to="/" className="p-2 width-100 border rounded">
				Click here to review subscription tiers
			</Link>
			<GoogleOAuth subscriptionTier={selectedTier} signUpOrIn="signup" />
		</div>
	)
}

export default SignUp
