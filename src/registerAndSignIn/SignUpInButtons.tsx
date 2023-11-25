import React from "react"
import InvButton from "../components/InvButton"
import { Link } from "react-router-dom"

const SignUpInButtons: React.FC = () => {
	return (
		<div className="app-body">
			<div className="sign-in-up-container">
				<Link to="/signup">
					<InvButton label="Sign Up" classNames="button" onClick={() => {}} />
				</Link>
				<Link to="/signin">
					<InvButton
						label="Sign In"
						classNames="button"
						onClick={() => {}}
					/>
				</Link>
			</div>
		</div>
	)
}

export default SignUpInButtons
