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
			<h1>Welcome to Free INV!</h1>
			<p>Your FREE inventory management application</p>
			<ul>
				All levels include:
				<li>
					<strong className="strong-no">NO</strong> In-App Ads
				</li>
				<li>
					<strong className="strong-no">NO</strong> Unnecessary Notifications
				</li>
				<li>
					<strong className="strong-no">NO</strong> In-App Purchases
				</li>
			</ul>
			<div className="home-description-container">
				<div className="item-description-container">
					<h3>Level 1</h3>
					<ul>
						<li>1 Location</li>
						<li>Up to 2 Rooms</li>
						<li>Up to 5 Items Per Room</li>
						<br />
						<li>Twice a month blog emails with affiliate links</li>
						<li>You may also fully opt-out of our emails at this level!</li>
					</ul>
				</div>
				<div className="item-description-container">
				<h3>Level 2</h3>
					<ul>
						<li>2 Locations</li>
						<li>Up to 2 Rooms Per Location</li>
						<li>Up to 10 Items Per Room</li>
						<br />
						<li>Weekly blog emails with affiliate links</li>
					</ul>
				</div>
				<div className="item-description-container">
				<h3>Level 3</h3>
					<ul>
						<li>Up to 4 Locations</li>
						<li>Up to 4 Rooms Per Location</li>
						<li>Up to 50 Items Per Room</li>
						<br />
						<li>Twice a week blog emails with affiliate links</li>
					</ul>
				</div>
				<div className="item-description-container">
				<h3>Level 4</h3>
					<ul>
						<li>Up to 8 Location</li>
						<li>Up to 5 Rooms Per Location</li>
						<li>Up to 10 Items per room</li>
						<br />
						<li>Daily blog emails with affiliate links</li>
					</ul>
				</div>
			</div>
		</div>
	)
}

export default Home
