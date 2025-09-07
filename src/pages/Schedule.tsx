import { useState } from "react"
import { Calendar, Clock, Plus, Filter, Search, MapPin, User } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useRole } from "@/components/providers/role-provider"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const upcomingSessions = [
  {
    id: "1",
    type: "Abhyanga Massage",
    date: "2024-12-30",
    time: "10:00 AM",
    duration: "90 min",
    practitioner: "Dr. Rajesh Kumar",
    patient: "Priya Sharma",
    location: "Room 201",
    status: "confirmed",
    notes: "Full body oil massage with warm sesame oil"
  },
  {
    id: "2", 
    type: "Consultation",
    date: "2024-12-30",
    time: "2:00 PM",
    duration: "60 min", 
    practitioner: "Dr. Rajesh Kumar",
    patient: "Arjun Mehta",
    location: "Consultation Room A",
    status: "pending",
    notes: "Initial assessment and treatment planning"
  },
  {
    id: "3",
    type: "Shirodhara",
    date: "2025-01-02", 
    time: "11:00 AM",
    duration: "75 min",
    practitioner: "Dr. Rajesh Kumar", 
    patient: "Sunita Kapoor",
    location: "Room 103",
    status: "confirmed",
    notes: "Therapeutic oil pouring for stress relief"
  }
]

