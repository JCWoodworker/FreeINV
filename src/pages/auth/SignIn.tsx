import GoogleOAuth from "./GoogleOAuth"

const SignIn = () => {
	return (
		<div className="GoogleOAuth">
			<h1>Sign In</h1>
			<form
				className="sign-in-form"
				onSubmit={() => {
					alert("Clicked Submit ... nothing happened!   This doesn't work yet!")
				}}
			>
				<input type="text" placeholder="Email" />
				<input type="password" placeholder="Password" />
				<button>Sign In</button>
			</form>
			<br />
			<h3>OR</h3>

			<GoogleOAuth />
		</div>
	)
}

export default SignIn
