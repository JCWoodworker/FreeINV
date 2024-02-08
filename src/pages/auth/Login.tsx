import GoogleOAuth from "./GoogleOAuth"

const Login = () => {
	return (
		<div className="google-oauth mt-2 p-4 d-flex flex-column justify-content-center align-items-center gap-4">
			<h1 className="px-2">Sign Up or Login<br />with Google</h1>
			<div className="google-oauth d-flex justify-content-center align-items-center">
				<GoogleOAuth />
			</div>
		</div>
	)
}

export default Login
