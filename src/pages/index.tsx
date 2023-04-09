import Button from "@/components/Button"
import { NextPage } from "next"
import { Inter } from "next/font/google"
import { useRouter } from "next/router"

import { auth } from "./firebase"
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth"
import { FcGoogle } from "react-icons/fc"

const inter = Inter({ subsets: ["latin"] })

const Home: NextPage = () => {
  const router = useRouter()
  const googleAuth = new GoogleAuthProvider()

  const login = async () => {
    const result = await signInWithPopup(auth, googleAuth)
    console.log(result)
    router.push("/dashboard")
  }

  return (
    <div className="flex flex-col items-center p-8 m-auto border rounded-lg border-primary-light dark:border-primary-dark drop-shadow-sm">
      <p className="md:text-xl">Welcome to MyFitness</p>
      <p className="mx-auto mt-4 text-xs">
        To access the dasboard you need to be logged in.
      </p>
      <Button
        buttonType="default"
        onClick={login}
        className="mx-auto mt-8"
        text={`Login with Google`}
        icon={<FcGoogle size={20} />}
      />
    </div>
  )
}

export default Home
