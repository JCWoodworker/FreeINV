import React from "react"
import { Modal } from "react-bootstrap"

interface Props {
	showSettings: boolean
	toggleSettings: () => void
}

export const TopNavSettingsColumn: React.FC<Props> = ({
	showSettings,
	toggleSettings,
}) => {
	return (
		<Modal show={showSettings} className="settings-modal">
			<Modal.Header>
				<Modal.Title>Settings</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<p>Profile</p>
				<p>Messages</p>
				<p>Settings</p>
			</Modal.Body>
			<Modal.Footer>
				<button onClick={() => toggleSettings()}>Close</button>
			</Modal.Footer>
		</Modal>
	)
}

export default TopNavSettingsColumn
