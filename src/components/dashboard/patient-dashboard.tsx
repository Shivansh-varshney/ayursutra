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
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-600 text-white rounded-2xl p-8 shadow-lg">
        <h1 className="text-3xl font-bold mb-2">Welcome back, Priya!</h1>
        <p className="opacity-90 text-base">
          Your wellness journey continues — here’s your latest progress overview.
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="rounded-2xl shadow-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Current Program</p>
                <p className="text-xl font-semibold text-gray-800 dark:text-gray-200">Panchakarma</p>
              </div>
              <Activity className="h-8 w-8 text-sky-500" />
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-2xl shadow-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Progress</p>
                <p className="text-xl font-semibold text-gray-800 dark:text-gray-200">68%</p>
              </div>
              <TrendingUp className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-2xl shadow-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Next Session</p>
                <p className="text-xl font-semibold text-gray-800 dark:text-gray-200">Tomorrow</p>
              </div>
              <Calendar className="h-8 w-8 text-indigo-500" />
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-2xl shadow-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Wellness Score</p>
                <p className="text-xl font-semibold text-gray-800 dark:text-gray-200">8.2/10</p>
              </div>
              <Heart className="h-8 w-8 text-teal-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Two-column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Treatment Progress */}
        <Card className="rounded-2xl shadow-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-gray-800 dark:text-gray-200">
              <Target className="h-5 w-5 text-blue-600" />
              Treatment Progress
            </CardTitle>
            <CardDescription className="text-gray-500 dark:text-gray-400">
              Panchakarma Detoxification Program
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-5">
            <div>
              <div className="flex justify-between text-sm mb-2 text-gray-600 dark:text-gray-400">
                <span>Overall Progress</span>
                <span>68%</span>
              </div>
              <Progress value={68} className="h-2" />
            </div>

            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-700 dark:text-gray-300">Phase 1: Preparation</span>
                <Badge variant="secondary">Completed</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-700 dark:text-gray-300">Phase 2: Detoxification</span>
                <Badge className="bg-blue-600 text-white">In Progress</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-700 dark:text-gray-300">Phase 3: Rejuvenation</span>
                <Badge variant="outline">Upcoming</Badge>
              </div>
            </div>

            <Button variant="outline" className="w-full rounded-xl border-blue-300 dark:border-gray-600 hover:bg-blue-50 dark:hover:bg-gray-800">
              View Detailed Progress
            </Button>
          </CardContent>
        </Card>

        {/* Upcoming Sessions */}
        <Card className="rounded-2xl shadow-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-gray-800 dark:text-gray-200">
              <Calendar className="h-5 w-5 text-sky-500" />
              Upcoming Sessions
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              { name: "Abhyanga Massage", time: "Tomorrow, 10:00 AM", status: "Confirmed" },
              { name: "Consultation", time: "Dec 30, 2:00 PM", status: "Scheduled" },
              { name: "Shirodhara Therapy", time: "Jan 2, 11:00 AM", status: "Scheduled" }
            ].map((session, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between p-4 border rounded-xl bg-blue-50 dark:bg-gray-800 border-blue-100 dark:border-gray-700"
              >
                <div>
                  <p className="font-medium text-gray-800 dark:text-gray-200">{session.name}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center">
                    <Clock className="h-3 w-3 mr-1" /> {session.time}
                  </p>
                </div>
                <Badge variant={session.status === "Confirmed" ? "default" : "outline"}>{session.status}</Badge>
              </div>
            ))}

            <Button className="w-full rounded-xl bg-gradient-to-r from-sky-400 to-blue-600 text-white">
              Schedule New Session
            </Button>
          </CardContent>
        </Card>

        {/* Notifications */}
        <Card className="rounded-2xl shadow-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-gray-800 dark:text-gray-200">
              <Bell className="h-5 w-5 text-blue-600" />
              Recent Updates
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-start gap-3 p-4 bg-blue-50 dark:bg-gray-800 rounded-xl">
              <div className="w-2 h-2 bg-sky-500 rounded-full mt-2" />
              <div>
                <p className="text-sm font-medium text-gray-800 dark:text-gray-200">Session Reminder</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Your abhyanga massage is scheduled for tomorrow at 10:00 AM
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-sky-50 dark:bg-gray-800 rounded-xl">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2" />
              <div>
                <p className="text-sm font-medium text-gray-800 dark:text-gray-200">Progress Update</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Great job! You’ve completed 68% of your treatment program
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-indigo-50 dark:bg-gray-800 rounded-xl">
              <div className="w-2 h-2 bg-teal-500 rounded-full mt-2" />
              <div>
                <p className="text-sm font-medium text-gray-800 dark:text-gray-200">Dietary Recommendation</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  New meal plan available based on your constitution
                </p>
              </div>
            </div>

            <Button variant="ghost" className="w-full text-center rounded-xl text-blue-600 dark:text-sky-400 hover:bg-blue-50 dark:hover:bg-gray-800">
              View All Notifications
            </Button>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card className="rounded-2xl shadow-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
          <CardHeader>
            <CardTitle className="text-gray-800 dark:text-gray-200">Quick Actions</CardTitle>
            <CardDescription className="text-gray-500 dark:text-gray-400">
              Common tasks and features
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button variant="outline" className="w-full justify-start rounded-xl border-blue-300 dark:border-gray-600 hover:bg-blue-50 dark:hover:bg-gray-800">
              <Calendar className="h-4 w-4 mr-2 text-sky-500" /> Schedule Session
            </Button>

            <Button variant="outline" className="w-full justify-start rounded-xl border-blue-300 dark:border-gray-600 hover:bg-blue-50 dark:hover:bg-gray-800">
              <TrendingUp className="h-4 w-4 mr-2 text-blue-600" /> Log Daily Progress
            </Button>

            <Button variant="outline" className="w-full justify-start rounded-xl border-blue-300 dark:border-gray-600 hover:bg-blue-50 dark:hover:bg-gray-800">
              <Bell className="h-4 w-4 mr-2 text-indigo-500" /> Set Medication Reminder
            </Button>

            <Button className="w-full justify-start rounded-xl bg-gradient-to-r from-sky-400 to-blue-600 text-white">
              <Heart className="h-4 w-4 mr-2" /> Submit Feedback
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
