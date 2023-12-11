import { Container, Button } from "react-bootstrap"

const SignOut: React.FC = () => {
	const signUserOut = () => {
		window.localStorage.removeItem("userSession")
		window.location.reload()
	}
	return (
		<Container>
			<Button className="button" onClick={signUserOut}>
				Sign Out
			</Button>
		</Container>
	)
}

export default SignOut
