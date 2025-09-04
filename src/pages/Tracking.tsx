import { useState } from "react"
import { TrendingUp, Target, Activity, Calendar, Award, BarChart3 } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useRole } from "@/components/providers/role-provider"

const progressData = {
  overall: 68,
  phases: [
    { 
      name: "Phase 1: Preparation", 
      progress: 100, 
      status: "completed",
      startDate: "2024-11-15",
      endDate: "2024-12-01",
      sessions: 8,
      notes: "Dietary adjustments and initial detox preparation completed successfully"
    },
    { 
      name: "Phase 2: Detoxification", 
      progress: 68, 
      status: "active",
      startDate: "2024-12-01",
      endDate: "2025-01-15", 
      sessions: 15,
      notes: "Currently undergoing intensive panchakarma treatments"
    },
    { 
      name: "Phase 3: Rejuvenation", 
      progress: 0, 
      status: "upcoming",
      startDate: "2025-01-15",
      endDate: "2025-02-15",
      sessions: 10,
      notes: "Rasayana therapies for tissue rebuilding and immunity"
    }
  ],
  milestones: [
    { name: "Initial Assessment", completed: true, date: "2024-11-15" },
    { name: "Detox Phase Started", completed: true, date: "2024-12-01" },
    { name: "Mid-treatment Review", completed: false, date: "2024-12-30" },
    { name: "Rejuvenation Phase", completed: false, date: "2025-01-15" },
    { name: "Treatment Completion", completed: false, date: "2025-02-15" }
  ],
  vitals: {
    energy: { current: 7.5, previous: 6.2, trend: "up" },
    sleep: { current: 8.2, previous: 7.8, trend: "up" },
    digestion: { current: 8.0, previous: 6.5, trend: "up" },
    stress: { current: 4.2, previous: 6.8, trend: "down" }
  }
}

