import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { 
  Calendar, 
  TrendingUp, 
  Bell, 
  Clock,
  Activity,
  Target,
  Heart
} from "lucide-react"

export function PatientDashboard() {
  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-hero text-primary-foreground rounded-lg p-6">
        <h1 className="text-2xl font-bold mb-2">Welcome back, Priya!</h1>
        <p className="opacity-90">Your wellness journey continues. Here's your progress overview.</p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Current Program</p>
                <p className="text-lg font-bold">Panchakarma</p>
              </div>
              <Activity className="h-8 w-8 text-primary" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Progress</p>
                <p className="text-lg font-bold">68%</p>
              </div>
              <TrendingUp className="h-8 w-8 text-accent" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Next Session</p>
                <p className="text-lg font-bold">Tomorrow</p>
              </div>
              <Calendar className="h-8 w-8 text-secondary" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Wellness Score</p>
                <p className="text-lg font-bold">8.2/10</p>
              </div>
              <Heart className="h-8 w-8 text-red-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Current Treatment Progress */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5" />
              Treatment Progress
            </CardTitle>
            <CardDescription>
              Panchakarma Detoxification Program
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span>Overall Progress</span>
                <span>68%</span>
              </div>
              <Progress value={68} className="h-2" />
            </div>
            
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm">Phase 1: Preparation</span>
                <Badge variant="secondary">Completed</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Phase 2: Detoxification</span>
                <Badge variant="default">In Progress</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Phase 3: Rejuvenation</span>
                <Badge variant="outline">Upcoming</Badge>
              </div>
            </div>

            <Button variant="outline" className="w-full">
              View Detailed Progress
            </Button>
          </CardContent>
        </Card>

        {/* Upcoming Sessions */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              Upcoming Sessions
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 border rounded-lg">
                <div>
                  <p className="font-medium">Abhyanga Massage</p>
                  <p className="text-sm text-muted-foreground">
                    <Clock className="h-3 w-3 inline mr-1" />
                    Tomorrow, 10:00 AM
                  </p>
                </div>
                <Badge>Confirmed</Badge>
              </div>

              <div className="flex items-center justify-between p-3 border rounded-lg">
                <div>
                  <p className="font-medium">Consultation</p>
                  <p className="text-sm text-muted-foreground">
                    <Clock className="h-3 w-3 inline mr-1" />
                    Dec 30, 2:00 PM
                  </p>
                </div>
                <Badge variant="outline">Scheduled</Badge>
              </div>

              <div className="flex items-center justify-between p-3 border rounded-lg">
                <div>
                  <p className="font-medium">Shirodhara Therapy</p>
                  <p className="text-sm text-muted-foreground">
                    <Clock className="h-3 w-3 inline mr-1" />
                    Jan 2, 11:00 AM
                  </p>
                </div>
                <Badge variant="outline">Scheduled</Badge>
              </div>
            </div>

            <Button variant="hero" className="w-full">
              Schedule New Session
            </Button>
          </CardContent>
        </Card>

        {/* Recent Notifications */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bell className="h-5 w-5" />
              Recent Updates
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-start gap-3 p-3 bg-accent/20 rounded-lg">
              <div className="w-2 h-2 bg-primary rounded-full mt-2" />
              <div>
                <p className="text-sm font-medium">Session Reminder</p>
                <p className="text-xs text-muted-foreground">
                  Your abhyanga massage is scheduled for tomorrow at 10:00 AM
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 bg-muted/20 rounded-lg">
              <div className="w-2 h-2 bg-accent rounded-full mt-2" />
              <div>
                <p className="text-sm font-medium">Progress Update</p>
                <p className="text-xs text-muted-foreground">
                  Great job! You've completed 68% of your treatment program
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 bg-muted/20 rounded-lg">
              <div className="w-2 h-2 bg-secondary rounded-full mt-2" />
              <div>
                <p className="text-sm font-medium">Dietary Recommendation</p>
                <p className="text-xs text-muted-foreground">
                  New meal plan available based on your current constitution
                </p>
              </div>
            </div>

            <Button variant="ghost" className="w-full text-center">
              View All Notifications
            </Button>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>
              Common tasks and features
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button variant="outline" className="w-full justify-start">
              <Calendar className="h-4 w-4 mr-2" />
              Schedule Session
            </Button>
            
            <Button variant="outline" className="w-full justify-start">
              <TrendingUp className="h-4 w-4 mr-2" />
              Log Daily Progress
            </Button>
            
            <Button variant="outline" className="w-full justify-start">
              <Bell className="h-4 w-4 mr-2" />
              Set Medication Reminder
            </Button>
            
            <Button variant="wellness" className="w-full justify-start">
              <Heart className="h-4 w-4 mr-2" />
              Submit Feedback
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}