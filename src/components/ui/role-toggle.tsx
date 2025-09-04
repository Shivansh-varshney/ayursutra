import { UserRole, useRole } from "@/components/providers/role-provider"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Users, UserCheck } from "lucide-react"

export function RoleToggle() {
  const { currentRole, switchRole } = useRole()

  const handleRoleSwitch = () => {
    const newRole: UserRole = currentRole === "patient" ? "practitioner" : "patient"
    switchRole(newRole)
  }

  return (
    <div className="flex items-center gap-2">
      <Badge variant="outline" className="text-xs">
        Demo Mode
      </Badge>
      <Button
        variant="outline"
        size="sm"
        onClick={handleRoleSwitch}
        className="gap-2"
      >
        {currentRole === "patient" ? (
          <Users className="h-4 w-4" />
        ) : (
          <UserCheck className="h-4 w-4" />
        )}
        {currentRole === "patient" ? "Switch to Practitioner" : "Switch to Patient"}
      </Button>
    </div>
  )
}