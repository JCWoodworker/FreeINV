import { Box, Typography } from "@mui/material"
import GoogleOAuth from "./GoogleOAuth"
const Login = () => {
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
			}}
		>
			<Typography variant="h3" sx={{ mb: 3 }}>
				Sign In with Google
			</Typography>
			<GoogleOAuth signUpOrIn="signin" />
		</Box>
	)
}

export default Login
