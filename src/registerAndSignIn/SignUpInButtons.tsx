import React from "react"
import InvButton from "../components/InvButton"

interface Props {
	userLoaded: boolean
	setUserLoaded: (userLoaded: boolean) => void
}

const SignUpInButtons: React.FC<Props> = ({ userLoaded, setUserLoaded }) => {
	return (
		<div className="app-body">
			<div className="sign-in-up-container">
				<InvButton
					label="Sign Up"
					classNames="button"
					onClick={() => alert("Sign Up")}
				/>
				<InvButton
					label="Sign In"
					classNames="button"
					onClick={() => alert("Sign In")}
				/>
			</div>
		</div>
	)
}

export default SignUpInButtons
