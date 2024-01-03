import { Link } from "react-router-dom"
import { LoggedInUser } from "../../App"

interface Props {
	loggedInUser: LoggedInUser
}

const Home: React.FC<Props> = ({ loggedInUser }) => {
	if (loggedInUser.id === undefined) {
		return (
			<div>
						<div>
			<h1>Welcome to Free INV!</h1>
			<p>Your FREE inventory management application</p>
			<ul>
				All subscription levels include:
				<li>
					<strong className="strong-highlight">$0</strong> Monthly Fees
				</li>
				<li>
					<strong className="strong-highlight">NO</strong> In-App Ads
				</li>
				<li>
					<strong className="strong-highlight">NO</strong> Unnecessary Notifications
				</li>
				<li>
					<strong className="strong-highlight">NO</strong> In-App Purchases
				</li>
				<br />
				<li>Select a subscription level:</li>
			</ul>
			<div className="home-description-container">
				<Link to="/signup" state={"level1"}>
					<div className="item-description-container">
						<h2>Level 1</h2>
						<ul>
							<li><strong className="strong-highlight">1</strong> Location</li>
							<li>Up to <strong className="strong-highlight">2</strong> Rooms</li>
							<li>Up to <strong className="strong-highlight">10</strong> items per room</li>
							<br />
							<li>
								You'll receive blog emails with affiliate links twice per month
							</li>
							<li>You may also fully opt-out of our emails at this level!</li>
						</ul>
					</div>
				</Link>
				<Link to="/signup" state={"level2"}>
					<div className="item-description-container">
						<h2>Level 2</h2>
						<ul>
							<li>Up to <strong className="strong-highlight">2</strong> locations</li>
							<li>Up to <strong className="strong-highlight">4</strong> rooms per location</li>
							<li>Up to <strong className="strong-highlight">40</strong> items per room</li>
							<br />
							<li>
								Must opt in to receive weekly blog emails with affiliate links
							</li>
						</ul>
					</div>
				</Link>
				<Link to="/signup" state={"level3"}>
					<div className="item-description-container">
						<h2>Level 3</h2>
						<ul>
							<li>Up to <strong className="strong-highlight">8</strong> locations</li>
							<li>Up to <strong className="strong-highlight">5</strong> rooms per location</li>
							<li>Up to <strong className="strong-highlight">50</strong> items per room</li>
							<br />
							<li>
								Must opt in to receive daily blog emails with affiliate links
							</li>
						</ul>
					</div>
				</Link>
			</div>
		</div>

			</div>
		)
	}

	return (
		<h1>Welcome Back!</h1>
	)
}

export default Home