export function Tracking() {
  const { currentRole } = useRole()
  const [selectedPhase, setSelectedPhase] = useState("current")

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed": return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
      case "active": return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200" 
      case "upcoming": return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200"
      default: return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200"
    }
  }

  const getTrendIcon = (trend: string) => {
    return trend === "up" ? "↗️" : trend === "down" ? "↘️" : "→"
  }

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground">
            {currentRole === "patient" ? "My Progress" : "Patient Progress"}
          </h1>
          <p className="text-muted-foreground">
            {currentRole === "patient" 
              ? "Track your wellness journey and treatment milestones"
              : "Monitor patient improvements and treatment effectiveness"
            }
          </p>
        </div>
        
        <Button className="bg-gradient-primary hover:opacity-90">
          <BarChart3 className="h-4 w-4 mr-2" />
          Generate Report
        </Button>
      </div>

      {/* Overall Progress */}
      <Card className="bg-gradient-to-r from-primary/5 to-accent/5">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-2xl">Overall Treatment Progress</CardTitle>
              <CardDescription>Panchakarma Detoxification Program</CardDescription>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-primary">{progressData.overall}%</div>
              <p className="text-sm text-muted-foreground">Complete</p>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Progress value={progressData.overall} className="h-3 mb-4" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center gap-2">
              <Activity className="h-4 w-4 text-primary" />
              <span className="text-sm">23 sessions completed</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-accent" />
              <span className="text-sm">Started Nov 15, 2024</span>
            </div>
            <div className="flex items-center gap-2">
              <Target className="h-4 w-4 text-secondary-foreground" />
              <span className="text-sm">Expected completion: Feb 15, 2025</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="phases" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="phases">Treatment Phases</TabsTrigger>
          <TabsTrigger value="vitals">Vitals & Wellness</TabsTrigger>
          <TabsTrigger value="milestones">Milestones</TabsTrigger>
          <TabsTrigger value="charts">Charts & Analytics</TabsTrigger>
        </TabsList>

        {/* Treatment Phases */}
        <TabsContent value="phases" className="space-y-4">
          {progressData.phases.map((phase, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-200">
              <CardContent className="p-6">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-xl font-semibold text-foreground mb-1">
                          {phase.name}
                        </h3>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span>{phase.startDate} → {phase.endDate}</span>
                          <span>{phase.sessions} sessions</span>
                        </div>
                      </div>
                      <Badge className={getStatusColor(phase.status)}>
                        {phase.status}
                      </Badge>
                    </div>

                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between text-sm">
                        <span>Progress</span>
                        <span>{phase.progress}%</span>
                      </div>
                      <Progress value={phase.progress} className="h-2" />
                    </div>

                    <p className="text-sm text-muted-foreground bg-muted/30 p-3 rounded-md">
                      {phase.notes}
                    </p>
                  </div>

                  <div className="flex flex-col gap-2">
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                    {phase.status === "active" && currentRole === "practitioner" && (
                      <Button size="sm" className="bg-gradient-primary">
                        Update Progress
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        {/* Vitals & Wellness */}
        <TabsContent value="vitals">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.entries(progressData.vitals).map(([key, data]) => (
              <Card key={key}>
                <CardHeader>
                  <CardTitle className="capitalize flex items-center justify-between">
                    {key}
                    <span className="text-2xl">{getTrendIcon(data.trend)}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-end">
                      <div>
                        <p className="text-3xl font-bold text-foreground">{data.current}</p>
                        <p className="text-sm text-muted-foreground">Current Score</p>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-semibold text-muted-foreground">{data.previous}</p>
                        <p className="text-xs text-muted-foreground">Previous</p>
                      </div>
                    </div>
                    <Progress value={(data.current / 10) * 100} className="h-3" />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>Poor</span>
                      <span>Excellent</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Milestones */}
        <TabsContent value="milestones">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="h-5 w-5" />
                Treatment Milestones
              </CardTitle>
              <CardDescription>
                Key achievements and upcoming goals in your treatment journey
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {progressData.milestones.map((milestone, index) => (
                <div key={index} className="flex items-center gap-4 p-4 rounded-lg border">
                  <div className={`w-4 h-4 rounded-full flex-shrink-0 ${
                    milestone.completed 
                      ? "bg-green-500" 
                      : "bg-gray-300 dark:bg-gray-600"
                  }`} />
                  <div className="flex-1">
                    <h4 className={`font-medium ${
                      milestone.completed 
                        ? "text-foreground" 
                        : "text-muted-foreground"
                    }`}>
                      {milestone.name}
                    </h4>
                    <p className="text-sm text-muted-foreground">{milestone.date}</p>
                  </div>
                  {milestone.completed && (
                    <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                      Completed
                    </Badge>
                  )}
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        {/* Charts & Analytics */}
        <TabsContent value="charts">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5" />
                  Progress Charts
                </CardTitle>
                <CardDescription>
                  Visual representation of your improvement over time
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8 text-center">
                <TrendingUp className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
                <h3 className="text-lg font-semibold mb-2">Interactive Charts Coming Soon</h3>
                <p className="text-muted-foreground">
                  Detailed analytics and progress visualization will be available soon.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Session Analytics</CardTitle>
                <CardDescription>
                  Performance metrics and session outcomes
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-muted/30 rounded-lg">
                    <p className="text-2xl font-bold text-primary">92%</p>
                    <p className="text-sm text-muted-foreground">Attendance Rate</p>
                  </div>
                  <div className="text-center p-4 bg-muted/30 rounded-lg">
                    <p className="text-2xl font-bold text-accent">8.4/10</p>
                    <p className="text-sm text-muted-foreground">Avg Satisfaction</p>
                  </div>
                  <div className="text-center p-4 bg-muted/30 rounded-lg">
                    <p className="text-2xl font-bold text-secondary-foreground">23</p>
                    <p className="text-sm text-muted-foreground">Sessions Done</p>
                  </div>
                  <div className="text-center p-4 bg-muted/30 rounded-lg">
                    <p className="text-2xl font-bold text-green-600">12</p>
                    <p className="text-sm text-muted-foreground">Sessions Left</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default Tracking