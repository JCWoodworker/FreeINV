import { Button } from "react-bootstrap"

interface Props {
	onClick: () => void
	classNames: string
	ids: string
	label: string
}

const InvButton: React.FC<Props> = ({ onClick, classNames, ids, label }) => {
	return (
		<Button className={classNames} onClick={onClick} id={ids}>
			{label}
		</Button>
	)
}

export default InvButton
