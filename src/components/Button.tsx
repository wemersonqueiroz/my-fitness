import clsx from "clsx"
import React from "react"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: () => void
  className?: string
  icon?: React.ReactNode
  disabled?: boolean
  buttonType?: "default" | "submit" | "reset" | "cancel"
  text?: string
  ariaLabel?: string
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  className,
  icon,
  disabled,
  buttonType,
  text,
  ariaLabel,
  ...props
}) => {
  return (
    <button
      {...props}
      aria-label={ariaLabel}
      disabled={disabled}
      className={clsx(
        className,
        "md:text-md flex w-fit cursor-pointer items-center justify-center rounded-md border border-transparent px-4 py-3 text-xs font-medium text-skin-base shadow-sm outline-none drop-shadow-lg dark:text-font-primary-dark text-font-primary-light active:scale-95 active:text-skin-inverted",
        {
          "gap-2": icon,
          "bg-primary-light dark:bg-primary-dark  ": buttonType === "default",
          "hover:bg-green-400 active:bg-green-300": buttonType === "submit",
          " hover:bg-red-400 active:bg-red-300": buttonType === "cancel",
          "cursor-not-allowed active:scale-100": disabled,
        }
      )}
      onClick={onClick}>
      {text}
      {icon}
    </button>
  )
}

export default Button
