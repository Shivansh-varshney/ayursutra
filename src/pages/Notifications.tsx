import { useState } from "react"
import { Bell, Check, Clock, Calendar, MessageSquare, AlertTriangle, Settings } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { useRole } from "@/components/providers/role-provider"

const notifications = [
  {
    id: "1",
    type: "session_reminder",
    title: "Session Reminder",
    message: "Your Abhyanga massage is scheduled for tomorrow at 10:00 AM. Please arrive 15 minutes early.",
    time: "2 hours ago",
    read: false,
    priority: "high",
    icon: Calendar,
    actionable: true
  },
  {
    id: "2",
    type: "progress_update",
    title: "Progress Milestone Reached",
    message: "Congratulations! You've completed 68% of your Panchakarma treatment program.",
    time: "1 day ago",
    read: false,
    priority: "medium",
    icon: MessageSquare,
    actionable: false
  },
  {
    id: "3",
    type: "dietary_recommendation",
    title: "New Dietary Guidelines",
    message: "Your practitioner has updated your meal plan based on your current constitution assessment.",
    time: "2 days ago",
    read: true,
    priority: "medium",
    icon: MessageSquare,
    actionable: true
  },
  {
    id: "4",
    type: "medication_reminder",
    title: "Medication Reminder",
    message: "Time to take your evening herbal supplements. Remember to take them with warm water.",
    time: "3 days ago",
    read: true,
    priority: "high",
    icon: Clock,
    actionable: false
  },
  {
    id: "5",
    type: "appointment_cancelled",
    title: "Appointment Rescheduled",
    message: "Your Shirodhara session has been moved from Jan 1st to Jan 2nd at 11:00 AM due to practitioner availability.",
    time: "1 week ago",
    read: true,
    priority: "high",
    icon: AlertTriangle,
    actionable: true
  }
]

