import type { AppProps } from "next/app"
import { ThemeProvider } from "../components/ThemeContext"
import "../styles/globals.css"
import PageWrapper from "@/components/PageWrapper"
import Navbar from "@/components/Navbar"
import { useRouter } from "next/router"

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const isHomePage = router.pathname === "/"
  return (
    <ThemeProvider>
      <div className="relative w-screen h-screen">
        <PageWrapper>
          {!isHomePage && <Navbar />}
          <Component {...pageProps} />
        </PageWrapper>
      </div>
    </ThemeProvider>
  )
}

export default MyApp
