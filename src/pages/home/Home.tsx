interface Props {
	loggedInUser: unknown
}

const Home: React.FC<Props> = ({ loggedInUser }) => {

	if (!loggedInUser) {
		return (
			<div>
				<h1>Please login</h1>
			</div>
		)
	}

	return (
		<div>
			<h1>Hello!</h1>
		</div>
	)
}

export default Home
