import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import { Check } from "lucide-react"
import { validateAccessCode } from "../../lib/accessCodes"
const PENPENCIL_SUBMIT_URL = "https://api.penpencil.co/pi-os-backend/v1/user/batch-access-request";
const SHEET_LOGIN_URL = "https://api.penpencil.co/pi-os-backend/v1/user/sheet";

export default function PricingPage() {
  const router = useRouter()
  const [isModalOpen, setIsModalOpen] = useState(false)
  // Login/Register + Details state
  const [step, setStep] = useState<"phone" | "otp" | "details">("phone")
  const [phone, setPhone] = useState("")
  const [otp, setOtp] = useState("")
  const [otpError, setOtpError] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [otpTimer, setOtpTimer] = useState(0)
  const [canSendOtp, setCanSendOtp] = useState(true)
  const [name, setName] = useState("")
  const [accessCode, setAccessCode] = useState("")
  const [accessCodeStatus, setAccessCodeStatus] = useState<"idle" | "checking" | "valid" | "invalid">("idle")
  const [accessCodeMessage, setAccessCodeMessage] = useState("")
  const [isPaying, setIsPaying] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [accessCodePlatform, setAccessCodePlatform] = useState("")

  const features = [
    "Advanced Analytics Dashboard",
    "Screen Time Insights",
    "USB-Protection and Remote Lock",
    "App Management",
    "Live Interactions",
    "Browser Protection",
    "Audio and Video Calling",
    "Weekly Analysis",
  ]

  function openModal() {
    setIsModalOpen(true)
    setStep("phone")
  }

  function mapPlatformToCode(platform: string) {
    return platform?.toLowerCase().includes("amazon") ? "AMZ" : "FLP"
  }

  function closeModal() {
    setIsModalOpen(false)
    setPhone("")
    setOtp("")
    setOtpError("")
    setIsLoading(false)
    setOtpTimer(0)
    setCanSendOtp(true)
    setName("")
    setAccessCode("")
    setAccessCodeStatus("idle")
    setAccessCodeMessage("")
    setIsSubmitting(false)
  }

  // OTP timers
  useEffect(() => {
    if (otpTimer > 0) {
      const i = setInterval(() => setOtpTimer((p) => p - 1), 1000)
      return () => clearInterval(i)
    } else if (otpTimer === 0) {
      setCanSendOtp(true)
    }
  }, [otpTimer])

  function validatePhone(value: string) {
    return /^\d{10}$/.test(value.trim())
  }

  async function handleSendOtp() {
    if (!validatePhone(phone)) {
      setOtpError("Enter a valid 10-digit phone number")
      return
    }
    setIsLoading(true)
    setOtpError("")
    try {
      const response = await fetch("https://api.penpencil.co/v1/users/get-otp?smsType=0", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: phone,
          countryCode: "+91",
          organizationId: "6593b4a9e678280018742c4c",
        }),
      })
      const data = await response.json()
      if (data.success || response.status === 400) {
        setStep("otp")
        setOtpTimer(30)
        setCanSendOtp(false)
      } else {
        throw new Error(data.message || "Failed to send OTP")
      }
    } catch (e) {
      setOtpError("Failed to send OTP. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  async function handleVerifyOtp() {
    if (otp.length !== 6) {
      setOtpError("Please enter a valid 6-digit OTP")
      return
    }
    setIsLoading(true)
    setOtpError("")
    try {
      const response = await fetch("https://api.penpencil.co/v3/oauth/token", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: phone,
          otp: otp,
          client_id: "system-admin",
          client_secret: "KjPXuAVfC5xbmgreETNMaL7z",
          grant_type: "password",
          organizationId: "6593b4a9e678280018742c4c",
          latitude: 0,
          longitude: 0,
        }),
      })
      const data = await response.json()
      if (data.success) {
        localStorage.setItem("token", data.data.access_token)
        localStorage.setItem("phone", phone)
        setStep("details")
      } else {
        // Try registration
        const reg = await fetch("https://api.penpencil.co/v1/users/register/6593b4a9e678280018742c4c", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ mobile: phone, countryCode: "+91", firstName: "User", lastName: "" }),
        })
        const regData = await reg.json()
        if (regData.success) {
          setStep("details")
        } else {
          setOtpError("Login/Registration failed. Please try again later.")
        }
      }
    } catch (e) {
      setOtpError("Login/Registration failed. Please try again later.")
    } finally {
      setIsLoading(false)
    }
  }

  async function handleAccessCodeChange(value: string) {
    setAccessCode(value)
    if (!value.trim()) {
      setAccessCodeStatus("idle")
      setAccessCodeMessage("")
      setAccessCodePlatform("")
      return
    }
    setAccessCodeStatus("checking")
    setAccessCodeMessage("Validating coupon code...")
    const result = await validateAccessCode(value)
    if (result.valid) {
      setAccessCodeStatus("valid")
      setAccessCodeMessage(result.message)
      setAccessCodePlatform(result.platform || "")
    } else {
      setAccessCodeStatus("invalid")
      setAccessCodeMessage("Invalid coupon code. Please try again.")
      setAccessCodePlatform("")
    }
  }

  async function handleSubmitDetails() {
    // if (!name.trim()) { alert("Please enter your full name"); return }
    if (!accessCode.trim()) { alert("Please enter your coupon code"); return }
    if (accessCodeStatus !== "valid") { alert("Please enter a valid coupon code"); return }
    if (isSubmitting) return
    setIsSubmitting(true)
    try {
      // Submit minimal login info to Sheets per spec
      const phoneWithCode = `+91${phone.trim()}`
      const values = [phoneWithCode, name.trim(), accessCode.trim(), mapPlatformToCode(accessCodePlatform)]
      await fetch(SHEET_LOGIN_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ values, sheetName: 'pifocus_login' })
      }).catch(() => {})
      router.push('/pifocus?offer=applied')
    } finally {
      setIsSubmitting(false)
    }
  }

  function loadRazorpayScript(): Promise<boolean> {
    return new Promise((resolve) => {
      if (document.getElementById("razorpay-sdk")) return resolve(true)
      const script = document.createElement("script")
      script.id = "razorpay-sdk"
      script.src = "https://checkout.razorpay.com/v1/checkout.js"
      script.onload = () => resolve(true)
      script.onerror = () => resolve(false)
      document.body.appendChild(script)
    })
  }

  async function handlePayNow() {
    setIsPaying(true)
    try {
      // Redirect to hosted Razorpay payment page
      if (typeof window !== 'undefined') {
        window.location.href = 'https://rzp.io/rzp/rCsFSfh'
      }
    } finally {
      setIsPaying(false)
    }
  }

  return (
    <div
      className="min-h-screen bg-cover pt-20 bg-center pb-12 bg-no-repeat"
      style={{ backgroundImage: "url(/focusHome.png)" }}
    >
      <div className="container mx-auto px-4 py-10 md:py-16 md:pb-20">
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-3xl md:text-5xl font-bold text-slate-800 mb-3 md:mb-4 text-balance">
            Simple, Transparent Pricing
          </h1>
          <p className="text-base md:text-xl text-slate-600 max-w-2xl mx-auto text-pretty">
            Get access to all features with our comprehensive plan.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="border-2 border-white/30 shadow-2xl bg-white backdrop-blur-sm rounded-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 p-4 md:p-8 md:pb-12">
              {/* Left side - Pricing */}
              <div className="space-y-6">
                <div className="text-center lg:text-left">
                   <h2 className="text-2xl md:text-3xl font-bold text-slate-800 pt-10 mb-3 md:mb-4">Redeem Offer</h2>
                  <div className="space-y-3">
                    <div className="flex items-center justify-center lg:justify-start gap-3">
                      <span className="text-2xl md:text-3xl text-slate-400 line-through">₹2,499/-</span>
                      <span className="text-4xl md:text-3xl text-blue-900 font-bold text-slate-800">Free 3-Month Trial</span>
                    </div>
                    {/* <div className="inline-block bg-[#3E83FF] text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                      40% OFF - Limited Time
                    </div> */}
                    {/* <p className="text-slate-600 text-base md:text-lg">1-Year Subscription</p> */}
                  </div>
                </div>

                <button onClick={openModal} className="w-full sm:w-96 bg-[#3E83FF] hover:bg-[#2563eb] text-white py-3 md:py-4 text-lg md:text-xl font-semibold shadow-lg transform hover:scale-105 transition-all duration-200 rounded-lg text-center cursor-pointer">
                  Claim Offer Now
                </button>

                <div className="text-center lg:text-left text-sm text-slate-500 space-y-1">
                   {/* <p className="flex items-center justify-center lg:justify-start gap-2">
                    <Check className="h-4 w-4 text-emerald-500" />
                    <span>Free 1-Month Trial</span>
                  </p>  */}
                  <p className="flex items-center justify-center lg:justify-start gap-2">
                    <Check className="h-4 w-4 text-emerald-500" />
                    <span>No hidden fees • Cancel anytime</span>
                  </p>
                </div>
              </div>

              {/* Right side - Features */}
              <div>
                <div>
                  <h3 className="font-bold text-slate-800 mb-4 md:mb-6 text-xl md:text-2xl">Everything you need:</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-2 md:gap-3">
                    {features.map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-3 p-2 rounded-lg hover:bg-slate-50/50 transition-colors"
                      >
                        <Check className="h-4 md:h-5 w-4 md:w-5 text-[#3E83FF] mt-0.5 flex-shrink-0" />
                        <span className="text-slate-700 text-sm md:text-base font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Payment Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="bg-white rounded-2xl w-full max-w-md p-6 relative">
            <button onClick={closeModal} className="absolute top-3 right-3 w-8 h-8 rounded-full bg-gray-900 text-white flex items-center justify-center">×</button>
            {step === 'phone' && (
              <div className="space-y-4">
                <h2 className="text-xl font-bold text-slate-800">Get Started</h2>
                <p className="text-slate-600 text-sm">Enter your phone number to login/register</p>
                <div className="flex gap-2">
                  <input
                    type="tel"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    placeholder="10-digit number"
                    className="flex-1 rounded-lg border px-3 py-2 outline-none focus:ring-2 border-gray-300 focus:ring-blue-500/30"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value.replace(/[^0-9]/g, ''))}
                    maxLength={10}
                  />
                  <button onClick={handleSendOtp} disabled={!canSendOtp || isLoading} className="px-4 py-2 rounded-lg bg-black text-white disabled:opacity-50">
                    {isLoading ? <>
                      <div className="w-5 h-5 border-t-2 border-t-white rounded-full animate-spin"></div>
                    </> : 'Send OTP'}
                  </button>
                </div>
                {otpError && <p className="text-red-600 text-sm">{otpError}</p>}
                {otpTimer > 0 && <p className="text-xs text-slate-500">Resend OTP in {otpTimer}s</p>}
              </div>
            )}
            {step === 'otp' && (
              <div className="space-y-4">
                <h2 className="text-xl font-bold text-slate-800">Enter OTP</h2>
                <div className="flex gap-2">
                  <input
                    type="tel"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    placeholder="6-digit OTP"
                    className="flex-1 rounded-lg border px-3 py-2 outline-none focus:ring-2 border-gray-300 focus:ring-blue-500/30"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value.replace(/[^0-9]/g, ''))}
                    maxLength={6}
                  />
                  <button onClick={handleVerifyOtp} disabled={isLoading} className="px-4 py-2 rounded-lg bg-black text-white disabled:opacity-50">
                    {isLoading ? 
                    <>
                    <div className="w-5 h-5 border-t-2 border-t-white rounded-full animate-spin"></div>
                    </> : 'Verify'
                    }
                  </button>
                </div>
                <button onClick={handleSendOtp} disabled={!canSendOtp || isLoading} className="text-sm text-slate-600 disabled:opacity-50">{otpTimer > 0 ? `Resend OTP in ${otpTimer}s` : 'Resend OTP'}</button>
                {otpError && <p className="text-red-600 text-sm">{otpError}</p>}
              </div>
            )}
            {step === 'details' && (
              <div className="space-y-4">
                <h2 className="text-xl font-bold text-slate-800">Your Details</h2>
                <div className="space-y-3">
                  {/* <div>
                    <label className="block text-sm text-slate-600 mb-1">Full Name</label>
                    <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your full name" className="w-full rounded-lg border px-3 py-2 outline-none focus:ring-2 border-gray-300 focus:ring-blue-500/30" />
                  </div> */}
                  <div>
                    <label className="block text-sm text-slate-600 mb-1">Coupon Code</label>
                    <input value={accessCode} onChange={(e) => handleAccessCodeChange(e.target.value)} placeholder="Enter your coupon code" className={`w-full rounded-lg border px-3 py-2 outline-none focus:ring-2 ${accessCodeStatus==='valid' ? 'border-emerald-500 focus:ring-emerald-500/30' : accessCodeStatus==='invalid' ? 'border-red-500 focus:ring-red-500/30' : 'border-gray-300 focus:ring-blue-500/30'}`} />
                    {accessCodeMessage && <p className={`text-sm mt-1 ${accessCodeStatus==='valid' ? 'text-emerald-600' : accessCodeStatus==='invalid' ? 'text-red-600' : 'text-slate-600'}`}>{accessCodeMessage}</p>}
                  </div>
                </div>
                <div className="space-y-2 pt-2">
                  <button onClick={handleSubmitDetails} disabled={isSubmitting || accessCodeStatus!=='valid'} className="w-full bg-emerald-800 hover:bg-emerald-900 text-white py-3 rounded-lg font-semibold">{isSubmitting ? 'Submitting...' : 'Apply Offer'}
                  </button>
                  {/* <button onClick={handlePayNow} disabled={isPaying} className="w-full bg-[#3E83FF] hover:bg-[#2563eb] disabled:opacity-50 text-white py-3 rounded-lg font-semibold">{isPaying ? 'Opening payment...' : 'Proceed to Pay ₹1,499'}</button> */}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

