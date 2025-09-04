import { NavLink } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { RoleToggle } from "@/components/ui/role-toggle"
import { useRole } from "@/components/providers/role-provider"
import { 
  Calendar, 
  Bell, 
  TrendingUp, 
  MessageSquare, 
  LayoutDashboard,
  LogOut,
  Users,
  ChevronLeft,
  ChevronRight
} from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"

const patientNavItems = [
  { to: "/dashboard", icon: LayoutDashboard, label: "Dashboard" },
  { to: "/schedule", icon: Calendar, label: "Schedule" },
  { to: "/tracking", icon: TrendingUp, label: "Progress" },
  { to: "/notifications", icon: Bell, label: "Notifications" },
  { to: "/feedback", icon: MessageSquare, label: "Feedback" },
]

const practitionerNavItems = [
  { to: "/dashboard", icon: LayoutDashboard, label: "Dashboard" },
  { to: "/schedule", icon: Calendar, label: "Sessions" },
  { to: "/patients", icon: Users, label: "Patients" },
  { to: "/notifications", icon: Bell, label: "Notifications" },
]

export function Sidebar() {
  const { currentUser, currentRole, logout } = useRole()
  const [collapsed, setCollapsed] = useState(false)
  
  const navItems = currentRole === "patient" ? patientNavItems : practitionerNavItems

  return (
    <div className={cn(
      "flex flex-col h-screen bg-sidebar border-r border-sidebar-border transition-all duration-300",
      collapsed ? "w-16" : "w-64"
    )}>
      {/* Header */}
      <div className="p-4 border-b border-sidebar-border">
        <div className="flex items-center justify-between">
          {!collapsed && (
            <h1 className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              AyurSutra
            </h1>
          )}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setCollapsed(!collapsed)}
            className="h-8 w-8 p-0"
          >
            {collapsed ? (
              <ChevronRight className="h-4 w-4" />
            ) : (
              <ChevronLeft className="h-4 w-4" />
            )}
          </Button>
        </div>
      </div>

      {/* User Profile */}
      <div className="p-4 border-b border-sidebar-border">
        <div className="flex items-center gap-3">
          <Avatar className="h-10 w-10">
            <AvatarFallback className="bg-primary text-primary-foreground text-sm font-medium">
              {currentUser?.avatar}
            </AvatarFallback>
          </Avatar>
          {!collapsed && (
            <div className="flex-1 min-w-0">
              <p className="font-medium text-sidebar-foreground truncate">
                {currentUser?.name}
              </p>
              <p className="text-xs text-muted-foreground capitalize">
                {currentRole}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 group",
                isActive
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
              )
            }
          >
            <item.icon className="h-5 w-5 flex-shrink-0" />
            {!collapsed && (
              <span className="font-medium group-hover:translate-x-1 transition-transform duration-200">
                {item.label}
              </span>
            )}
          </NavLink>
        ))}
      </nav>

      {/* Controls */}
      <div className="p-4 space-y-4 border-t border-sidebar-border">
        {!collapsed && (
          <div className="space-y-3">
            <RoleToggle />
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Theme</span>
              <ThemeToggle />
            </div>
          </div>
        )}
        
        <Button
          variant="ghost"
          size={collapsed ? "sm" : "default"}
          onClick={logout}
          className={cn(
            "w-full justify-start text-muted-foreground hover:text-destructive hover:bg-destructive/10",
            collapsed && "px-2"
          )}
        >
          <LogOut className="h-4 w-4" />
          {!collapsed && <span className="ml-2">Logout</span>}
        </Button>
      </div>
    </div>
  )
}