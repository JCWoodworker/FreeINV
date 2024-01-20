import { Button } from "react-bootstrap"
interface Props {
	buttonText: string
}

const SubmitButton: React.FC<Props> = ({ buttonText }) => {
	return (
		<Button variant="primary" type="submit">
			{buttonText}
		</Button>
	)
}

export default SubmitButton
