import { Button } from "react-bootstrap"

interface Props {
	onClick: () => void
	classNames: string
	label: string
	ids?: string
	type?: "submit" | "reset" | "button" | undefined
}

const InvButton: React.FC<Props> = ({ onClick, classNames, label, ids = "", type = "submit" }) => {
	return (
		<Button className={classNames} onClick={onClick} id={ids} type={type}>
			{label}
		</Button>
	)
}

export default InvButton
