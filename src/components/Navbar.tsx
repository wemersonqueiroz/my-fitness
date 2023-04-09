import Image from "next/image"
import { auth } from "../../firebase/firebase"
import { signOut } from "firebase/auth"
import clsx from "clsx"
import { useState } from "react"
import Button from "./Button"
import router from "next/router"

const Navbar = () => {
  const [showingNavbar, setShowingNavbar] = useState(false)

  const logout = async () => {
    await signOut(auth)
    router.push("/")
  }

  const buttons = [
    {
      text: "Dashboard",
      icon: "/assets/dashboard.png",
      onClick: () => {
        router.push("/dashboard")
      },
    },
    {
      text: "Workout",
      icon: "/assets/dumbbell.png",
      onClick: () => {
        router.push("/workout")
      },
    },
    {
      text: "Body Shape",
      icon: "/assets/caliper.png",
      onClick: () => {
        router.push("/composition")
      },
    },
  ]

  return (
    <nav
      onMouseEnter={() => setShowingNavbar(true)}
      onMouseLeave={() => setShowingNavbar(false)}
      className={clsx(
        "fixed flex flex-col top-0 left-0 h-screen bg-primary-light dark:bg-primary-dark drop-shadow-xl transition-all duration-500 linear",
        {
          "w-20": !showingNavbar,
          "w-40 px-2": showingNavbar,
        }
      )}>
      <p
        className={clsx(
          "mt-4  font-thin text-center text-font-primary-light duration-300 delay-200",
          {
            "text-left text-sm": !showingNavbar,
            "text-center text-2xl font-semibold": showingNavbar,
          }
        )}>
        MyFitness
      </p>

      {/* Hello,{" "}
        <span>{auth.currentUser ? auth.currentUser.displayName : null}</span> */}
      <div className="flex flex-col items-center mt-8">
        <div className="flex flex-col gap-4 duration-1000">
          {buttons.map((button, index) => {
            return (
              <Button
                key={index}
                onClick={button.onClick}
                text={showingNavbar ? button.text : ""}
                className={clsx("dark:bg-secondary-light bg-primary-dark ", {
                  "text-sm flex flex-col-reverse w-[90px] p-2 dark:text-font-tertiary-dark":
                    showingNavbar,
                })}
                icon={
                  <Image
                    width={showingNavbar ? "10" : "20"}
                    height={showingNavbar ? "10" : "20"}
                    src={button.icon}
                    className={clsx(" ", {
                      "w-8": showingNavbar,
                      "w-10": !showingNavbar,
                    })}
                    alt={""}
                  />
                }
              />
            )
          })}
        </div>
      </div>
      <Button
        className="mx-auto mt-auto mb-8"
        buttonType="default"
        text="Logout"
        onClick={logout}
      />
    </nav>
  )
}

export default Navbar
