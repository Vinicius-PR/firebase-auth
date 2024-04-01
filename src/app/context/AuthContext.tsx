'use client'
import { ReactNode, createContext, useEffect, useState } from 'react'
import { onAuthStateChanged, User, signOut} from 'firebase/auth'
import { auth } from '../firebase/config'

interface AuthContextProps {
  user: User | null
  isLogged: boolean
  logout: () => void
}

interface AuthContextProviderProps {
  children: ReactNode
}

export const AuthContext = createContext<AuthContextProps>({} as AuthContextProps)

export function AuthContextProvider({children}: AuthContextProviderProps) {

  const [user, setUser] = useState<User | null>(null)
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user: User | null) => {
      if (user) {
        setUser(user)
        setIsLogged(true)
      } else {
        setIsLogged(false)
      }
    })

    return () => unsubscribe()
  }, [])

  async function logout() {
    let result, error = null

    try {
      result = await signOut(auth)
    } catch(e) {
      error = e
    }

    return {result, error}
  }

  return (
    <AuthContext.Provider value={{user, isLogged, logout}}>
      {children}
    </AuthContext.Provider>
  )
}

