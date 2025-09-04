import { useState } from "react"
import { Users, Search, Filter, Plus, TrendingUp, Calendar, MessageSquare, FileText } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const patients = [
  {
    id: "1",
    name: "Priya Sharma",
    age: 34,
    email: "priya@example.com",
    phone: "+91 98765 43210",
    program: "Panchakarma Detox",
    progress: 68,
    status: "active",
    joinDate: "2024-11-15",
    nextSession: "2024-12-30T10:00:00Z",
    constitution: "Vata-Pitta",
    totalSessions: 35,
    completedSessions: 23,
    wellnessScore: 8.2,
    lastVisit: "2024-12-28",
    notes: "Excellent progress, patient very compliant with dietary recommendations"
  },
  {
    id: "2",
    name: "Arjun Mehta", 
    age: 41,
    email: "arjun@example.com",
    phone: "+91 99887 76543",
    program: "Stress Management",
    progress: 45,
    status: "active",
    joinDate: "2024-12-01",
    nextSession: "2024-12-30T14:00:00Z",
    constitution: "Pitta-Kapha",
    totalSessions: 20,
    completedSessions: 9,
    wellnessScore: 7.1,
    lastVisit: "2024-12-27",
    notes: "Responding well to meditation and abhyanga treatments"
  },
  {
    id: "3",
    name: "Sunita Kapoor",
    age: 52,
    email: "sunita@example.com", 
    phone: "+91 98123 45678",
    program: "Joint Pain Relief",
    progress: 25,
    status: "requires_attention",
    joinDate: "2024-12-10",
    nextSession: "2025-01-02T11:00:00Z",
    constitution: "Vata-Kapha",
    totalSessions: 25,
    completedSessions: 6,
    wellnessScore: 6.3,
    lastVisit: "2024-12-26",
    notes: "Slow progress, may need treatment plan adjustment"
  },
  {
    id: "4",
    name: "Rohit Patel",
    age: 29,
    email: "rohit@example.com",
    phone: "+91 97654 32109",
    program: "Digestive Health",
    progress: 85,
    status: "completing",
    joinDate: "2024-10-01", 
    nextSession: "2025-01-05T09:00:00Z",
    constitution: "Pitta",
    totalSessions: 15,
    completedSessions: 13,
    wellnessScore: 9.1,
    lastVisit: "2024-12-29",
    notes: "Excellent results, nearing treatment completion"
  }
]

