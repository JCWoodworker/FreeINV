import React, { useContext } from "react"
import { Modal } from "react-bootstrap"
import { userContext, User } from "../App"
import { userSettingsOptions } from "./settingsOptions"

interface Props {
	showSettings: boolean
	toggleSettings: () => void
}

const sendAlert = (event: React.MouseEvent<HTMLParagraphElement>) => {
	event.preventDefault()
	alert(event.currentTarget.id)
}

export const TopNavSettingsColumn: React.FC<Props> = ({
	showSettings,
	toggleSettings,
}) => {
	const user = useContext<User>(userContext)

	let modalBody = null

	user?.isPresent
		? (modalBody = (
				<>
					{userSettingsOptions.map((alert) => (
						<p id={alert.title} onClick={(event) => sendAlert(event)}>
							{alert.title}
						</p>
					))}
				</>
			))
		: (modalBody = "Please Sign In")

	return (
		<Modal
			show={showSettings}
			className={`settings-modal ${
				showSettings ? "modal-open" : "modal-closed"
			}`}
		>
			<Modal.Body>{modalBody}</Modal.Body>
			<Modal.Footer>
				<button onClick={() => toggleSettings()}>Close</button>
			</Modal.Footer>
		</Modal>
	)
}

export default TopNavSettingsColumn
