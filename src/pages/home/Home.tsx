import { Link } from "react-router-dom"

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
				All subscription levels include:
				<li>
					<strong className="strong-no">$0</strong> Monthly Fees
				</li>
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
				<Link to="/signin" state={"level 1"}>
					<div className="item-description-container">
						<h3>Level 1</h3>
						<ul>
							<li>1 Location</li>
							<li>Up to 2 Rooms</li>
							<li>Up to 5 Items Per Room</li>
							<br />
							<li>
								You'll receive blog emails with affiliate links twice per month
							</li>
							<li>You may also fully opt-out of our emails at this level!</li>
						</ul>
					</div>
				</Link>
				<Link to="/signin" state={"level 2"}>
					<div className="item-description-container">
						<h3>Level 2</h3>
						<ul>
							<li>2 Locations</li>
							<li>Up to 4 Rooms Per Location</li>
							<li>Up to 20 Items Per Room</li>
							<br />
							<li>
								Must opt in to receive weekly blog emails with affiliate links
							</li>
						</ul>
					</div>
				</Link>
				<Link to="/signin" state={"level 3"}>
					<div className="item-description-container">
						<h3>Level 3</h3>
						<ul>
							<li>Up to 8 Locations</li>
							<li>Up to 5 Rooms Per Location</li>
							<li>Up to 10 Items per room</li>
							<br />
							<li>
								Must opt in to receive daily blog emails with affiliate links
							</li>
						</ul>
					</div>
				</Link>
			</div>
		</div>
	)
}

export default Home
