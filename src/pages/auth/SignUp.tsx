import { useState } from "react"
import { useLocation, Link } from "react-router-dom"
import { Checkbox, FormGroup } from "@mui/material"

import GoogleOAuth from "./GoogleOAuth"

const SignUp = () => {
	const { state } = useLocation()
	const validSubscriptionTiers: string[] = ["basic", "mid", "high", "unlimited"]
	const [selectedTier, setSelectedTier] = useState<string>(state || "basic")

	return (
		<div>
			<p>Sign Up Using Google</p>
			<p>Select a subscription tier:</p>
			<FormGroup>
				{validSubscriptionTiers.map((tier) => (
					<label key={tier}>
						{`${tier[0].toUpperCase() + tier.slice(1)} `}
						<Checkbox
							checked={tier === selectedTier}
							onChange={() => setSelectedTier(tier)}
						/>
					</label>
				))}
			</FormGroup>
			<button>
				<Link to="/">Click here to review subscription tiers</Link>
			</button>
			<GoogleOAuth subscriptionTier={selectedTier} signUpOrIn="signup" />
		</div>
	)
}

export default SignUp
