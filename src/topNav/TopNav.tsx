import React, { useState } from "react"
import { Container, Row, Col } from "react-bootstrap"
import TopNavSettingsColumn from "./TopNavSettingsColumn"

const TopNav: React.FC = () => {
	const [showSettings, setShowSettings] = useState(false)

	const toggleSettings = () => {
		setShowSettings(!showSettings)
	}
	return (
		<>
			<Container className="top-nav-container">
				<Row className="top-nav-row">
					<Col className="top-nav-left-col">
						<h1>NextRecruiter</h1>
					</Col>
					<Col className="top-nav-right-col">
						{showSettings ? (
							<i className="bi bi-gear-fill nav-icon" onClick={toggleSettings}></i>
						) : (
							<i className="bi bi-gear nav-icon" onClick={toggleSettings}></i>
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
