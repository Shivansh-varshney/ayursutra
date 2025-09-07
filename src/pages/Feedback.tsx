import { useState } from "react"
import { MessageSquare, Star, Send, Filter, Calendar, TrendingUp, BarChart3 } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useRole } from "@/components/providers/role-provider"

const feedbackData = [
  {
    id: "1",
    sessionId: "sess-1",
    sessionType: "Abhyanga Massage",
    date: "2024-12-28",
    rating: 9,
    comment: "Excellent session! I felt completely relaxed afterwards. The therapist was very skilled and the oil temperature was perfect. Definitely helped with my stress levels.",
    practitioner: "Dr. Rajesh Kumar",
    patient: "Priya Sharma",
    categories: {
      effectiveness: 9,
      comfort: 8,
      professionalism: 10,
      environment: 9
    }
  },
  {
    id: "2", 
    sessionId: "sess-2",
    sessionType: "Consultation",
    date: "2024-12-26",
    rating: 8,
    comment: "Very thorough consultation. Dr. Kumar explained my constitution type clearly and provided detailed dietary recommendations. Looking forward to starting the treatment plan.",
    practitioner: "Dr. Rajesh Kumar", 
    patient: "Arjun Mehta",
    categories: {
      effectiveness: 8,
      comfort: 8,
      professionalism: 9,
      environment: 7
    }
  },
  {
    id: "3",
    sessionId: "sess-3", 
    sessionType: "Shirodhara",
    date: "2024-12-24",
    rating: 10,
    comment: "Absolutely amazing experience! The continuous oil flow was so soothing and I felt deeply relaxed. Best sleep I've had in months after this session.",
    practitioner: "Dr. Rajesh Kumar",
    patient: "Sunita Kapoor", 
    categories: {
      effectiveness: 10,
      comfort: 10,
      professionalism: 9,
      environment: 10
    }
  }
]

const StarRating = ({ rating, editable = false, onRatingChange }: { 
  rating: number, 
  editable?: boolean, 
  onRatingChange?: (rating: number) => void 
}) => {
  const [hoverRating, setHoverRating] = useState(0)
  
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((star) => (
        <Star
          key={star}
          className={`h-5 w-5 cursor-pointer transition-colors ${
            star <= (editable ? hoverRating || rating : rating)
              ? "fill-yellow-400 text-yellow-400"
              : "text-muted-foreground"
          }`}
          onClick={() => editable && onRatingChange?.(star)}
          onMouseEnter={() => editable && setHoverRating(star)}
          onMouseLeave={() => editable && setHoverRating(0)}
        />
      ))}
      <span className="ml-2 text-sm text-muted-foreground">
        {editable ? hoverRating || rating : rating}/10
      </span>
    </div>
  )
}

