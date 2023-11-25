import React, { useState } from "react"
import { Container, Row, Col } from "react-bootstrap"
import TopNavSettingsColumn from "./TopNavSettingsColumn"

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
							<i
								className="bi bi-gear-fill nav-icon"
								onClick={toggleSettings}
							></i>
						) : (
							<i
								className="bi bi-gear nav-icon rotated"
								onClick={toggleSettings}
							></i>
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
