import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { LoginForm } from "@/components/auth/login-form"
import { RegisterForm } from "@/components/auth/register-form"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import heroImage from "@/assets/hero-ayurveda.jpg"

export function Auth() {
  const [mode, setMode] = useState<"login" | "register">("login")
  const navigate = useNavigate()

  return (
    <div className="min-h-screen flex">
      {/* Left side - Hero Image */}
      <div className="hidden lg:flex lg:w-1/2 relative">
        <div 
          className="w-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-hero opacity-80" />
          <div className="absolute inset-0 flex items-center justify-center p-8">
            <div className="text-center text-white space-y-6 max-w-lg">
              <h1 className="text-4xl font-bold">
                Welcome to AyurSutra
              </h1>
              <p className="text-xl opacity-90">
                Your comprehensive platform for holistic Ayurvedic therapy management and wellness tracking.
              </p>
              <div className="grid grid-cols-1 gap-4 text-left">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2" />
                  <div>
                    <h3 className="font-semibold">Personalized Care</h3>
                    <p className="text-sm opacity-80">Tailored therapy sessions based on your unique constitution</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2" />
                  <div>
                    <h3 className="font-semibold">Progress Tracking</h3>
                    <p className="text-sm opacity-80">Monitor your wellness journey with detailed insights</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2" />
                  <div>
                    <h3 className="font-semibold">Expert Guidance</h3>
                    <p className="text-sm opacity-80">Connect with certified Ayurvedic practitioners</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right side - Auth Form */}
      <div className="flex-1 flex items-center justify-center p-8 bg-background">
        <div className="w-full max-w-md space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              AyurSutra
            </h2>
            <ThemeToggle />
          </div>

          {mode === "login" ? <LoginForm /> : <RegisterForm />}

          <Card className="bg-muted/30">
            <CardContent className="p-4 text-center">
              <p className="text-sm text-muted-foreground mb-3">
                Want to explore without signing up?
              </p>
              <Button 
                variant="outline" 
                onClick={() => navigate("/dashboard")}
                className="w-full"
              >
                Browse Demo Mode
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default Auth