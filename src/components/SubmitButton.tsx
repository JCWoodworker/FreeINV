interface Props {
  buttonText: string
}

const SubmitButton: React.FC<Props> = ({ buttonText }) => {
  return (
    <button type="submit" className="regular-button">{buttonText}</button>
  )
}

export default SubmitButton