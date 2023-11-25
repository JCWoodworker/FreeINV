import React, { useContext } from "react"
import { Modal } from "react-bootstrap"
import { userContext, User } from "../App"
import { userSettingsOptions } from "./settingsOptions"
import InvButton from "../components/InvButton"

interface Props {
	showSettings: boolean
	toggleSettings: () => void
	userLoaded: boolean
	setUserLoaded: (userLoaded: boolean) => void
}

const sendAlert = (event: React.MouseEvent<HTMLParagraphElement>) => {
	event.preventDefault()
	alert(event.currentTarget.id)
}

export const TopNavSettingsColumn: React.FC<Props> = ({
	showSettings,
	toggleSettings,
	userLoaded,
	setUserLoaded,
}) => {
	const loadUnloadFakeUser = () => {
		setUserLoaded(!userLoaded)
		toggleSettings()
	}

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
				<InvButton
					label={!userLoaded ? "Load Fake User" : "Sign Out Fake User"}
					classNames="button nav-button"
					onClick={() => loadUnloadFakeUser()}
				/>
				<InvButton
					label={"Close"}
					classNames={"button nav-button"}
					onClick={() => toggleSettings()}
				/>
			</Modal.Footer>
		</Modal>
	)
}

export default TopNavSettingsColumn