export function Patients() {
  const [searchQuery, setSearchQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [selectedPatient, setSelectedPatient] = useState<string | null>(null)

  const filteredPatients = patients.filter(patient => {
    const matchesSearch = patient.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         patient.program.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         patient.constitution.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesStatus = statusFilter === "all" || patient.status === statusFilter
    return matchesSearch && matchesStatus
  })

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active": return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
      case "requires_attention": return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
      case "completing": return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
      case "paused": return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
      default: return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200"
    }
  }

  const getWellnessColor = (score: number) => {
    if (score >= 8) return "text-green-600"
    if (score >= 6) return "text-yellow-600" 
    return "text-red-600"
  }

  const PatientCard = ({ patient }: { patient: typeof patients[0] }) => (
    <Card 
      className={`hover:shadow-lg transition-all duration-200 cursor-pointer ${
        selectedPatient === patient.id ? 'ring-2 ring-primary' : ''
      }`}
      onClick={() => setSelectedPatient(patient.id)}
    >
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <Avatar className="h-12 w-12">
              <AvatarFallback className="bg-primary text-primary-foreground font-semibold">
                {patient.name.split(" ").map(n => n[0]).join("")}
              </AvatarFallback>
            </Avatar>
            <div>
              <h3 className="text-lg font-semibold text-foreground">{patient.name}</h3>
              <p className="text-sm text-muted-foreground">Age {patient.age} • {patient.constitution}</p>
            </div>
          </div>
          <Badge className={getStatusColor(patient.status)}>
            {patient.status.replace("_", " ")}
          </Badge>
        </div>

        <div className="space-y-3">
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span className="text-muted-foreground">Treatment Progress</span>
              <span className="font-medium">{patient.progress}%</span>
            </div>
            <Progress value={patient.progress} className="h-2" />
          </div>

          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-muted-foreground">Program</p>
              <p className="font-medium">{patient.program}</p>
            </div>
            <div>
              <p className="text-muted-foreground">Wellness Score</p>
              <p className={`font-bold text-lg ${getWellnessColor(patient.wellnessScore)}`}>
                {patient.wellnessScore}/10
              </p>
            </div>
            <div>
              <p className="text-muted-foreground">Sessions</p>
              <p className="font-medium">{patient.completedSessions}/{patient.totalSessions}</p>
            </div>
            <div>
              <p className="text-muted-foreground">Last Visit</p>
              <p className="font-medium">{patient.lastVisit}</p>
            </div>
          </div>

          <div className="pt-3 border-t">
            <p className="text-xs text-muted-foreground mb-2">Recent Notes:</p>
            <p className="text-sm bg-muted/30 p-2 rounded text-muted-foreground">
              {patient.notes}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground flex items-center gap-2">
            <Users className="h-8 w-8" />
            Patient Management
          </h1>
          <p className="text-muted-foreground">
            Monitor patient progress and manage treatment plans
          </p>
        </div>
        
        <Button className="bg-gradient-primary hover:opacity-90">
          <Plus className="h-4 w-4 mr-2" />
          Add New Patient
        </Button>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Patients</p>
                <p className="text-2xl font-bold">{patients.length}</p>
              </div>
              <Users className="h-8 w-8 text-primary" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Active Treatments</p>
                <p className="text-2xl font-bold">
                  {patients.filter(p => p.status === "active").length}
                </p>
              </div>
              <TrendingUp className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Require Attention</p>
                <p className="text-2xl font-bold text-red-600">
                  {patients.filter(p => p.status === "requires_attention").length}
                </p>
              </div>
              <MessageSquare className="h-8 w-8 text-red-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Avg Wellness</p>
                <p className="text-2xl font-bold text-accent">
                  {(patients.reduce((acc, p) => acc + p.wellnessScore, 0) / patients.length).toFixed(1)}
                </p>
              </div>
              <TrendingUp className="h-8 w-8 text-accent" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters & Search */}
      <Card>
        <CardContent className="p-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search patients by name, program, or constitution..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-48">
                <Filter className="h-4 w-4 mr-2" />
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Patients</SelectItem>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="requires_attention">Needs Attention</SelectItem>
                <SelectItem value="completing">Completing</SelectItem>
                <SelectItem value="paused">Paused</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="grid" className="space-y-6">
        <TabsList>
          <TabsTrigger value="grid">Grid View</TabsTrigger>
          <TabsTrigger value="list">List View</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>

        {/* Grid View */}
        <TabsContent value="grid">
          {filteredPatients.length === 0 ? (
            <Card>
              <CardContent className="p-8 text-center">
                <Users className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                <h3 className="text-lg font-semibold mb-2">No patients found</h3>
                <p className="text-muted-foreground">
                  {searchQuery || statusFilter !== "all" 
                    ? "Try adjusting your filters or search terms"
                    : "Add your first patient to get started"
                  }
                </p>
              </CardContent>
            </Card>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredPatients.map((patient) => (
                <PatientCard key={patient.id} patient={patient} />
              ))}
            </div>
          )}
        </TabsContent>

        {/* List View */}
        <TabsContent value="list">
          <Card>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="border-b">
                    <tr className="text-left">
                      <th className="p-4 font-medium">Patient</th>
                      <th className="p-4 font-medium">Program</th>
                      <th className="p-4 font-medium">Progress</th>
                      <th className="p-4 font-medium">Wellness</th>
                      <th className="p-4 font-medium">Status</th>
                      <th className="p-4 font-medium">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredPatients.map((patient) => (
                      <tr key={patient.id} className="border-b hover:bg-muted/30">
                        <td className="p-4">
                          <div className="flex items-center gap-3">
                            <Avatar className="h-10 w-10">
                              <AvatarFallback className="bg-primary text-primary-foreground">
                                {patient.name.split(" ").map(n => n[0]).join("")}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="font-medium">{patient.name}</p>
                              <p className="text-sm text-muted-foreground">
                                Age {patient.age} • {patient.constitution}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="p-4">
                          <p className="font-medium">{patient.program}</p>
                          <p className="text-sm text-muted-foreground">
                            {patient.completedSessions}/{patient.totalSessions} sessions
                          </p>
                        </td>
                        <td className="p-4">
                          <div className="w-20">
                            <Progress value={patient.progress} className="h-2" />
                            <p className="text-xs text-center mt-1">{patient.progress}%</p>
                          </div>
                        </td>
                        <td className="p-4">
                          <p className={`font-bold text-lg ${getWellnessColor(patient.wellnessScore)}`}>
                            {patient.wellnessScore}
                          </p>
                        </td>
                        <td className="p-4">
                          <Badge className={getStatusColor(patient.status)}>
                            {patient.status.replace("_", " ")}
                          </Badge>
                        </td>
                        <td className="p-4">
                          <div className="flex gap-1">
                            <Button variant="ghost" size="sm">
                              <FileText className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="sm">
                              <Calendar className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="sm">
                              <MessageSquare className="h-4 w-4" />
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Analytics */}
        <TabsContent value="analytics">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
                  Treatment Outcomes
                </CardTitle>
                <CardDescription>
                  Success rates across different programs
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8 text-center">
                <TrendingUp className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
                <h3 className="text-lg font-semibold mb-2">Analytics Coming Soon</h3>
                <p className="text-muted-foreground">
                  Detailed treatment analytics and success metrics will be available soon.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Program Distribution</CardTitle>
                <CardDescription>
                  Patient distribution across treatment programs
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {["Panchakarma Detox", "Stress Management", "Joint Pain Relief", "Digestive Health"].map((program) => {
                    const count = patients.filter(p => p.program === program).length
                    const percentage = (count / patients.length) * 100
                    return (
                      <div key={program} className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>{program}</span>
                          <span>{count} patients ({percentage.toFixed(0)}%)</span>
                        </div>
                        <Progress value={percentage} className="h-2" />
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default Patients