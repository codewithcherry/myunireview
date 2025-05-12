"use client"

import { useEffect, useState } from "react"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { 
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer"
import { Button } from "@/components/ui/button"
import { X, LogIn, UserPlus, Home } from "lucide-react"

const SessionAwareDrawer = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { data: session } = useSession()
  const router = useRouter()

  useEffect(() => {
    setIsOpen(!session)
  }, [session])

  return (
    <Drawer 
      open={isOpen} 
      onOpenChange={(open) => {
        if (!open && !session) return
        setIsOpen(open)
      }}
    >
      <DrawerContent 
        className="bg-white dark:bg-gray-900"
        onInteractOutside={(e) => e.preventDefault()}
      >
        <div className="mx-auto w-full max-w-md">
          {/* Close button (only shown when logged in) */}
          {session && (
            <div className="flex justify-end p-4">
              <DrawerClose asChild>
                <Button variant="ghost" size="icon">
                  <X className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                </Button>
              </DrawerClose>
            </div>
          )}

          <DrawerHeader className="text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100 dark:bg-indigo-900/50 mb-4">
              <LogIn className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
            </div>
            <DrawerTitle className="text-2xl font-bold text-gray-900 dark:text-white">
              Welcome {session ? 'back!' : '!'}
            </DrawerTitle>
            <DrawerDescription className="text-gray-600 dark:text-gray-300">
              {session 
                ? 'You are successfully logged in'
                : 'Please register or login to access all features'}
            </DrawerDescription>
          </DrawerHeader>

          <div className="p-6 pt-0">
            <div className="text-center">
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
                {session
                  ? 'You now have full access to our platform'
                  : 'Authentication is required to view this page'}
              </p>
            </div>

            <div className="space-y-4">
              {!session ? (
                <>
                  <Button 
                    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white dark:bg-indigo-700 dark:hover:bg-indigo-800"
                    onClick={() => router.push("/login")}
                  >
                    <LogIn className="mr-2 h-4 w-4" />
                    Login
                  </Button>
                  <Button 
                    variant="outline"
                    className="w-full text-indigo-600 border-indigo-600 hover:bg-indigo-50 dark:text-indigo-400 dark:border-indigo-400 dark:hover:bg-gray-800"
                    onClick={() => router.push("/register")}
                  >
                    <UserPlus className="mr-2 h-4 w-4" />
                    Register
                  </Button>
                </>
              ) : null}

              <Button 
                variant="ghost"
                className="w-full text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
                asChild
              >
                <Link href="/">
                  <Home className="mr-2 h-4 w-4" />
                  {session ? 'Go to Dashboard' : 'Goto Home'}
                </Link>
              </Button>
            </div>
          </div>

          <DrawerFooter className="pt-0">
            <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
              {session
                ? 'Having trouble? Contact our support team'
                : 'By continuing, you agree to our Terms of Service'}
            </p>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  )
}

export default SessionAwareDrawer