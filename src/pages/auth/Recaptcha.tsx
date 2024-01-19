import ReCAPTCHA from "react-google-recaptcha"

interface Props {
	setRecaptchaVerified: (value: boolean) => void
}

const Recaptcha: React.FC<Props> = ({ setRecaptchaVerified }) => {
	const onRecaptchaChange = (value: unknown) => {
		setRecaptchaVerified(value !== "")
	}

	return (
		<ReCAPTCHA
			size="normal"
			theme="dark"
			sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
			onChange={onRecaptchaChange}
		/>
	)
}

export default Recaptcha
