import { LoginForm } from "@/components/auth/login-form"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"
import heroImage from "@/assets/hero-ayurveda.jpg"

export function Login() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen flex">
      {/* Left side - Hero Image */}
      <div className="hidden lg:flex lg:w-1/2 relative">
        <div 
          className="w-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm opacity-80" />
          <div className="absolute inset-0 flex items-center justify-center p-8">
            <div className="text-center text-white space-y-6 max-w-lg">
              <h1 className="text-4xl font-bold">
                Welcome to AyurSutra
              </h1>
              <p className="text-xl opacity-90">
                Your comprehensive platform for holistic Ayurvedic therapy management and wellness tracking.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right side - Login Form */}
      <div className="flex-1 flex items-center justify-center p-8 bg-background">
        <div className="w-full max-w-md space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-sky-400 to-blue-600 text-white bg-clip-text text-transparent">
              AyurSutra
            </h2>
            <ThemeToggle />
          </div>

          <LoginForm />

        </div>
      </div>
    </div>
  )
}

export default Login