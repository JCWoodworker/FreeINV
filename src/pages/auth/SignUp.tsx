import { useState } from "react"
import { useLocation, Link } from "react-router-dom"
import { Box, Typography, Button } from "@mui/material"

import GoogleOAuth from "./GoogleOAuth"

const SignUp = () => {
	const { state } = useLocation()
	const validSubscriptionTiers: string[] = ["basic", "mid", "high", "unlimited"]
	const [selectedTier, setSelectedTier] = useState<string>(state || "basic")

	return (
		<Box
			sx={{
				textAlign: "center",
				mt: 1,
				p: 2,
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
				gap: 1,
			}}
		>
			<Typography variant="h3" sx={{ mb: 3 }}>
				Sign Up Using Google
			</Typography>
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
			<Button variant="contained" sx={{ mb: 5 }}>
				<Link to="/">Click here to review subscription tiers</Link>
			</Button>
			<GoogleOAuth subscriptionTier={selectedTier} signUpOrIn="signup" />
		</Box>
	)
}

export default SignUp
