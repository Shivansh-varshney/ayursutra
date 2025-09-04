import { Outlet } from "react-router-dom"
import { Sidebar } from "./sidebar"

export function MainLayout() {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <main className="flex-1 overflow-auto">
        <Outlet />
      </main>
    </div>
  )
}