export function Feedback() {
  const { currentRole } = useRole()
  const [newFeedback, setNewFeedback] = useState({
    sessionType: "",
    rating: 0,
    comment: "",
    categories: {
      effectiveness: 0,
      comfort: 0,
      professionalism: 0,
      environment: 0
    }
  })
  const [filter, setFilter] = useState("all")

  const filteredFeedback = feedbackData.filter(feedback => {
    if (filter === "high") return feedback.rating >= 8
    if (filter === "medium") return feedback.rating >= 6 && feedback.rating < 8
    if (filter === "low") return feedback.rating < 6
    return true
  })

  const averageRating = feedbackData.reduce((acc, f) => acc + f.rating, 0) / feedbackData.length

  const submitFeedback = () => {
    console.log("Submitting feedback:", newFeedback)
    // Reset form
    setNewFeedback({
      sessionType: "",
      rating: 0,
      comment: "",
      categories: {
        effectiveness: 0,
        comfort: 0,
        professionalism: 0,
        environment: 0
      }
    })
  }

  const FeedbackForm = () => (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <MessageSquare className="h-5 w-5" />
          Submit New Feedback
        </CardTitle>
        <CardDescription>
          Share your experience from your recent session
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <label className="text-sm font-medium mb-2 block">Session Type</label>
          <Select value={newFeedback.sessionType} onValueChange={(value) => 
            setNewFeedback(prev => ({ ...prev, sessionType: value }))
          }>
            <SelectTrigger>
              <SelectValue placeholder="Select session type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="abhyanga">Abhyanga Massage</SelectItem>
              <SelectItem value="shirodhara">Shirodhara</SelectItem>
              <SelectItem value="consultation">Consultation</SelectItem>
              <SelectItem value="panchakarma">Panchakarma Treatment</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="text-sm font-medium mb-2 block">Overall Rating</label>
          <StarRating 
            rating={newFeedback.rating} 
            editable 
            onRatingChange={(rating) => 
              setNewFeedback(prev => ({ ...prev, rating }))
            } 
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          {Object.entries({
            effectiveness: "Treatment Effectiveness",
            comfort: "Comfort Level", 
            professionalism: "Staff Professionalism",
            environment: "Environment & Ambiance"
          }).map(([key, label]) => (
            <div key={key}>
              <label className="text-sm font-medium mb-2 block">{label}</label>
              <StarRating
                rating={newFeedback.categories[key as keyof typeof newFeedback.categories]}
                editable
                onRatingChange={(rating) =>
                  setNewFeedback(prev => ({
                    ...prev,
                    categories: { ...prev.categories, [key]: rating }
                  }))
                }
              />
            </div>
          ))}
        </div>

        <div>
          <label className="text-sm font-medium mb-2 block">Comments</label>
          <Textarea
            placeholder="Share your detailed experience, suggestions for improvement, or any specific observations..."
            value={newFeedback.comment}
            onChange={(e) => setNewFeedback(prev => ({ ...prev, comment: e.target.value }))}
            rows={4}
          />
        </div>

        {/* Bluish submit button */}
        <Button 
          className="w-full bg-blue-600 text-white hover:bg-blue-500 transition-colors" 
          onClick={submitFeedback}
          disabled={!newFeedback.sessionType || !newFeedback.rating || !newFeedback.comment}
        >
          <Send className="h-4 w-4 mr-2" />
          Submit Feedback
        </Button>
      </CardContent>
    </Card>
  )

  const FeedbackList = () => (
    <div className="space-y-4">
      {filteredFeedback.length === 0 ? (
        <Card>
          <CardContent className="p-8 text-center">
            <MessageSquare className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
            <h3 className="text-lg font-semibold mb-2">No feedback found</h3>
            <p className="text-muted-foreground">
              {filter !== "all" 
                ? "Try adjusting your filter settings"
                : "Submit your first feedback to get started"
              }
            </p>
          </CardContent>
        </Card>
      ) : (
        filteredFeedback.map((feedback) => (
          <Card key={feedback.id} className="hover:shadow-lg transition-shadow duration-200">
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <Avatar className="h-10 w-10">
                    <AvatarFallback className="bg-primary text-primary-foreground text-sm">
                      {currentRole === "practitioner" 
                        ? feedback.patient.split(" ").map(n => n[0]).join("")
                        : feedback.practitioner.split(" ").map(n => n[0]).join("")
                      }
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-semibold text-foreground">
                      {feedback.sessionType}
                    </h4>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-3 w-3" />
                      {feedback.date}
                      {currentRole === "practitioner" && (
                        <span>• Patient: {feedback.patient}</span>
                      )}
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <StarRating rating={feedback.rating} />
                  <Badge className={
                    feedback.rating >= 8 
                      ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                      : feedback.rating >= 6
                      ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                      : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
                  }>
                    {feedback.rating >= 8 ? "Excellent" : feedback.rating >= 6 ? "Good" : "Needs Improvement"}
                  </Badge>
                </div>
              </div>

              <p className="text-sm mb-4 bg-muted/30 p-3 rounded-lg">
                {feedback.comment}
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {Object.entries({
                  effectiveness: "Effectiveness",
                  comfort: "Comfort",
                  professionalism: "Professionalism", 
                  environment: "Environment"
                }).map(([key, label]) => (
                  <div key={key} className="text-center p-2 bg-muted/20 rounded">
                    <p className="text-xs text-muted-foreground mb-1">{label}</p>
                    <p className="font-semibold text-primary">
                      {feedback.categories[key as keyof typeof feedback.categories]}/10
                    </p>
                  </div>
                ))}
              </div>

              {currentRole === "practitioner" && (
                <div className="mt-4 pt-4 border-t flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-blue-700 text-blue-600 hover:bg-blue-600 hover:text-white dark:border-blue-500 dark:text-blue-400 dark:hover:bg-blue-500 dark:hover:text-white transition-colors"
                  >
                    Respond
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-blue-600 hover:text-blue-400 dark:text-blue-400 dark:hover:text-blue-300"
                  >
                    View Session Details
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        ))
      )}
    </div>
  )

  return (
    <div className="p-6 max-w-6xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground flex items-center gap-2">
            <MessageSquare className="h-8 w-8" />
            {currentRole === "patient" ? "My Feedback" : "Patient Feedback"}
          </h1>
          <p className="text-muted-foreground">
            {currentRole === "patient" 
              ? "Share your experience and help us improve our services"
              : "Review patient feedback to enhance treatment quality"
            }
          </p>
        </div>
        
        {/* Top analytics button */}
        <Button className="bg-blue-600 text-white hover:bg-blue-500 transition-colors">
          <BarChart3 className="h-4 w-4 mr-2" />
          View Analytics
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Feedback</p>
                <p className="text-2xl font-bold">{feedbackData.length}</p>
              </div>
              <MessageSquare className="h-8 w-8 text-primary" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Average Rating</p>
                <p className="text-2xl font-bold text-accent">{averageRating.toFixed(1)}</p>
              </div>
              <Star className="h-8 w-8 text-yellow-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Excellent (8+)</p>
                <p className="text-2xl font-bold text-green-600">
                  {feedbackData.filter(f => f.rating >= 8).length}
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
                <p className="text-sm text-muted-foreground">This Month</p>
                <p className="text-2xl font-bold">{feedbackData.length}</p>
              </div>
              <Calendar className="h-8 w-8 text-secondary-foreground" />
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue={currentRole === "patient" ? "submit" : "view"} className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          {currentRole === "patient" && (
            <TabsTrigger value="submit">Submit Feedback</TabsTrigger>
          )}
          <TabsTrigger value="view">
            {currentRole === "patient" ? "My Feedback" : "All Feedback"}
          </TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>

        {currentRole === "patient" && (
          <TabsContent value="submit">
            <FeedbackForm />
          </TabsContent>
        )}

        <TabsContent value="view" className="space-y-4">
          <Card>
            <CardContent className="p-4">
              <div className="flex flex-col sm:flex-row gap-4 items-center">
                <div className="flex-1">
                  <h3 className="font-medium mb-1">Filter Feedback</h3>
                  <p className="text-sm text-muted-foreground">
                    View feedback by rating category
                  </p>
                </div>
                
                <Select value={filter} onValueChange={setFilter}>
                  <SelectTrigger className="w-48">
                    <Filter className="h-4 w-4 mr-2" />
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Ratings</SelectItem>
                    <SelectItem value="high">Excellent (8-10)</SelectItem>
                    <SelectItem value="medium">Good (6-7)</SelectItem>
                    <SelectItem value="low">Needs Work (&lt;6)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          <FeedbackList />
        </TabsContent>

        <TabsContent value="analytics">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5" />
                  Rating Distribution
                </CardTitle>
                <CardDescription>
                  Breakdown of feedback ratings over time
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8 text-center">
                <BarChart3 className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
                <h3 className="text-lg font-semibold mb-2">Charts Coming Soon</h3>
                <p className="text-muted-foreground">
                  Interactive analytics and trend visualization will be available soon.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Category Averages</CardTitle>
                <CardDescription>
                  Average scores across different aspects
                </CardDescription>
              </CardHeader>
              <CardContent>

                <div className="space-y-4">
                  {["effectiveness", "comfort", "professionalism", "environment"].map((category) => {
                    const avg = feedbackData.reduce((acc, f) => 
                      acc + f.categories[category as keyof typeof f.categories], 0
                    ) / feedbackData.length
                    return (
                      <div key={category} className="flex items-center justify-between">
                        <span className="capitalize">{category}</span>
                        <div className="flex items-center gap-2">
                          <div className="w-20 bg-muted rounded-full h-2">
                            <div 
                              className="bg-primary h-2 rounded-full transition-all"
                              style={{ width: `${(avg / 10) * 100}%` }}
                            />
                          </div>
                          <span className="text-sm font-bold w-8">{avg.toFixed(1)}</span>
                        </div>
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

export default Feedback