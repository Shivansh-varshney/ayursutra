import { useRole } from "@/components/providers/role-provider"
import { PatientDashboard } from "@/components/dashboard/patient-dashboard"
import { PractitionerDashboard } from "@/components/dashboard/practitioner-dashboard"

export function Dashboard() {
  const { currentRole } = useRole()

  return (
    <div className="container mx-auto px-4 py-6">
      {currentRole === "patient" ? (
        <PatientDashboard />
      ) : (
        <PractitionerDashboard />
      )}
    </div>
  )
}

export default Dashboard