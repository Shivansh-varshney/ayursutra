import React, { createContext, useContext, useState, ReactNode } from "react"

export type UserRole = "patient" | "practitioner"

interface User {
  id: string
  name: string
  email: string
  role: UserRole
  avatar?: string
}

interface RoleContextType {
  currentUser: User | null
  currentRole: UserRole
  setCurrentRole: (role: UserRole) => void
  isAuthenticated: boolean
  login: (user: User) => void
  logout: () => void
  switchRole: (role: UserRole) => void
}

const RoleContext = createContext<RoleContextType | undefined>(undefined)

// Demo users for role switching
const demoUsers = {
  patient: {
    id: "patient-1",
    name: "Priya Sharma",
    email: "priya@example.com",
    role: "patient" as UserRole,
    avatar: "PS"
  },
  practitioner: {
    id: "practitioner-1", 
    name: "Dr. Rajesh Kumar",
    email: "dr.rajesh@ayursutra.com",
    role: "practitioner" as UserRole,
    avatar: "RK"
  }
}

export function RoleProvider({ children }: { children: ReactNode }) {
  const [currentUser, setCurrentUser] = useState<User | null>(demoUsers.patient)
  const [currentRole, setCurrentRole] = useState<UserRole>("patient")
  const [isAuthenticated, setIsAuthenticated] = useState(true) // Demo mode - logged in by default

  const login = (user: User) => {
    setCurrentUser(user)
    setCurrentRole(user.role)
    setIsAuthenticated(true)
  }

  const logout = () => {
    setCurrentUser(null)
    setIsAuthenticated(false)
  }

  const switchRole = (role: UserRole) => {
    setCurrentRole(role)
    setCurrentUser(demoUsers[role])
  }

  return (
    <RoleContext.Provider
      value={{
        currentUser,
        currentRole,
        setCurrentRole,
        isAuthenticated,
        login,
        logout,
        switchRole,
      }}
    >
      {children}
    </RoleContext.Provider>
  )
}

export function useRole() {
  const context = useContext(RoleContext)
  if (context === undefined) {
    throw new Error("useRole must be used within a RoleProvider")
  }
  return context
}