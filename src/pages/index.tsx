import Button from "@/components/Button"
import DarkModeButton from "@/components/DarkModeButton"
import Input from "@/components/Input"
import Label from "@/components/Label"
import { useTheme } from "@/components/ThemeContext"
import { NextPage } from "next"
import { Inter } from "next/font/google"
import Link from "next/link"
import { useEffect, useState } from "react"

const inter = Inter({ subsets: ["latin"] })

const Home: NextPage = () => {
  const { darkMode, toggleDarkMode } = useTheme()

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      toggleDarkMode
    }
  }, [])

  return (
    <div className="flex flex-col items-center p-8 m-auto border rounded-lg border-primary-light dark:border-primary-dark drop-shadow-sm">
      <p className="md:text-xl">Welcome</p>
      <form className="flex flex-col gap-1 mt-8">
        <Label htmlFor="email" className="" value="Email" />
        <Input
          name="Email Field"
          id="email"
          type="email"
          placeholder=""
          className=""
        />
        <Label htmlFor="password" className="" value="Password" />
        <Input
          name="Password Field"
          id="password"
          type="password"
          placeholder=""
          className=""
        />
        <Link href="/dashboard">
          <Button buttonType="default" className="mx-auto mt-8" text="Login" />
        </Link>
        <p className="mx-auto mt-2 text-xs">
          No account?{" "}
          <span className="underline cursor-pointer text-font-secondary-light hover:text-font-primary-light">
            Click here to register.
          </span>
        </p>
      </form>
    </div>
  )
}

export default Home
