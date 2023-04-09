interface InputProps {
  placeholder?: string
  className?: string
  id?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  type?: string
  name?: string
}

const Input = (props: InputProps) => {
  return (
    <input
      type={props.type}
      name={props.name}
      placeholder={props.placeholder}
      id={props.id}
      className="p-2 rounded text-font-secondary-light"
    />
  )
}

export default Input
