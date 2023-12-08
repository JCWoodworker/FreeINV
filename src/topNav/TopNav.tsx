import React, { useState } from "react"
import { Container, Row, Col } from "react-bootstrap"
import TopNavSettingsColumn from "./TopNavSettingsColumn"
import { Link } from "react-router-dom"

interface Props {
	userIsLoaded: boolean
}

const TopNav: React.FC<Props> = ({ userIsLoaded }) => {
	const [showSettings, setShowSettings] = useState(false)
	const greeting = userIsLoaded ? `Welcome!` : "H.I.Man"
	const title = showSettings ? "Settings" : greeting

	const toggleSettings = () => {
		setShowSettings(!showSettings)
	}
	return (
		<>
			<Container className="top-nav-container">
				<Row className="top-nav-row">
					<Col className="top-nav-left-col">
						<h1>{title}</h1>
					</Col>
					<Col className="top-nav-right-col">
						{showSettings ? (
							<>
								<Link
									to="/"
									className="react-router-Link"
									onClick={() => window.scrollTo(0, 0)}
								>
									<i className="bi bi-house nav-icon"></i>
								</Link>
								<i
									className="bi bi-gear-fill nav-icon"
									onClick={toggleSettings}
								></i>
							</>
						) : (
							<>
								<Link
									to="/"
									className="react-router-Link"
									onClick={() => window.scrollTo(0, 0)}
								>
									<i className="bi bi-house nav-icon"></i>
								</Link>
								<i
									className="bi bi-gear nav-icon rotated"
									onClick={toggleSettings}
								></i>
							</>
						)}
					</Col>
				</Row>
			</Container>
			<TopNavSettingsColumn
				userIsLoaded={userIsLoaded}
				showSettings={showSettings}
				toggleSettings={toggleSettings}
			/>
		</>
	)
}

export default TopNav
