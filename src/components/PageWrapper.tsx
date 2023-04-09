import DarkModeButton from "./DarkModeButton"
import { useTheme } from "./ThemeContext"

interface PageWrapperProps {
  children: React.ReactNode
}

const PageWrapper = (props: PageWrapperProps) => {
  const { darkMode, toggleDarkMode } = useTheme()
  return (
    <div className={`h-full ${darkMode ? "dark" : ""}`}>
      <div className="flex flex-col items-center w-full h-full p-8 transition-all duration-300 border-secondary-border bg-background-primary-light dark:bg-background-primary-dark drop-shadow-sm text-font-tertiary-dark dark:text-font-primary-dark">
        <DarkModeButton />
        {props.children}
      </div>
    </div>
  )
}

export default PageWrapper
