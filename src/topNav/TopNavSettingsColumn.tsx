import React, { useContext } from "react"
import { Modal } from "react-bootstrap"
import { userContext, User } from "../App"
import { playerSettingsOptions, coachSettingsOptions } from "./settingsOptions"
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
	user?.userType === "player"
		? (modalBody = (
				<>
					{playerSettingsOptions.map((alert) => (
						<p id={alert.title} onClick={(event) => sendAlert(event)}>
							{alert.title}
						</p>
					))}
				</>
			))
		: user?.userType === "coach"
		? (modalBody = (
				<>
					{coachSettingsOptions.map((alert) => (
						<p id={alert.title} onClick={(event) => sendAlert(event)}>
							{alert.title}
						</p>
					))}
				</>
			))
		: (modalBody = "Sign In From The Home Screen")

	return (
		<Modal show={showSettings} className="settings-modal">
			<Modal.Body>
				{modalBody}
				{/* {playerSettingsOptions.map((alert) => (
					<p id={alert.title} onClick={(event) => sendAlert(event)}>
						{alert.title}
					</p>
				))} */}
			</Modal.Body>
			<Modal.Footer>
				<button onClick={() => toggleSettings()}>Close</button>
			</Modal.Footer>
		</Modal>
	)
}

export default TopNavSettingsColumn
