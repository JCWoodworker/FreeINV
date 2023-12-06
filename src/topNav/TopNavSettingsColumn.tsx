import { Modal, Button } from "react-bootstrap"
import { userSettingsOptions } from "./settingsOptions"

interface Props {
	userIsLoaded: boolean
	showSettings: boolean
	toggleSettings: () => void
}

const sendAlert = (event: React.MouseEvent<HTMLParagraphElement>) => {
	event.preventDefault()
	alert(event.currentTarget.id)
}

export const TopNavSettingsColumn: React.FC<Props> = ({
	userIsLoaded,
	showSettings,
	toggleSettings,
}) => {
	let modalBody = null

	userIsLoaded
		? (modalBody = (
				<>
					{userSettingsOptions.map((alert) => (
						<p
							key={alert.title}
							id={alert.title}
							onClick={(event) => sendAlert(event)}
						>
							{alert.title}
						</p>
					))}
				</>
			))
		: (modalBody = "Close this and sign in")

	return (
		<Modal
			show={showSettings}
			className={`settings-modal ${
				showSettings ? "modal-open" : "modal-closed"
			}`}
		>
			<Modal.Body>{modalBody}</Modal.Body>
			<Modal.Footer>
				<Button className="button nav-button" onClick={() => toggleSettings()}>
					Close
				</Button>
			</Modal.Footer>
		</Modal>
	)
}

export default TopNavSettingsColumn
