import React, { useState } from "react"
import { useAppContext } from "../AppContext"
import { Container, Row, Col } from "react-bootstrap"
import TopNavSettingsColumn from "./TopNavSettingsColumn"
import { Link } from "react-router-dom"

const TopNav: React.FC = () => {
	const [showSettings, setShowSettings] = useState(false)
	const { appState } = useAppContext()
	const homeLinkUrl = appState.userIsLoaded ? "/users" : "/"
	const greeting = appState.userIsLoaded
		? `Welcome, ${appState.userInfo.name}`
		: "Inventory Pro"
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
								<Link to={homeLinkUrl} className="react-router-Link">
									<i className="bi bi-house nav-icon"></i>
								</Link>
								<i
									className="bi bi-gear-fill nav-icon"
									onClick={toggleSettings}
								></i>
							</>
						) : (
							<>
								<Link to={homeLinkUrl} className="react-router-Link">
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
				showSettings={showSettings}
				toggleSettings={toggleSettings}
			/>
		</>
	)
}

export default TopNav
