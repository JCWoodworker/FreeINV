import GoogleOAuth from "./GoogleOAuth"
const Login = () => {

	return (
		<div>
			<h1>Sign In with Google</h1>
			<GoogleOAuth signUpOrIn="signin"/>
		</div>
	)
}

export default Login
