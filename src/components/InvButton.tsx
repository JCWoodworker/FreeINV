import { Button } from "react-bootstrap"

interface Props {
	onClick: () => void
	classNames: string
	label: string
	ids?: string
}

const InvButton: React.FC<Props> = ({ onClick, classNames, label, ids = "" }) => {
	return (
		<Button className={classNames} onClick={onClick} id={ids}>
			{label}
		</Button>
	)
}

export default InvButton
