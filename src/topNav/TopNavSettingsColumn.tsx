import React from "react"
import { Modal } from "react-bootstrap"

interface Props {
	showSettings: boolean
	toggleSettings: () => void
}

const settingsAlerts = [
	{
		title: "Profile",
	},
	{
		title: "Messages",
	},
	{
		title: "Settings",
	},
]

const sendAlert = (event: React.MouseEvent<HTMLParagraphElement>) => {
  event.preventDefault()
  alert(event.currentTarget.id)
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
        {settingsAlerts.map((alert) => (
          <p id={alert.title} onClick={(event) => sendAlert(event)}>{alert.title}</p>
        ))}
			</Modal.Body>
			<Modal.Footer>
				<button onClick={() => toggleSettings()}>Close</button>
			</Modal.Footer>
		</Modal>
	)
}

export default TopNavSettingsColumn
