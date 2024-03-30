import GoogleOAuth from "./GoogleOAuth"
const Login = () => {
	return (
		<div>
			<p>Sign In with Google</p>
			<GoogleOAuth signUpOrIn="signin" />
		</div>
	)
}

export default Login
