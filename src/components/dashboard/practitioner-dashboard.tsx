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
      <div className="bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-600 text-white rounded-2xl p-8 shadow-lg">
        <h1 className="text-2xl font-bold mb-2">Welcome back, Dr. Kumar!</h1>
        <p className="opacity-90">Manage your patients and treatments with comprehensive insights.</p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="bg-gradient-to-br from-sky-50 to-blue-100 dark:from-slate-900 dark:to-slate-800">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Active Patients</p>
                <p className="text-lg font-bold text-blue-600 dark:text-sky-400">24</p>
              </div>
              <Users className="h-8 w-8 text-blue-500" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-sky-50 to-blue-100 dark:from-slate-900 dark:to-slate-800">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Today's Sessions</p>
                <p className="text-lg font-bold text-blue-600 dark:text-sky-400">6</p>
              </div>
              <Calendar className="h-8 w-8 text-blue-500" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-sky-50 to-blue-100 dark:from-slate-900 dark:to-slate-800">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Pending Reviews</p>
                <p className="text-lg font-bold text-blue-600 dark:text-sky-400">3</p>
              </div>
              <FileText className="h-8 w-8 text-blue-500" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-sky-50 to-blue-100 dark:from-slate-900 dark:to-slate-800">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Success Rate</p>
                <p className="text-lg font-bold text-blue-600 dark:text-sky-400">94%</p>
              </div>
              <TrendingUp className="h-8 w-8 text-green-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Today's Schedule */}
        <Card className="border-blue-200 dark:border-slate-700">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-blue-600 dark:text-sky-400">
              <Calendar className="h-5 w-5" />
              Today's Schedule
            </CardTitle>
            <CardDescription>
              December 29, 2024 - 6 sessions planned
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 border border-blue-200 dark:border-slate-700 rounded-lg">
                <div className="flex items-center gap-3">
                  <Avatar className="h-8 w-8">
                    <AvatarFallback className="bg-blue-500 text-white text-xs">
                      PS
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">Priya Sharma</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      <Clock className="h-3 w-3 inline mr-1" />
                      10:00 AM - Abhyanga
                    </p>
                  </div>
                </div>
                <Badge className="bg-blue-500 text-white">In Progress</Badge>
              </div>

              <div className="flex items-center justify-between p-3 border border-blue-200 dark:border-slate-700 rounded-lg">
                <div className="flex items-center gap-3">
                  <Avatar className="h-8 w-8">
                    <AvatarFallback className="bg-sky-500 text-white text-xs">
                      AM
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">Arjun Mehta</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      <Clock className="h-3 w-3 inline mr-1" />
                      11:30 AM - Consultation
                    </p>
                  </div>
                </div>
                <Badge variant="outline" className="border-blue-400 text-blue-500">Scheduled</Badge>
              </div>

              <div className="flex items-center justify-between p-3 border border-blue-200 dark:border-slate-700 rounded-lg">
                <div className="flex items-center gap-3">
                  <Avatar className="h-8 w-8">
                    <AvatarFallback className="bg-indigo-500 text-white text-xs">
                      SK
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">Sunita Kapoor</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      <Clock className="h-3 w-3 inline mr-1" />
                      2:00 PM - Shirodhara
                    </p>
                  </div>
                </div>
                <Badge variant="outline" className="border-blue-400 text-blue-500">Scheduled</Badge>
              </div>
            </div>

            <Button className="w-full bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-600 text-white hover:opacity-90 shadow-md">
              View Full Schedule
            </Button>
          </CardContent>
        </Card>

        {/* Patient Progress Overview */}
        <Card className="border-blue-200 dark:border-slate-700">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-blue-600 dark:text-sky-400">
              <TrendingUp className="h-5 w-5" />
              Patient Progress
            </CardTitle>
            <CardDescription>
              Recent improvements and milestones
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-sky-100 dark:bg-slate-800 rounded-lg">
                <div className="flex items-center gap-3">
                  <UserCheck className="h-4 w-4 text-blue-500" />
                  <div>
                    <p className="font-medium text-sm">Priya Sharma</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">68% treatment completion</p>
                  </div>
                </div>
                <Badge className="bg-green-500 text-white">Excellent</Badge>
              </div>

              <div className="flex items-center justify-between p-3 bg-sky-50 dark:bg-slate-800 rounded-lg">
                <div className="flex items-center gap-3">
                  <UserCheck className="h-4 w-4 text-blue-400" />
                  <div>
                    <p className="font-medium text-sm">Arjun Mehta</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">45% treatment completion</p>
                  </div>
                </div>
                <Badge className="bg-blue-500 text-white">Good</Badge>
              </div>

              <div className="flex items-center justify-between p-3 bg-sky-50 dark:bg-slate-800 rounded-lg">
                <div className="flex items-center gap-3">
                  <AlertCircle className="h-4 w-4 text-orange-500" />
                  <div>
                    <p className="font-medium text-sm">Sunita Kapoor</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Requires attention</p>
                  </div>
                </div>
                <Badge className="bg-red-500 text-white">Review</Badge>
              </div>
            </div>

            <Button variant="outline" className="w-full border-blue-400 text-blue-500 hover:bg-sky-100">
              View All Patients
            </Button>
          </CardContent>
        </Card>

        {/* Recent Activities */}
        <Card className="border-blue-200 dark:border-slate-700">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-blue-600 dark:text-sky-400">
              <FileText className="h-5 w-5" />
              Recent Activities
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-start gap-3 p-3 bg-sky-100 dark:bg-slate-800 rounded-lg">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2" />
              <div>
                <p className="text-sm font-medium">Treatment Plan Updated</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Modified Priya Sharma's panchakarma schedule
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400">2 hours ago</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 bg-sky-50 dark:bg-slate-800 rounded-lg">
              <div className="w-2 h-2 bg-blue-400 rounded-full mt-2" />
              <div>
                <p className="text-sm font-medium">Session Completed</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Abhyanga massage for Arjun Mehta
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400">4 hours ago</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 bg-sky-50 dark:bg-slate-800 rounded-lg">
              <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2" />
              <div>
                <p className="text-sm font-medium">New Patient Registered</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Rohit Patel - Initial consultation scheduled
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400">Yesterday</p>
              </div>
            </div>

            <Button variant="ghost" className="w-full text-blue-500 hover:bg-sky-100">
              View Activity Log
            </Button>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card className="border-blue-200 dark:border-slate-700">
          <CardHeader>
            <CardTitle className="text-blue-600 dark:text-sky-400">Quick Actions</CardTitle>
            <CardDescription>
              Common practitioner tasks
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button variant="outline" className="w-full justify-start border-blue-400 text-blue-500 hover:bg-sky-100">
              <Calendar className="h-4 w-4 mr-2" />
              Manage Schedule
            </Button>
            
            <Button variant="outline" className="w-full justify-start border-blue-400 text-blue-500 hover:bg-sky-100">
              <Users className="h-4 w-4 mr-2" />
              Add New Patient
            </Button>
            
            <Button variant="outline" className="w-full justify-start border-blue-400 text-blue-500 hover:bg-sky-100">
              <FileText className="h-4 w-4 mr-2" />
              Create Treatment Plan
            </Button>
            
            <Button className="w-full justify-start bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-600 text-white hover:opacity-90 shadow-md">
              <TrendingUp className="h-4 w-4 mr-2" />
              Review Progress Reports
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
