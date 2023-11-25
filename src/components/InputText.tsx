import { Form } from "react-bootstrap"

interface Props {
	label: string
	placeholder?: string
	required?: boolean
  labelClassName?: string,
  inputClassName?: string
}
const InputText: React.FC<Props> = ({
	label,
	placeholder = "",
	required = false,
  labelClassName = "",
  inputClassName = ""
}) => {
	return (
		<Form.Group className="label-text-group" controlId="signInForm">
			<Form.Label className={labelClassName}>{label}</Form.Label>
			<Form.Control className={inputClassName} placeholder={placeholder} required={required} />
		</Form.Group>
	)
}

export default InputText
