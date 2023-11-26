import React, { useState } from "react"
import { Container, Row, Col } from "react-bootstrap"
import TopNavSettingsColumn from "./TopNavSettingsColumn"
import { Link } from "react-router-dom"

interface Props {
	userLoaded: boolean
}

const TopNav: React.FC<Props> = ({ userLoaded }) => {
	const [showSettings, setShowSettings] = useState(false)

	let title = "Inventory Pro"
	showSettings ? (title = "Settings") : "Inventory Pro"

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
								<Link to="/" className="nav-icon-link">
									<i className="bi bi-house nav-icon"></i>
								</Link>
								<i
									className="bi bi-gear-fill nav-icon"
									onClick={toggleSettings}
								></i>
							</>
						) : (
							<>
								<Link to="/">
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
				userLoaded={userLoaded}
			/>
		</>
	)
}

export default TopNav
