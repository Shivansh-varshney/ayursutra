import { useState } from "react"
import { Bell, BellRing, Check, Clock, Calendar, MessageSquare, AlertTriangle, Settings } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
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
    icon: CheckCircle,
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

function CheckCircle({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  )
}

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
      case "high": return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
      case "medium": return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
      case "low": return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
      default: return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200"
    }
  }

  const markAsRead = (id: string) => {
    // Handle mark as read functionality
    console.log("Marking notification as read:", id)
  }

  const markAllAsRead = () => {
    // Handle mark all as read functionality
    console.log("Marking all notifications as read")
  }

  const unreadCount = notifications.filter(n => !n.read).length

  return (
    <div className="p-6 max-w-6xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground flex items-center gap-2">
            <Bell className="h-8 w-8" />
            Notifications
            {unreadCount > 0 && (
              <Badge className="bg-red-500 text-white">
                {unreadCount}
              </Badge>
            )}
          </h1>
          <p className="text-muted-foreground">
            Stay updated with your treatment progress and important reminders
          </p>
        </div>
        
        <div className="flex gap-2">
          <Button variant="outline" onClick={markAllAsRead}>
            <Check className="h-4 w-4 mr-2" />
            Mark All Read
          </Button>
          <Button className="bg-gradient-primary hover:opacity-90">
            <Settings className="h-4 w-4 mr-2" />
            Settings
          </Button>
        </div>
      </div>

      <Tabs defaultValue="all" className="space-y-6">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="all" onClick={() => setFilter("all")}>
            All ({notifications.length})
          </TabsTrigger>
          <TabsTrigger value="unread" onClick={() => setFilter("unread")}>
            Unread ({unreadCount})
          </TabsTrigger>
          <TabsTrigger value="read" onClick={() => setFilter("read")}>
            Read ({notifications.length - unreadCount})
          </TabsTrigger>
          <TabsTrigger value="high" onClick={() => setFilter("high")}>
            High Priority
          </TabsTrigger>
          <TabsTrigger value="settings">
            Settings
          </TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4">
          {filteredNotifications.length === 0 ? (
            <Card>
              <CardContent className="p-8 text-center">
                <Bell className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                <h3 className="text-lg font-semibold mb-2">No notifications found</h3>
                <p className="text-muted-foreground">
                  You're all caught up! Check back later for updates.
                </p>
              </CardContent>
            </Card>
          ) : (
            filteredNotifications.map((notification) => {
              const IconComponent = notification.icon
              return (
                <Card 
                  key={notification.id} 
                  className={`hover:shadow-lg transition-shadow duration-200 ${
                    !notification.read ? 'ring-2 ring-primary/20 bg-primary/5' : ''
                  }`}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className={`p-2 rounded-full ${
                        !notification.read ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
                      }`}>
                        <IconComponent className="h-5 w-5" />
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <h3 className={`font-semibold ${
                            !notification.read ? 'text-foreground' : 'text-muted-foreground'
                          }`}>
                            {notification.title}
                          </h3>
                          <div className="flex items-center gap-2">
                            <Badge className={getPriorityColor(notification.priority)}>
                              {notification.priority}
                            </Badge>
                            {!notification.read && (
                              <div className="w-3 h-3 bg-primary rounded-full" />
                            )}
                          </div>
                        </div>
                        
                        <p className={`text-sm mb-3 ${
                          !notification.read ? 'text-foreground' : 'text-muted-foreground'
                        }`}>
                          {notification.message}
                        </p>
                        
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-muted-foreground">
                            {notification.time}
                          </span>
                          
                          <div className="flex gap-2">
                            {!notification.read && (
                              <Button 
                                variant="ghost" 
                                size="sm"
                                onClick={() => markAsRead(notification.id)}
                              >
                                Mark as Read
                              </Button>
                            )}
                            {notification.actionable && (
                              <Button size="sm" className="bg-gradient-primary">
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
            })
          )}
        </TabsContent>

        <TabsContent value="unread" className="space-y-4">
          {filteredNotifications.map((notification) => {
            const IconComponent = notification.icon
            return (
              <Card 
                key={notification.id} 
                className="hover:shadow-lg transition-shadow duration-200 ring-2 ring-primary/20 bg-primary/5"
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-full bg-primary text-primary-foreground">
                      <IconComponent className="h-5 w-5" />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="font-semibold text-foreground">
                          {notification.title}
                        </h3>
                        <div className="flex items-center gap-2">
                          <Badge className={getPriorityColor(notification.priority)}>
                            {notification.priority}
                          </Badge>
                          <div className="w-3 h-3 bg-primary rounded-full" />
                        </div>
                      </div>
                      
                      <p className="text-sm mb-3 text-foreground">
                        {notification.message}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-muted-foreground">
                          {notification.time}
                        </span>
                        
                        <div className="flex gap-2">
                          <Button 
                            variant="ghost" 
                            size="sm"
                            onClick={() => markAsRead(notification.id)}
                          >
                            Mark as Read
                          </Button>
                          {notification.actionable && (
                            <Button size="sm" className="bg-gradient-primary">
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

        <TabsContent value="read" className="space-y-4">
          {filteredNotifications.map((notification) => {
            const IconComponent = notification.icon
            return (
              <Card key={notification.id} className="hover:shadow-lg transition-shadow duration-200">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-full bg-muted text-muted-foreground">
                      <IconComponent className="h-5 w-5" />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="font-semibold text-muted-foreground">
                          {notification.title}
                        </h3>
                        <Badge className={getPriorityColor(notification.priority)}>
                          {notification.priority}
                        </Badge>
                      </div>
                      
                      <p className="text-sm mb-3 text-muted-foreground">
                        {notification.message}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-muted-foreground">
                          {notification.time}
                        </span>
                        
                        {notification.actionable && (
                          <Button variant="outline" size="sm">
                            View Details
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </TabsContent>

        <TabsContent value="high" className="space-y-4">
          {filteredNotifications.map((notification) => {
            const IconComponent = notification.icon
            return (
              <Card 
                key={notification.id} 
                className={`hover:shadow-lg transition-shadow duration-200 ${
                  !notification.read ? 'ring-2 ring-red-500/20 bg-red-50 dark:bg-red-900/10' : ''
                }`}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-full bg-red-100 text-red-600 dark:bg-red-900 dark:text-red-200">
                      <IconComponent className="h-5 w-5" />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="font-semibold text-foreground flex items-center gap-2">
                          <AlertTriangle className="h-4 w-4 text-red-500" />
                          {notification.title}
                        </h3>
                        <Badge className="bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200">
                          HIGH PRIORITY
                        </Badge>
                      </div>
                      
                      <p className="text-sm mb-3 text-foreground">
                        {notification.message}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-muted-foreground">
                          {notification.time}
                        </span>
                        
                        <div className="flex gap-2">
                          {!notification.read && (
                            <Button 
                              variant="ghost" 
                              size="sm"
                              onClick={() => markAsRead(notification.id)}
                            >
                              Mark as Read
                            </Button>
                          )}
                          <Button size="sm" className="bg-red-600 hover:bg-red-700 text-white">
                            Take Action
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </TabsContent>

        <TabsContent value="settings">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Notification Preferences</CardTitle>
                <CardDescription>
                  Choose what types of notifications you want to receive
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {Object.entries({
                  sessionReminders: "Session Reminders",
                  progressUpdates: "Progress Updates", 
                  dietaryRecommendations: "Dietary Recommendations",
                  medicationReminders: "Medication Reminders"
                }).map(([key, label]) => (
                  <div key={key} className="flex items-center justify-between">
                    <Label htmlFor={key} className="text-sm font-medium">
                      {label}
                    </Label>
                    <Switch
                      id={key}
                      checked={settings[key as keyof typeof settings] as boolean}
                      onCheckedChange={(checked) => 
                        setSettings(prev => ({ ...prev, [key]: checked }))
                      }
                    />
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Delivery Methods</CardTitle>
                <CardDescription>
                  How would you like to receive notifications?
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {Object.entries({
                  pushNotifications: "Push Notifications",
                  emailNotifications: "Email Notifications",
                  smsNotifications: "SMS Notifications"
                }).map(([key, label]) => (
                  <div key={key} className="flex items-center justify-between">
                    <Label htmlFor={key} className="text-sm font-medium">
                      {label}
                    </Label>
                    <Switch
                      id={key}
                      checked={settings[key as keyof typeof settings] as boolean}
                      onCheckedChange={(checked) => 
                        setSettings(prev => ({ ...prev, [key]: checked }))
                      }
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