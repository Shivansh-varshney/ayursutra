import { RegisterForm } from "@/components/auth/register-form"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"
import heroImage from "@/assets/hero-ayurveda.jpg"

export function Register() {
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
                Join AyurSutra
              </h1>
              <p className="text-xl opacity-90">
                Start your personalized Ayurvedic wellness journey with expert guidance and comprehensive care.
              </p>
              <div className="grid grid-cols-1 gap-4 text-left">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2" />
                  <div>
                    <h3 className="font-semibold">Personalized Treatment</h3>
                    <p className="text-sm opacity-80">Customized therapy plans based on your unique constitution</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2" />
                  <div>
                    <h3 className="font-semibold">Expert Practitioners</h3>
                    <p className="text-sm opacity-80">Connect with certified Ayurvedic specialists</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2" />
                  <div>
                    <h3 className="font-semibold">Progress Tracking</h3>
                    <p className="text-sm opacity-80">Monitor and visualize your wellness improvements</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right side - Register Form */}
      <div className="flex-1 flex items-center justify-center p-8 bg-background">
        <div className="w-full max-w-md space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              AyurSutra
            </h2>
            <ThemeToggle />
          </div>

          <RegisterForm />

          <div className="text-center">
            <span className="text-sm text-muted-foreground">Already have an account? </span>
            <Button variant="link" className="p-0" onClick={() => navigate("/login")}>
              Sign in here
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register