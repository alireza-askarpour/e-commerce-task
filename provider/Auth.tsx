import { useState, createContext, useContext } from "react"

interface IAuth {
  loggedin: boolean
}

const initialState = {
  loggedin: false,
}

const AuthContext = createContext<IAuth>(initialState)

export const AuthProvider = ({ children }) => {
  const [loggedin, setLoggedin] = useState(false)

  const value = {
    loggedin,
  }

  return <AuthContext.Provider value={value} children={children} />
}

export const useAuth = () => useContext(AuthContext)
