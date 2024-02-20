import GoogleOAuth from "./GoogleOAuth"
const Login = () => {

	return (
		<div className="google-oauth mt-2 p-2 d-flex flex-column justify-content-center align-items-center gap-4">
			<h1 className="px-2">Sign In with Google</h1>
			<GoogleOAuth signUpOrIn="signin"/>
		</div>
	)
}

export default Login
