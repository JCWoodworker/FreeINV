import { useState } from "react"
import { useLocation, Link } from "react-router-dom"

import GoogleOAuth from "./GoogleOAuth"

const SignUp = () => {
	const { state } = useLocation()
	const validSubscriptionTiers: string[] = ["basic", "mid", "high", "unlimited"]
	const [selectedTier, setSelectedTier] = useState<string>(state || "basic")

	return (
		<div>
			<h1>Sign Up Using Google</h1>
			<p>Select a subscription tier:</p>
			<form>
				{validSubscriptionTiers.map((tier) => (
					<label key={tier}>
						{`${tier[0].toUpperCase() + tier.slice(1)} `}
						<input
							type="checkbox"
							checked={tier === selectedTier}
							onChange={() => setSelectedTier(tier)}
						/>
					</label>
				))}
			</form>
			<Link to="/">Click here to review subscription tiers</Link>
			<GoogleOAuth subscriptionTier={selectedTier} signUpOrIn="signup" />
		</div>
	)
}

export default SignUp
