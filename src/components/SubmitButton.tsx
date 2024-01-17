interface Props {
	buttonText: string
}

const SubmitButton: React.FC<Props> = ({ buttonText }) => {
	return <button type="submit">{buttonText}</button>
}

export default SubmitButton
