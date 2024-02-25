import { useState } from "react"
import { Box } from "@mui/material"

interface Props {
	showMessage: string
	hideMessage: string
	children: React.ReactNode
}

const ShowHideComponent: React.FC<Props> = ({
	showMessage,
	hideMessage,
	children,
}) => {
	const [show, setShow] = useState(false)

	const toggleShow = () => {
		setShow(!show)
	}

	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
				gap: 1,
			}}
		>
			<button onClick={toggleShow}>{show ? hideMessage : showMessage}</button>
			{show ? children : null}
		</Box>
	)
}

export default ShowHideComponent
