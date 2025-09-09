"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { validateAccessCode } from "../lib/accessCodes";

const PENPENCIL_SUBMIT_URL = "https://api.penpencil.co/pi-os-backend/v1/user/batch-access-request";
const DOWNLOAD_URL = "https://d37yir8f8g6stw.cloudfront.net/pw-live/1.0.1/pw-live-setup.exe";
const mapPlatformToCode = (platform: string) =>
  platform?.toLowerCase().includes("amazon") ? "AMZ" : "FLP";

export default function Page() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [step, setStep] = useState<"phone" | "otp" | "details" | "success" | "all-set" | "install" | "thank-you">("phone");
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [otpError, setOtpError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [otpTimer, setOtpTimer] = useState(0);
  const [canSendOtp, setCanSendOtp] = useState(true);
  
  // Form data
  const [name, setName] = useState("");
  const [klass, setKlass] = useState("");
  const [board, setBoard] = useState("");
  const [track, setTrack] = useState("");
  const [accessCode, setAccessCode] = useState("");
  const [accessCodeStatus, setAccessCodeStatus] = useState<"" | "checking" | "valid" | "invalid">("");
  const [accessCodeMessage, setAccessCodeMessage] = useState("");
  const [accessCodePlatform, setAccessCodePlatform] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Class options with proper suffixes
  const classOptions = Array.from({ length: 12 }, (_, i) => {
    const num = i + 1;
    let suffix = "th";
    if (num === 1) suffix = "st";
    else if (num === 2) suffix = "nd";
    else if (num === 3) suffix = "rd";
    return `${num}${suffix}`;
  });

  // OTP Timer effect
  useEffect(() => {
    if (otpTimer > 0) {
      const interval = setInterval(() => {
        setOtpTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    } else if (otpTimer === 0) {
      setCanSendOtp(true);
    }
  }, [otpTimer]);

  // Update canSendOtp when otpTimer changes
  useEffect(() => {
    if (otpTimer > 0) {
      setCanSendOtp(false);
    } else {
      setCanSendOtp(true);
    }
  }, [otpTimer]);

  function validatePhone(value: string) {
    return /^\d{10}$/.test(value.trim());
  }

  function handleClassInput(value: string) {
    const numericMatch = value.match(/^(\d+)/);
    if (numericMatch) {
      const num = parseInt(numericMatch[1]);
      if (num >= 1 && num <= 12) {
        setKlass(num.toString());
        return;
      }
    }
    
    const ordinalMatch = value.match(/^(\d+)(st|nd|rd|th)$/);
    if (ordinalMatch) {
      const num = parseInt(ordinalMatch[1]);
      if (num >= 1 && num <= 12) {
        setKlass(num.toString());
        return;
      }
    }
    
    if (value === "") {
      setKlass("");
    }
  }

  function handleClassInputKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') {
      handleClassInputBlur();
    }
  }

  function handleClassInputBlur() {
    if (klass && !klass.includes('st') && !klass.includes('nd') && !klass.includes('rd') && !klass.includes('th')) {
      const num = parseInt(klass);
      if (num >= 1 && num <= 12) {
        let suffix = "th";
        if (num === 1) suffix = "st";
        else if (num === 2) suffix = "nd";
        else if (num === 3) suffix = "rd";
        setKlass(`${num}${suffix}`);
      }
    }
  }

  async function handleAccessCodeChange(value: string) {
    setAccessCode(value);
    
    if (!value.trim()) {
      setAccessCodeStatus("");
      setAccessCodeMessage("");
      setAccessCodePlatform("");
      return;
    }
    
    setAccessCodeStatus("checking");
    setAccessCodeMessage("Validating access code...");
    
    try {
      const result = await validateAccessCode(value);
      setAccessCodeStatus(result.valid ? "valid" : "invalid");
      setAccessCodeMessage(result.message);
      setAccessCodePlatform(result.platform || "");
    } catch (error) {
      setAccessCodeStatus("invalid");
      setAccessCodeMessage("Unable to validate access code. Please try again.");
      setAccessCodePlatform("");
    }
  }

  async function handleSendOtp() {
    if (!validatePhone(phone)) {
      setOtpError("Enter a valid 10-digit phone number");
      return;
    }
    
    setIsLoading(true);
    setOtpError("");
    
    try {
      const response = await fetch("https://api.penpencil.co/v1/users/get-otp?smsType=0", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: phone,
          countryCode: "+91",
          organizationId: "5eb393ee95fab7468a79d189",
        }),
      });

      const data = await response.json();
      
      if (data.success) {
        setStep("otp");
        setOtpTimer(30);
        setCanSendOtp(false);
      } else if (response.status === 400) {
        // New user - need to register
        setStep("otp");
        setOtpTimer(30);
        setCanSendOtp(false);
      } else {
        throw new Error(data.message || "Failed to send OTP");
      }
    } catch (error) {
      setOtpError("Failed to send OTP. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }

  async function handleVerifyOtp() {
    if (otp.length !== 6) {
      setOtpError("Please enter a valid 6-digit OTP");
      return;
    }
    
    setIsLoading(true);
    setOtpError("");
    
    try {
      const response = await fetch("https://api.penpencil.co/v3/oauth/token", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: phone,
          otp: otp,
          client_id: "system-admin",
          client_secret: "KjPXuAVfC5xbmgreETNMaL7z",
          grant_type: "password",
          organizationId: "5eb393ee95fab7468a79d189",
          latitude: 0,
          longitude: 0,
        }),
      });

      const data = await response.json();
      
      if (data.success) {
        localStorage.setItem("token", data.data.access_token);
        localStorage.setItem("phone", phone);
        
        setStep("success");
        // Redirect to details form after 2 seconds
        setTimeout(() => {
          setStep("details");
        }, 2000);
      } else {
        // If login fails, automatically try to register the user
        await handleAutoRegister();
      }
    } catch (error) {
      // Try registration if verification fails
      await handleAutoRegister();
    } finally {
      setIsLoading(false);
    }
  }

  async function handleAutoRegister() {
    if (!validatePhone(phone)) {
      setOtpError("Please enter a valid mobile number");
      return;
    }
    
    try {
      const response = await fetch("https://api.penpencil.co/v1/users/register/5eb393ee95fab7468a79d189", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          mobile: phone,
          countryCode: "+91",
          firstName: "User", // Default name, will be updated in details form
          lastName: "",
        }),
      });

      const data = await response.json();
      
      if (data.success) {
        setStep("success");
        // Redirect to details form after 2 seconds
        setTimeout(() => {
          setStep("details");
        }, 2000);
      } else {
        throw new Error(data.message || "Registration failed");
      }
    } catch (error) {
      setOtpError("Login/Registration failed. Please try again later.");
    }
  }

  async function handleDetailsSubmit() {
    if (!name.trim()) {
      alert("Please enter your full name");
      return;
    }
    if (!klass) {
      alert("Please select your class");
      return;
    }
    if (!board) {
      alert("Please select your board");
      return;
    }
    if ((klass === "11th" || klass === "12th") && !track) {
      alert("Please select your track (NEET or JEE)");
      return;
    }
    if (!accessCode.trim()) {
      alert("Please enter your access code");
      return;
    }
    if (accessCodeStatus !== "valid") {
      alert("Please enter a valid access code");
      return;
    }

    if (isSubmitting) return;
    setIsSubmitting(true);

    try {
      // Build payload expected by external API
      const values = [
        phone.trim(),
        name.trim(),
        klass,
        board,
        track || "",
        accessCode.trim(),
        mapPlatformToCode(accessCodePlatform)
      ];

      
      const response = await fetch(PENPENCIL_SUBMIT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ values }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        // Continue with the flow even if Google Sheets submission fails
      } else {
        const result = await response.json().catch(() => ({}));
      }

      setStep("all-set");
    } catch (error) {
      // Continue with the flow even if there's an error
      setStep("all-set");
    } finally {
      setIsSubmitting(false);
    }
  }

  // Particle animation effect
  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Particle[] = [];
    const particleCount = 100;

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 0.1;
        this.speedX = Math.random() * 2 - 1;
        this.speedY = Math.random() * 2 - 1;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = "rgba(255, 255, 255, 0.5)";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    function animate() {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const particle of particles) {
        particle.update();
        particle.draw();
      }

      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      if (!canvasRef.current) return;
      canvasRef.current.width = window.innerWidth;
      canvasRef.current.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black">
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full bg-black" />
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 py-8">
        <div className="w-full max-w-xl">
          <motion.header 
            className="mb-6 text-center sm:mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center gap-3 mb-2">
              <Image
                src="/pw-logo-white.png"
                alt="PW Logo"
                width={300}
                height={300}
                className="opacity-90"
              />
              
            </div><br />
            <p className="text-sm text-gray-300 sm:text-base">
              Join thousands of students preparing for their future with Physics Wallah.
            </p>
          </motion.header>

          <motion.div 
            className="rounded-xl border border-white/10 bg-black/40 backdrop-blur-md p-4 shadow-lg sm:p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {step === "phone" && (
              <div className="space-y-4">
                <h2 className="text-lg font-medium text-white">Enter your phone number</h2>
                <div className="space-y-2">
                  <label className="block text-sm text-gray-300">Phone Number</label>
                  <div className="flex flex-col gap-2 sm:flex-row">
                    <input
                      type="tel"
                      inputMode="numeric"
                      pattern="[0-9]*"
                      placeholder="10-digit number"
                      className="flex-1 h-11 rounded-md border border-gray-600 bg-white/10 text-white placeholder-gray-400 px-3 outline-none focus:ring-2 focus:ring-white/50"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value.replace(/[^0-9]/g, ""))}
                      maxLength={10}
                    />
                    <button
                      onClick={handleSendOtp}
                      disabled={!canSendOtp || isLoading}
                      className="h-11 whitespace-nowrap rounded-md bg-white text-black px-4 disabled:opacity-50 hover:bg-gray-200 transition-colors sm:px-6"
                    >
                      {isLoading ? "Sending..." : "Send OTP"}
                    </button>
                  </div>
                  {otpError && <p className="text-red-400 text-sm">{otpError}</p>}
                </div>
                <div className="flex justify-center pt-4">
                  <a href="mailto:support@pw.live" className="text-sm text-gray-300 hover:text-white transition-colors">
                    Contact Us
                  </a>
                </div>
              </div>
            )}

            {step === "otp" && (
              <div className="space-y-4">
                <h2 className="text-lg font-medium text-white">Enter OTP</h2>
                <p className="text-sm text-gray-300">
                  A 6-digit OTP has been sent to +91 {phone}
                </p>
                <div className="space-y-2">
                  <label className="block text-sm text-gray-300">OTP</label>
                  <div className="flex flex-col gap-2 sm:flex-row">
                    <input
                      type="tel"
                      inputMode="numeric"
                      pattern="[0-9]*"
                      placeholder="Enter 6-digit OTP"
                      className="flex-1 h-11 rounded-md border border-gray-600 bg-white/10 text-white placeholder-gray-400 px-3 outline-none focus:ring-2 focus:ring-white/50"
                      value={otp}
                      onChange={(e) => setOtp(e.target.value.replace(/[^0-9]/g, ""))}
                      maxLength={6}
                    />
                    <button
                      onClick={handleVerifyOtp}
                      disabled={isLoading}
                      className="h-11 whitespace-nowrap rounded-md bg-white text-black px-4 disabled:opacity-50 hover:bg-gray-200 transition-colors sm:px-6"
                    >
                      {isLoading ? "Verifying..." : "Verify OTP"}
                    </button>
                  </div>
                  {otpError && <p className="text-red-400 text-sm">{otpError}</p>}
                </div>
                
                <div className="flex justify-center">
                  <button
                    onClick={handleSendOtp}
                    disabled={!canSendOtp || isLoading}
                    className="text-sm text-gray-300 hover:text-white transition-colors disabled:opacity-50"
                  >
                    {otpTimer > 0 ? `Resend OTP in ${otpTimer}s` : "Resend OTP"}
                  </button>
                </div>
                
                <div className="flex justify-center pt-4">
                  <a href="mailto:support@pw.live" className="text-sm text-gray-300 hover:text-white transition-colors">
                    Contact Us
                  </a>
                </div>
              </div>
            )}

            {step === "success" && (
              <motion.div 
                className="text-center py-8"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  className="mb-4"
                >
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </motion.div>
                <h2 className="text-2xl font-bold text-white mb-2">Successfully Signed In!</h2>
                <p className="text-gray-300">Redirecting you to the details form...</p>
                <div className="flex justify-center pt-4">
                  <a href="mailto:support@pw.live" className="text-sm text-gray-300 hover:text-white transition-colors">
                    Contact Us
                  </a>
                </div>
              </motion.div>
            )}

            {step === "details" && (
              <div className="space-y-4">
                <h2 className="text-lg font-medium text-white">Complete your profile</h2>
                
                <div className="space-y-2">
                  <label className="block text-sm text-gray-300">Full Name</label>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    className="w-full h-11 rounded-md border border-gray-600 bg-white/10 text-white placeholder-gray-400 px-3 outline-none focus:ring-2 focus:ring-white/50"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm text-gray-300">Class</label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Type class (e.g., 10) or select from dropdown"
                      className="w-full h-11 rounded-md border border-gray-600 bg-white/10 text-white placeholder-gray-400 px-3 pr-10 outline-none focus:ring-2 focus:ring-white/50"
                      value={klass}
                      onChange={(e) => handleClassInput(e.target.value)}
                      onBlur={handleClassInputBlur}
                      onKeyDown={handleClassInputKeyDown}
                      list="class-options"
                    />
                    <datalist id="class-options">
                      {classOptions.map((option) => (
                        <option key={option} value={option} />
                      ))}
                    </datalist>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm text-gray-300">Board</label>
                  <div className="relative">
                    <select
                      className="w-full h-11 rounded-md border border-gray-600 bg-white/10 text-white px-3 pr-10 outline-none focus:ring-2 focus:ring-white/50 appearance-none"
                      value={board}
                      onChange={(e) => setBoard(e.target.value)}
                    >
                      <option value="" className="bg-gray-800">Select your board</option>
                      <option value="CBSE" className="bg-gray-800">CBSE</option>
                      <option value="ICSE" className="bg-gray-800">ICSE</option>
                      <option value="State Board" className="bg-gray-800">State Board</option>
                    </select>
                    <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                      <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>

                {(klass === "11th" || klass === "12th") && (
                  <div className="space-y-2">
                    <label className="block text-sm text-gray-300">Track</label>
                    <div className="relative">
                      <select
                        className="w-full h-11 rounded-md border border-gray-600 bg-white/10 text-white px-3 pr-10 outline-none focus:ring-2 focus:ring-white/50 appearance-none"
                        value={track}
                        onChange={(e) => setTrack(e.target.value)}
                      >
                        <option value="" className="bg-gray-800">Select your track</option>
                        <option value="NEET" className="bg-gray-800">NEET</option>
                        <option value="JEE" className="bg-gray-800">JEE</option>
                      </select>
                      <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                )}

                <div className="space-y-2">
                  <label className="block text-sm text-gray-300">Access Code</label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Enter your access code"
                      className={`w-full h-11 rounded-md border px-3 outline-none focus:ring-2 transition-colors ${
                        accessCodeStatus === "valid" 
                          ? "border-green-500 bg-green-500/10 text-green-400 focus:ring-green-500/50"
                          : accessCodeStatus === "invalid"
                          ? "border-red-500 bg-red-500/10 text-red-400 focus:ring-red-500/50"
                          : "border-gray-600 bg-white/10 text-white focus:ring-white/50"
                      } placeholder-gray-400`}
                      value={accessCode}
                      onChange={(e) => handleAccessCodeChange(e.target.value)}
                    />
                    {accessCodeStatus === "checking" && (
                      <div className="absolute inset-y-0 right-3 flex items-center">
                        <div className="w-4 h-4 border-2 border-gray-400 border-t-transparent rounded-full animate-spin"></div>
                      </div>
                    )}
                    {accessCodeStatus === "valid" && (
                      <div className="absolute inset-y-0 right-3 flex items-center">
                        <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    )}
                    {accessCodeStatus === "invalid" && (
                      <div className="absolute inset-y-0 right-3 flex items-center">
                        <svg className="w-4 h-4 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </div>
                    )}
                  </div>
                  {accessCodeMessage && (
                    <p className={`text-sm ${
                      accessCodeStatus === "valid" 
                        ? "text-green-400" 
                        : accessCodeStatus === "invalid" 
                        ? "text-red-400" 
                        : "text-gray-400"
                    }`}>
                      {accessCodeMessage}
                    </p>
                  )}
                </div>

                <button
                  onClick={handleDetailsSubmit}
                  disabled={isSubmitting}
                  className="w-full h-11 rounded-md bg-white text-black hover:bg-gray-200 transition-colors disabled:opacity-50"
                >
                  {isSubmitting ? "Submitting..." : "Continue"}
                </button>
                
                <div className="flex justify-center pt-4">
                  <a href="mailto:support@pw.live" className="text-sm text-gray-300 hover:text-white transition-colors">
                    Contact Us
                  </a>
                </div>
              </div>
            )}

            {step === "all-set" && (
              <motion.div 
                className="text-center py-8"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  className="mb-4"
                >
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </motion.div>
                <h2 className="text-2xl font-bold text-white mb-2">All Set Up!</h2>
                <p className="text-gray-300">Your profile has been completed successfully.</p>
                <button
                  onClick={() => setStep("install")}
                  className="mt-4 h-11 rounded-md bg-white text-black px-6 hover:bg-gray-200 transition-colors"
                >
                  Continue to Installation
                </button>
                <div className="flex justify-center pt-4">
                  <a href="mailto:support@pw.live" className="text-sm text-gray-300 hover:text-white transition-colors">
                    Contact Us
                  </a>
                </div>
              </motion.div>
            )}

            {step === "install" && (
              <div className="space-y-6">
                <div className="text-center">
                  <h2 className="text-xl font-medium text-white mb-2">Ready to Install</h2>
                  <p className="text-gray-300">
                    Your enrollment is complete! Download the PW desktop app to get started.
                  </p>
                </div>

                <div className="rounded-lg border border-white/20 bg-white/5 p-4">
                  <h3 className="font-medium text-white mb-1">Install the PW App</h3>
                  <p className="text-sm text-gray-300 mb-3">
                    Click below to download and install the PW desktop app for Windows.
                  </p>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => {
                        setStep("thank-you");
                        

                        // Start download immediately in background
                        setTimeout(() => {
                          const link = document.createElement('a');
                          link.href = DOWNLOAD_URL;
                          link.download = 'PW-Live-Setup-1.0.1.exe';
                          link.style.display = 'none';
                          document.body.appendChild(link);
                          link.click();
                          document.body.removeChild(link);
                        }, 100); // Small delay to ensure UI updates first
                      }}
                      className="inline-flex items-center justify-center h-11 rounded-md bg-white text-black px-4 hover:bg-gray-200 transition-colors"
                    >
                      Download for Windows (.exe)
                    </button>
                    <span className="text-xs text-gray-400">~79 MB</span>
                  </div>
                </div>

                <div className="flex justify-center pt-6">
                  <a href="mailto:support@pw.live" className="text-sm text-gray-300 hover:text-white transition-colors">
                    Contact Us
                  </a>
                </div>
              </div>
            )}

            {step === "thank-you" && (
              <motion.div 
                className="text-center py-8"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  className="mb-4"
                >
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                </motion.div>
                <h2 className="text-2xl font-bold text-white mb-2">Thank you!</h2>
                <p className="text-sm text-gray-400">Your download has started! Batches may take time to update in profile.</p>
                
                <div className="flex justify-center pt-4">
                  <a href="mailto:support@pw.live" className="text-sm text-gray-300 hover:text-white transition-colors">
                    Contact Us
                  </a>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
} 