export function Schedule() {
  const { currentRole } = useRole()
  const [view, setView] = useState<"calendar" | "list">("list")
  const [filter, setFilter] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredSessions = upcomingSessions.filter(session => {
    const matchesSearch = session.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         session.patient.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         session.practitioner.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesFilter = filter === "all" || session.status === filter
    return matchesSearch && matchesFilter
  })

  const getStatusColor = (status: string) => {
    switch (status) {
      case "confirmed": return "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-200"
      case "pending": return "bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-200"
      case "cancelled": return "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-200"
      default: return "bg-gray-100 text-gray-700 dark:bg-gray-900 dark:text-gray-200"
    }
  }

  return (
    <div className="p-6 lg:p-10 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground">
            {currentRole === "patient" ? "My Schedule" : "Session Management"}
          </h1>
          <p className="text-muted-foreground">
            {currentRole === "patient" 
              ? "Manage your upcoming therapy sessions and appointments"
              : "View and manage all patient sessions"
            }
          </p>
        </div>
        
        <Button className="rounded-xl bg-gradient-to-r from-sky-400 to-blue-600 text-white hover:opacity-90">
          <Plus className="h-4 w-4 mr-2" />
          {currentRole === "patient" ? "Book Session" : "Add Session"}
        </Button>
      </div>

      {/* Filters & Search */}
      <Card className="rounded-2xl shadow-md border bg-white dark:bg-gray-900">
        <CardContent className="p-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search sessions, practitioners, or treatments..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 rounded-xl"
                />
              </div>
            </div>
            
            <div className="flex gap-2">
              <Select value={filter} onValueChange={setFilter}>
                <SelectTrigger className="w-32 rounded-xl">
                  <Filter className="h-4 w-4 mr-2" />
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="confirmed">Confirmed</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="cancelled">Cancelled</SelectItem>
                </SelectContent>
              </Select>

              <Tabs value={view} onValueChange={(v) => setView(v as "calendar" | "list")}>
                <TabsList className="rounded-xl">
                  <TabsTrigger value="list">List</TabsTrigger>
                  <TabsTrigger value="calendar">Calendar</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Main Content */}
      <Tabs value={view} className="space-y-6">
        {/* List View */}
        <TabsContent value="list" className="space-y-4">
          {filteredSessions.length === 0 ? (
            <Card className="rounded-2xl shadow-md border bg-white dark:bg-gray-900">
              <CardContent className="p-8 text-center">
                <Calendar className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                <h3 className="text-lg font-semibold mb-2">No sessions found</h3>
                <p className="text-muted-foreground">
                  {searchQuery || filter !== "all" 
                    ? "Try adjusting your filters or search terms"
                    : "You don't have any upcoming sessions scheduled"
                  }
                </p>
              </CardContent>
            </Card>
          ) : (
            filteredSessions.map((session) => (
              <Card key={session.id} className="rounded-2xl shadow-md border bg-white dark:bg-gray-900 hover:shadow-lg transition-shadow duration-200">
                <CardContent className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="text-xl font-semibold text-foreground mb-1">
                            {session.type}
                          </h3>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Calendar className="h-4 w-4" />
                              {session.date}
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="h-4 w-4" />
                              {session.time} ({session.duration})
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="h-4 w-4" />
                              {session.location}
                            </div>
                          </div>
                        </div>
                        <Badge className={`${getStatusColor(session.status)} rounded-xl`}>
                          {session.status}
                        </Badge>
                      </div>

                      <div className="flex items-center gap-4 mb-3">
                        <div className="flex items-center gap-2">
                          <Avatar className="h-8 w-8">
                            <AvatarFallback className="bg-primary text-primary-foreground text-xs">
                              {currentRole === "patient" 
                                ? session.practitioner.split(" ").map(n => n[0]).join("")
                                : session.patient.split(" ").map(n => n[0]).join("")
                              }
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="text-sm font-medium">
                              {currentRole === "patient" ? session.practitioner : session.patient}
                            </p>
                            <p className="text-xs text-muted-foreground">
                              {currentRole === "patient" ? "Practitioner" : "Patient"}
                            </p>
                          </div>
                        </div>
                      </div>

                      {session.notes && (
                        <p className="text-sm text-muted-foreground bg-muted/30 p-3 rounded-lg">
                          {session.notes}
                        </p>
                      )}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-2">
                      <Button variant="outline" size="sm" className="rounded-xl">
                        View Details
                      </Button>
                      {session.status === "confirmed" && (
                        <>
                          <Button variant="outline" size="sm" className="rounded-xl">
                            Reschedule
                          </Button>
                          <Button variant="destructive" size="sm" className="rounded-xl">
                            Cancel
                          </Button>
                        </>
                      )}
                      {session.status === "pending" && currentRole === "practitioner" && (
                        <Button size="sm" className="rounded-xl bg-gradient-to-r from-sky-400 to-blue-600 text-white">
                          Approve
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </TabsContent>

        {/* Calendar View */}
        <TabsContent value="calendar">
          <Card className="rounded-2xl shadow-md border bg-white dark:bg-gray-900">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-foreground">
                <Calendar className="h-5 w-5 text-primary" />
                Calendar View
              </CardTitle>
              <CardDescription className="text-muted-foreground">
                Visual calendar representation of your sessions
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8 text-center">
              <Calendar className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
              <h3 className="text-lg font-semibold mb-2">Calendar View Coming Soon</h3>
              <p className="text-muted-foreground">
                Interactive calendar with drag-and-drop scheduling will be available soon.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="rounded-2xl shadow-md border bg-white dark:bg-gray-900">
          <CardContent className="p-4 flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">This Week</p>
              <p className="text-2xl font-bold text-foreground">
                {filteredSessions.filter(s => s.status === "confirmed").length}
              </p>
            </div>
            <Calendar className="h-8 w-8 text-primary" />
          </CardContent>
        </Card>

        <Card className="rounded-2xl shadow-md border bg-white dark:bg-gray-900">
          <CardContent className="p-4 flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Pending</p>
              <p className="text-2xl font-bold text-foreground">
                {filteredSessions.filter(s => s.status === "pending").length}
              </p>
            </div>
            <Clock className="h-8 w-8 text-accent" />
          </CardContent>
        </Card>

        <Card className="rounded-2xl shadow-md border bg-white dark:bg-gray-900">
          <CardContent className="p-4 flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Total Hours</p>
              <p className="text-2xl font-bold text-foreground">12.5</p>
            </div>
            <User className="h-8 w-8 text-secondary-foreground" />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default Schedule
