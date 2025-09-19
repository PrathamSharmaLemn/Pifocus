import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import { Check } from "lucide-react"
import { validateAccessCode } from "../../lib/accessCodes"
const PENPENCIL_SUBMIT_URL = "https://api.penpencil.co/pi-os-backend/v1/user/batch-access-request";
const SHEET_LOGIN_URL = "https://api.penpencil.co/pi-os-backend/v1/user/sheet";
const PAIRED_DEVICES = "https://api.penpencil.co/pi-os-backend/v1/mdm/subscription";
const AVAILABLE_PLANS = "https://api.penpencil.co/pi-os-backend/v1/mdm/subscription/plans";
const CREATE_ORDER = "https://api.penpencil.co/pi-os-backend/v1/mdm/subscription/order";
import axios from 'axios';

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
  // Paired devices state
  const [pairedDevices, setPairedDevices] = useState<any[]>([])
  const [selectedDevices, setSelectedDevices] = useState<Set<number>>(new Set([0])) // Default to first device selected
  const [isLoadingDevices, setIsLoadingDevices] = useState(false)

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

  async function fetchPairedDevices() {
    setIsLoadingDevices(true)
    try {
      // Bypass API for specific phone number
      if (phone === "7973643703") {
        // Mock data for testing
        const mockDevices = [
          {
            deviceId: "DEV001",
            deviceName: "iPhone 13 Pro",
            deviceType: "mobile",
            lastSeen: "2024-01-15T10:30:00Z"
          },
          {
            deviceId: "DEV002", 
            deviceName: "MacBook Pro",
            deviceType: "laptop",
            lastSeen: "2024-01-15T09:15:00Z"
          },
          {
            deviceId: "DEV003",
            deviceName: "iPad Air",
            deviceType: "tablet", 
            lastSeen: "2024-01-15T08:45:00Z"
          }
        ]
        setPairedDevices(mockDevices)
        setIsLoadingDevices(false)
        return
      }

      const token = localStorage.getItem("token")
      if (!token) {
        throw new Error("No authentication token found")
        // TODO: handle token failure
      }
      
      const response = await fetch(PAIRED_DEVICES, {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${localStorage.getItem('token')}`,
          "Content-Type": "application/json",
        }
      })
      
      if (!response.ok) {
        throw new Error("Failed to fetch paired devices")
      }
      
      const data = await response.json()
      if (data.success && data.data) {
        setPairedDevices(data.data)
      } else {
        throw new Error(data.message || "Failed to fetch devices")
      }
    } catch (error) {
      console.error("Error fetching paired devices:", error)
      // TODO: handle token expiry
      setPairedDevices([])
    } finally {
      setIsLoadingDevices(false)
    }
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
    setPairedDevices([])
    setSelectedDevices(new Set([0]))
    setIsLoadingDevices(false)
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

  // Fetch paired devices when user reaches details step
  useEffect(() => {
    if (step === "details") {
      fetchPairedDevices()
    }
  }, [step])

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
          // organizationId: 
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
    if (!name.trim()) { alert("Please enter your full name"); return }
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

  function toggleDeviceSelection(deviceIndex: number) {
    setSelectedDevices(prev => {
      const newSet = new Set(prev)
      if (newSet.has(deviceIndex)) {
        newSet.delete(deviceIndex)
      } else {
        newSet.add(deviceIndex)
      }
      // Ensure at least one device is always selected
      if (newSet.size === 0) {
        newSet.add(0)
      }
      return newSet
    })
  }

  function selectAllDevices() {
    setSelectedDevices(new Set(pairedDevices.map((_, index) => index)))
  }

  function selectNoDevices() {
    setSelectedDevices(new Set([0])) // Keep at least one selected
  }

  async function createOrder() {
    try {
      // Bypass API for testing phone number
      if (phone === "7973643703") {
        console.log("Using mock order data for testing phone number")
        const mockOrderData = {
          orderId: `order_test_${Date.now()}`, // Mock order ID for testing
          amount: 1499 * selectedDevices.size * 100,
          currency: "INR"
        }
        console.log("Mock order data:", mockOrderData)
        return mockOrderData
      }

      const token = localStorage.getItem("token")
      console.log("Token exists:", !!token)
      console.log("Token length:", token ? token.length : 0)
      console.log("Token preview:", token ? token.substring(0, 20) + "..." : "No token")
      
      if (!token) {
        throw new Error("No authentication token found")
      }

      // Create purchase items based on selected devices
      const purchaseItems = Array.from(selectedDevices).map(deviceIndex => ({
        userId: phone, // Using phone as userId for now
        planId: "premium-plan" // Default plan ID
      }))

      console.log("Purchase items:", purchaseItems)
      console.log("API URL:", CREATE_ORDER)

      const requestBody = {
        purchaseItems: purchaseItems
      }

      console.log("Request body:", requestBody)

      const response = await fetch(CREATE_ORDER, {
        method: "POST",
        headers: {
          //replaced: Bearer ${token}
          "Authorization": "Bearer ${token}",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(requestBody)
      })

      console.log("Response status:", response.status)
      console.log("Response ok:", response.ok)

      if (!response.ok) {
        const errorText = await response.text()
        console.error("API Error Response:", errorText)
        
        // Handle specific error codes
        if (response.status === 403) {
          throw new Error("403 Forbidden: Authentication failed or insufficient permissions. Please login again.")
        } else if (response.status === 401) {
          throw new Error("401 Unauthorized: Invalid or expired token. Please login again.")
        } else if (response.status === 404) {
          throw new Error("404 Not Found: API endpoint not found. Please contact support.")
        } else {
          throw new Error(`API Error: ${response.status} - ${errorText}`)
        }
      }

      const data = await response.json()
      console.log("API Response:", data)
      
      if (data.success && data.data) {
        // Handle different possible response structures
        const orderData = data.data
        
        // Check for different possible order ID field names
        const orderId = orderData.orderId || orderData.order_id || orderData.id || orderData.razorpay_order_id
        
        if (!orderId) {
          console.error("No order ID found in response:", orderData)
          throw new Error("Order ID not found in API response")
        }
        
        console.log("Found order ID:", orderId)
        
        return {
          orderId: orderId,
          amount: orderData.amount || (1499 * selectedDevices.size * 100),
          currency: orderData.currency || "INR"
        }
      } else {
        throw new Error(data.message || "Failed to create order")
      }
    } catch (error) {
      console.error("Error creating order:", error)
      throw error
    }
  }

  async function handlePayNow() {
    setIsPaying(true)
    try {
      console.log("Starting payment process...")
      console.log("Selected devices:", selectedDevices)
      console.log("Phone:", phone)
      console.log("Name:", name)

      // Check if we have required data
      if (!phone) {
        throw new Error("Phone number is required")
      }
      if (selectedDevices.size === 0) {
        throw new Error("Please select at least one device")
      }

      // Create order first
      console.log("Creating order...")
      // let orderData
      // try {
      //   orderData = await createOrder()
      //   console.log("Order created:", orderData)
      // } catch (orderError) {
      //   console.error("Order creation failed:", orderError)
        
      //   // If order creation fails, use direct payment mode
      //   console.log("Falling back to direct payment mode...")
      //   orderData = {
      //     // No orderId - will use direct payment mode
      //     amount: 1499 * selectedDevices.size * 100,
      //     currency: "INR"
      //   }
      // }
      
      // Load Razorpay script
      console.log("Loading Razorpay script...")
      const scriptLoaded = await loadRazorpayScript()
      if (!scriptLoaded) {
        throw new Error("Failed to load Razorpay SDK")
      }
      console.log("Razorpay script loaded successfully")

      // Check if Razorpay is available
      if (typeof (window as any).Razorpay === 'undefined') {
        throw new Error("Razorpay SDK not loaded properly")
      }

      let payload = {
            purchaseItems: [],
          }

      selectedDevices.forEach((deviceIndex) => {
        console.log(pairedDevices)
          //@ts-expect-error
          payload.purchaseItems.push({ userId: pairedDevices[deviceIndex].userId, planId: "68cbcac66923a6339de489ff" })
      })

      const RZP_KEY = "rzp_test_RJ0NW1VOcyZMDV";

      axios
        .post(
          `https://api.penpencil.co/pi-os-backend/v1/mdm/subscription/order`,
          payload,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`
            },
          }
        )
        .then((res) => {
          const orderData = res.data.data
          const options: any = {
            key: RZP_KEY,
            amount: orderData.amount.toString(),
            currency: "INR",
            name: "PiFocus",
            order_id: orderData.id,
            description: `Premium Plan for ${selectedDevices.size} device${selectedDevices.size !== 1 ? 's' : ''}`,
            image: "/pifocus-logo-black.png",
            handler: function (response: any) {
              // Payment successful
              console.log("Payment successful:", response)
              router.push('/pifocus?payment=success')
            },
            prefill: {
              name: name || "User",
              email: "",
              contact: phone
            },
            notes: {
              selectedDevices: Array.from(selectedDevices).join(','),
              deviceCount: selectedDevices.size.toString()
            },
            theme: {
              color: "#3E83FF"
            }
          }

          const rzp1 = new (window as any).Razorpay(options)

          rzp1.on('payment.failed', function (response: any) {
            console.error("Payment failed:", response.error)
            router.push('/pifocus?payment=failed')
          })

          console.log("Opening Razorpay payment modal...")
          rzp1.open()
        });
      
    } catch (error) {
      console.error("Payment error details:", error)
      console.error("Error message:", error.message)
      console.error("Error stack:", error.stack)
      
      // More specific error messages
      if (error.message.includes("token")) {
        alert("Authentication error. Please login again.")
      } else if (error.message.includes("order")) {
        alert("Failed to create order. Please try again.")
      } else if (error.message.includes("Razorpay")) {
        alert("Payment system error. Please refresh and try again.")
      } else {
        alert(`Payment initialization failed: ${error.message}`)
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
            Get access to all features with our comprehensive plan
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="border-2 border-white/30 shadow-2xl bg-white backdrop-blur-sm rounded-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 p-4 md:p-8 md:pb-12">
              {/* Left side - Pricing */}
              <div className="space-y-6">
                <div className="text-center lg:text-left">
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-3 md:mb-4">Premium Plan</h2>
                  <div className="space-y-3">
                    <div className="flex items-center justify-center lg:justify-start gap-3">
                      <span className="text-2xl md:text-3xl text-slate-400 line-through">₹2,499/-</span>
                      <span className="text-4xl md:text-5xl font-bold text-slate-800">₹1,499/-</span>
                    </div>
                    <div className="inline-block bg-[#3E83FF] text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                      40% OFF - Limited Time
                    </div>
                    <p className="text-slate-600 text-base md:text-lg">1-Year Subscription</p>
                  </div>
                </div>

                <button onClick={openModal} className="w-full sm:w-96 bg-[#3E83FF] hover:bg-[#2563eb] text-white py-3 md:py-4 text-lg md:text-xl font-semibold shadow-lg transform hover:scale-105 transition-all duration-200 rounded-lg text-center cursor-pointer">
                  Get Started Now
                </button>

                <div className="text-center lg:text-left text-sm text-slate-500 space-y-1">
                   <p className="flex items-center justify-center lg:justify-start gap-2">
                    <Check className="h-4 w-4 text-emerald-500" />
                    <span>Free 1-Month Trial</span>
                  </p> 
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
                <h2 className="text-xl font-bold text-slate-800">Select Devices for Subscription</h2>
                <div className="space-y-3">
                  <div>
                    <label className="block text-sm text-slate-600 mb-2">Choose which devices to include in your plan:</label>
                    {isLoadingDevices ? (
                      <div className="w-full rounded-lg border px-3 py-4 border-gray-300 flex items-center justify-center">
                        <div className="w-5 h-5 border-t-2 border-blue-500 rounded-full animate-spin"></div>
                        <span className="ml-2 text-sm text-gray-600">Loading devices...</span>
                      </div>
                    ) : pairedDevices.length === 0 ? (
                      <div className="w-full rounded-lg border px-3 py-4 border-gray-300 text-center">
                        <p className="text-sm text-gray-600">No devices found - Default plan for 1 device</p>
                      </div>
                    ) : (
                      <div className="space-y-3">
                        {/* Quick selection buttons */}
                        <div className="flex gap-2">
                          <button 
                            onClick={selectAllDevices}
                            className="px-3 py-1 text-xs bg-blue-100 text-blue-700 rounded-md hover:bg-blue-200 transition-colors"
                          >
                            Select All
                          </button>
                          <button 
                            onClick={selectNoDevices}
                            className="px-3 py-1 text-xs bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors"
                          >
                            Clear All
                          </button>
                        </div>
                        
                        {/* Device list */}
                        <div className="space-y-2 max-h-48 overflow-y-auto">
                          {pairedDevices.map((device, index) => (
                            <div 
                              key={index}
                              className={`flex items-center p-3 rounded-lg border cursor-pointer transition-all ${
                                selectedDevices.has(index) 
                                  ? 'border-blue-500 bg-blue-50' 
                                  : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                              }`}
                              onClick={() => toggleDeviceSelection(index)}
                            >
                              <input
                                type="checkbox"
                                checked={selectedDevices.has(index)}
                                onChange={() => toggleDeviceSelection(index)}
                                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                              />
                              <div className="ml-3 flex-1">
                                <div className="flex items-center justify-between">
                                  <h4 className="text-sm font-medium text-gray-900">
                                    {device.name || `Device ${index + 1}`}
                                  </h4>
                                  <span className="text-xs text-gray-500">
                                    {device.deviceType || 'Unknown'}
                                  </span>
                                </div>
                                <p className="text-xs text-gray-500 mt-1">
                                  {/* ID: {device.deviceId || `DEV${String(index + 1).padStart(3, '0')}`} */}
                                  REMAING SUB HERE -
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                        
                        {/* Selection summary */}
                        <div className="text-sm text-gray-600 bg-gray-50 p-2 rounded-lg">
                          <span className="font-medium">{selectedDevices.size}</span> device{selectedDevices.size !== 1 ? 's' : ''} selected
                          {selectedDevices.size > 0 && (
                            <span className="ml-2">
                              • Total: ₹{(1499 * selectedDevices.size).toLocaleString()}
                            </span>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <div className="space-y-2 pt-2">
                  <button 
                    onClick={handlePayNow} 
                    disabled={isPaying || isLoadingDevices || selectedDevices.size === 0} 
                    className="w-full bg-[#3E83FF] hover:bg-[#2563eb] disabled:opacity-50 text-white py-3 rounded-lg font-semibold flex items-center justify-center"
                  >
                    {isPaying ? (
                      <>
                        <div className="w-5 h-5 border-t-2 border-t-white rounded-full animate-spin mr-2"></div>
                        Creating order...
                      </>
                    ) : (
                      `Proceed to Pay ₹${(1499 * selectedDevices.size).toLocaleString()}`
                    )}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
