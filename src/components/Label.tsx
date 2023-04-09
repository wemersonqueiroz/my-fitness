import clsx from "clsx"

interface LabelProps {
  value?: string
  htmlFor?: string
  className?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  type?: string
  children?: React.ReactNode
}

const Label = (props: LabelProps) => {
  return (
    <label
      htmlFor={props.htmlFor}
      className={clsx(`${props.className} text-sm md:text-md`, {})}>
      {props.value}
      {props.children}
    </label>
  )
}

export default Label
