import React from "react"
import { useTheme } from "./ThemeContext"
import Button from "./Button"
import clsx from "clsx"
import { BsFillSunFill, BsMoonStarsFill } from "react-icons/bs"

const DarkModeButton: React.FC = () => {
  const { darkMode, toggleDarkMode } = useTheme()

  return (
    <Button
      onClick={toggleDarkMode}
      className={clsx("absolute top-10 right-10", {
        "bg-primary-light": !darkMode,
        "bg-primary-dark": darkMode,
      })}
      icon={darkMode ? <BsFillSunFill /> : <BsMoonStarsFill />}
    />
  )
}

export default DarkModeButton