export function Notifications() {
  const { currentRole } = useRole()
  const [filter, setFilter] = useState("all")
  const [settings, setSettings] = useState({
    sessionReminders: true,
    progressUpdates: true,
    dietaryRecommendations: true,
    medicationReminders: true,
    emailNotifications: true,
    smsNotifications: false,
    pushNotifications: true
  })

  const filteredNotifications = notifications.filter(notification => {
    if (filter === "unread") return !notification.read
    if (filter === "read") return notification.read
    if (filter === "high") return notification.priority === "high"
    return true
  })

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high": return "bg-red-100 text-red-600 dark:bg-red-900 dark:text-red-200"
      case "medium": return "bg-yellow-100 text-yellow-600 dark:bg-yellow-900 dark:text-yellow-200"
      case "low": return "bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-200"
      default: return "bg-gray-100 text-gray-600 dark:bg-gray-900 dark:text-gray-200"
    }
  }

  const markAsRead = (id: string) => console.log("Marking as read:", id)
  const markAllAsRead = () => console.log("Marking all as read")

  const unreadCount = notifications.filter(n => !n.read).length

  return (
    <div className="p-6 lg:p-10 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200 flex items-center gap-2">
            <Bell className="h-8 w-8 text-blue-600" /> Notifications
            {unreadCount > 0 && <Badge className="bg-red-600 text-white">{unreadCount}</Badge>}
          </h1>
          <p className="text-gray-500 dark:text-gray-400">Stay updated with your treatment progress and reminders.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="rounded-xl" onClick={markAllAsRead}>
            <Check className="h-4 w-4 mr-2" /> Mark All Read
          </Button>
          <Button className="rounded-xl bg-gradient-to-r from-sky-400 to-blue-600 text-white">
            <Settings className="h-4 w-4 mr-2" /> Settings
          </Button>
        </div>
      </div>

      <Tabs defaultValue="all" className="space-y-6">
        <TabsList className="grid grid-cols-5">
          <TabsTrigger value="all" onClick={() => setFilter("all")}>All ({notifications.length})</TabsTrigger>
          <TabsTrigger value="unread" onClick={() => setFilter("unread")}>Unread ({unreadCount})</TabsTrigger>
          <TabsTrigger value="read" onClick={() => setFilter("read")}>Read ({notifications.length - unreadCount})</TabsTrigger>
          <TabsTrigger value="high" onClick={() => setFilter("high")}>High Priority</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>

        {["all", "unread", "read", "high"].map(tab => (
          <TabsContent key={tab} value={tab} className="space-y-4">
            {filteredNotifications.length === 0 ? (
              <Card className="rounded-2xl shadow-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
                <CardContent className="p-8 text-center">
                  <Bell className="h-12 w-12 mx-auto text-gray-400 dark:text-gray-500 mb-4" />
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">No notifications</h3>
                  <p className="text-gray-500 dark:text-gray-400">You're all caught up!</p>
                </CardContent>
              </Card>
            ) : filteredNotifications.map(notification => {
              const Icon = notification.icon
              return (
                <Card
                  key={notification.id}
                  className={`rounded-2xl shadow-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 hover:shadow-lg transition-shadow duration-200 ${
                    !notification.read ? 'ring-2 ring-blue-300' : ''
                  }`}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className={`p-2 rounded-full ${
                        !notification.read ? 'bg-blue-600 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300'
                      }`}>
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className={`font-semibold ${!notification.read ? 'text-gray-800 dark:text-gray-200' : 'text-gray-500 dark:text-gray-400'}`}>
                            {notification.title}
                          </h3>
                          <div className="flex items-center gap-2">
                            <Badge className={getPriorityColor(notification.priority)}>{notification.priority.toUpperCase()}</Badge>
                          </div>
                        </div>
                        <p className={`text-sm mb-3 ${!notification.read ? 'text-gray-700 dark:text-gray-300' : 'text-gray-500 dark:text-gray-400'}`}>
                          {notification.message}
                        </p>
                        <div className="flex justify-between items-center">
                          <span className="text-xs text-gray-500 dark:text-gray-400">{notification.time}</span>
                          <div className="flex gap-2">
                            {!notification.read && (
                              <Button variant="outline" size="sm" onClick={() => markAsRead(notification.id)}>
                                Mark as Read
                              </Button>
                            )}
                            {notification.actionable && (
                              <Button size="sm" className="bg-gradient-to-r from-sky-400 to-blue-600 text-white rounded-xl">
                                View Details
                              </Button>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </TabsContent>
        ))}

        {/* Settings Tab */}
        <TabsContent value="settings">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="rounded-2xl shadow-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
              <CardHeader>
                <CardTitle className="text-gray-800 dark:text-gray-200">Notification Preferences</CardTitle>
                <CardDescription className="text-gray-500 dark:text-gray-400">Choose what types of notifications you want to receive</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {Object.entries({
                  sessionReminders: "Session Reminders",
                  progressUpdates: "Progress Updates",
                  dietaryRecommendations: "Dietary Recommendations",
                  medicationReminders: "Medication Reminders"
                }).map(([key, label]) => (
                  <div key={key} className="flex items-center justify-between">
                    <Label htmlFor={key} className="text-sm text-gray-700 dark:text-gray-300">{label}</Label>
                    <Switch
                      id={key}
                      checked={settings[key as keyof typeof settings] as boolean}
                      onCheckedChange={checked => setSettings(prev => ({ ...prev, [key]: checked }))}
                    />
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="rounded-2xl shadow-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
              <CardHeader>
                <CardTitle className="text-gray-800 dark:text-gray-200">Delivery Methods</CardTitle>
                <CardDescription className="text-gray-500 dark:text-gray-400">How would you like to receive notifications?</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {Object.entries({
                  pushNotifications: "Push Notifications",
                  emailNotifications: "Email Notifications",
                  smsNotifications: "SMS Notifications"
                }).map(([key, label]) => (
                  <div key={key} className="flex items-center justify-between">
                    <Label htmlFor={key} className="text-sm text-gray-700 dark:text-gray-300">{label}</Label>
                    <Switch
                      id={key}
                      checked={settings[key as keyof typeof settings] as boolean}
                      onCheckedChange={checked => setSettings(prev => ({ ...prev, [key]: checked }))}
                    />
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default Notifications
