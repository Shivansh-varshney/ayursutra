import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { 
  Calendar, 
  Users, 
  TrendingUp, 
  Clock,
  UserCheck,
  FileText,
  AlertCircle
} from "lucide-react"

export function PractitionerDashboard() {
  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-hero text-primary-foreground rounded-lg p-6">
        <h1 className="text-2xl font-bold mb-2">Welcome back, Dr. Kumar!</h1>
        <p className="opacity-90">Manage your patients and treatments with comprehensive insights.</p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Active Patients</p>
                <p className="text-lg font-bold">24</p>
              </div>
              <Users className="h-8 w-8 text-primary" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Today's Sessions</p>
                <p className="text-lg font-bold">6</p>
              </div>
              <Calendar className="h-8 w-8 text-accent" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Pending Reviews</p>
                <p className="text-lg font-bold">3</p>
              </div>
              <FileText className="h-8 w-8 text-secondary" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Success Rate</p>
                <p className="text-lg font-bold">94%</p>
              </div>
              <TrendingUp className="h-8 w-8 text-green-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Today's Schedule */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              Today's Schedule
            </CardTitle>
            <CardDescription>
              December 29, 2024 - 6 sessions planned
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex items-center gap-3">
                  <Avatar className="h-8 w-8">
                    <AvatarFallback className="bg-primary text-primary-foreground text-xs">
                      PS
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">Priya Sharma</p>
                    <p className="text-sm text-muted-foreground">
                      <Clock className="h-3 w-3 inline mr-1" />
                      10:00 AM - Abhyanga
                    </p>
                  </div>
                </div>
                <Badge>In Progress</Badge>
              </div>

              <div className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex items-center gap-3">
                  <Avatar className="h-8 w-8">
                    <AvatarFallback className="bg-accent text-accent-foreground text-xs">
                      AM
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">Arjun Mehta</p>
                    <p className="text-sm text-muted-foreground">
                      <Clock className="h-3 w-3 inline mr-1" />
                      11:30 AM - Consultation
                    </p>
                  </div>
                </div>
                <Badge variant="outline">Scheduled</Badge>
              </div>

              <div className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex items-center gap-3">
                  <Avatar className="h-8 w-8">
                    <AvatarFallback className="bg-secondary text-secondary-foreground text-xs">
                      SK
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">Sunita Kapoor</p>
                    <p className="text-sm text-muted-foreground">
                      <Clock className="h-3 w-3 inline mr-1" />
                      2:00 PM - Shirodhara
                    </p>
                  </div>
                </div>
                <Badge variant="outline">Scheduled</Badge>
              </div>
            </div>

            <Button variant="hero" className="w-full">
              View Full Schedule
            </Button>
          </CardContent>
        </Card>

        {/* Patient Progress Overview */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              Patient Progress
            </CardTitle>
            <CardDescription>
              Recent improvements and milestones
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-accent/20 rounded-lg">
                <div className="flex items-center gap-3">
                  <UserCheck className="h-4 w-4 text-primary" />
                  <div>
                    <p className="font-medium text-sm">Priya Sharma</p>
                    <p className="text-xs text-muted-foreground">68% treatment completion</p>
                  </div>
                </div>
                <Badge variant="secondary">Excellent</Badge>
              </div>

              <div className="flex items-center justify-between p-3 bg-muted/20 rounded-lg">
                <div className="flex items-center gap-3">
                  <UserCheck className="h-4 w-4 text-accent" />
                  <div>
                    <p className="font-medium text-sm">Arjun Mehta</p>
                    <p className="text-xs text-muted-foreground">45% treatment completion</p>
                  </div>
                </div>
                <Badge>Good</Badge>
              </div>

              <div className="flex items-center justify-between p-3 bg-muted/20 rounded-lg">
                <div className="flex items-center gap-3">
                  <AlertCircle className="h-4 w-4 text-orange-500" />
                  <div>
                    <p className="font-medium text-sm">Sunita Kapoor</p>
                    <p className="text-xs text-muted-foreground">Requires attention</p>
                  </div>
                </div>
                <Badge variant="destructive">Review</Badge>
              </div>
            </div>

            <Button variant="outline" className="w-full">
              View All Patients
            </Button>
          </CardContent>
        </Card>

        {/* Recent Activities */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5" />
              Recent Activities
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-start gap-3 p-3 bg-accent/20 rounded-lg">
              <div className="w-2 h-2 bg-primary rounded-full mt-2" />
              <div>
                <p className="text-sm font-medium">Treatment Plan Updated</p>
                <p className="text-xs text-muted-foreground">
                  Modified Priya Sharma's panchakarma schedule
                </p>
                <p className="text-xs text-muted-foreground">2 hours ago</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 bg-muted/20 rounded-lg">
              <div className="w-2 h-2 bg-accent rounded-full mt-2" />
              <div>
                <p className="text-sm font-medium">Session Completed</p>
                <p className="text-xs text-muted-foreground">
                  Abhyanga massage for Arjun Mehta
                </p>
                <p className="text-xs text-muted-foreground">4 hours ago</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 bg-muted/20 rounded-lg">
              <div className="w-2 h-2 bg-secondary rounded-full mt-2" />
              <div>
                <p className="text-sm font-medium">New Patient Registered</p>
                <p className="text-xs text-muted-foreground">
                  Rohit Patel - Initial consultation scheduled
                </p>
                <p className="text-xs text-muted-foreground">Yesterday</p>
              </div>
            </div>

            <Button variant="ghost" className="w-full">
              View Activity Log
            </Button>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>
              Common practitioner tasks
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button variant="outline" className="w-full justify-start">
              <Calendar className="h-4 w-4 mr-2" />
              Manage Schedule
            </Button>
            
            <Button variant="outline" className="w-full justify-start">
              <Users className="h-4 w-4 mr-2" />
              Add New Patient
            </Button>
            
            <Button variant="outline" className="w-full justify-start">
              <FileText className="h-4 w-4 mr-2" />
              Create Treatment Plan
            </Button>
            
            <Button variant="wellness" className="w-full justify-start">
              <TrendingUp className="h-4 w-4 mr-2" />
              Review Progress Reports
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}