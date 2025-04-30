import { SessionProvider } from "next-auth/react"
import { ReactNode } from "react"
import { Session } from "next-auth"

interface ProvidersProps {
  children: ReactNode
  session?: Session | null
}

const AuthProvider = ({ children, session }: ProvidersProps) => {
  return (
    <SessionProvider session={session}>
      {children}
    </SessionProvider>
  )
}

export default AuthProvider