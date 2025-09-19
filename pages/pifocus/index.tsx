import React, { useEffect, useState } from 'react';
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import { motion } from "framer-motion"
import Head from "next/head"

export default function HomePage() {
  const router = useRouter()

  const [selectedPlatform, setSelectedPlatform] = useState<"windows" | "android">("windows")
  const [activeModal, setActiveModal] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState<'parent' | 'child'>('parent')
  const [mobileOpen, setMobileOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    email: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')
  const [showOfferToast, setShowOfferToast] = useState(false)
  const [showPaymentToast, setShowPaymentToast] = useState(false)
  const [paymentToastType, setPaymentToastType] = useState<'success' | 'failed'>('success')

  useEffect(() => {
    if (typeof window === 'undefined') return
    const params = new URLSearchParams(window.location.search)
    if (params.get('offer') === 'applied') {
      setShowOfferToast(true)
      const timer = setTimeout(() => setShowOfferToast(false), 7000)
      return () => clearTimeout(timer)
    }
    if (params.get('payment') === 'success') {
      setPaymentToastType('success')
      setShowPaymentToast(true)
      const timer = setTimeout(() => setShowPaymentToast(false), 7000)
      return () => clearTimeout(timer)
    }
    if (params.get('payment') === 'failed') {
      setPaymentToastType('failed')
      setShowPaymentToast(true)
      const timer = setTimeout(() => setShowPaymentToast(false), 7000)
      return () => clearTimeout(timer)
    }
  }, [])

  const openModal = (modalType: string) => {
    setActiveModal(modalType)
  }

  const closeModal = () => {
    setActiveModal(null)
    setFormData({ name: '', contact: '', email: '' })
    setSubmitMessage('')
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage('')

    try {
      const response = await fetch('https://api.penpencil.co/pi-os-backend/v1/user/mdm-demo-request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          values: [formData.name, formData.contact, formData.email]
        })
      })

      if (response.ok) {
        setSubmitMessage('Demo request submitted successfully! We\'ll contact you soon.')
        setFormData({ name: '', contact: '', email: '' })
        setTimeout(() => {
          closeModal()
        }, 2000)
      } else {
        setSubmitMessage('Failed to submit request. Please try again.')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitMessage('Network error. Please check your connection and try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Reddit+Sans:wght@400;500;700&display=swap" rel="stylesheet" />
      </Head>
      <div className="w-screen overflow-x-hidden"
      style={{
        backgroundImage: 'url(/focusHome.png)',
        backgroundSize: 'cover',        // scales to fill
        backgroundPosition: 'top center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'scroll',
        fontFamily: "'Reddit Sans', ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, 'Helvetica Neue', Arial, 'Noto Sans', 'Apple Color Emoji', 'Segoe UI Emoji'"
      }}

      >

      {/* Offer Applied Toast */}
      {showOfferToast && (
        <div className="fixed top-4 left-1/2 -translate-x-1/2 z-[60]">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="relative px-6 py-4 bg-white text-green-700 rounded-xl shadow-lg overflow-hidden border-2"
            style={{ borderColor: '#10B981' }}
          >
            <motion.div
              className="absolute inset-0 rounded-xl pointer-events-none"
              style={{ borderRadius: 12, borderWidth: 2, borderStyle: 'solid' }}
              animate={{
                borderColor: ['#10B981', '#34D399', '#059669', '#22C55E', '#10B981'],
                boxShadow: [
                  '0 0 12px rgba(16,185,129,0.3)',
                  '0 0 16px rgba(52,211,153,0.4)',
                  '0 0 12px rgba(5,150,105,0.35)',
                  '0 0 16px rgba(34,197,94,0.4)',
                  '0 0 12px rgba(16,185,129,0.3)'
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <p className="relative z-10 font-medium">Offer Applied! Your Coupon Code will be verified in under 24 hours. Download the app now!</p>
          </motion.div>
        </div>
      )}

      {/* Payment Toast */}
      {showPaymentToast && (
        <div className="fixed top-4 left-1/2 -translate-x-1/2 z-[60]">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className={`relative px-6 py-4 bg-white rounded-xl shadow-lg overflow-hidden border-2 ${
              paymentToastType === 'success' ? 'text-green-700' : 'text-red-700'
            }`}
            style={{ borderColor: paymentToastType === 'success' ? '#10B981' : '#EF4444' }}
          >
            <motion.div
              className="absolute inset-0 rounded-xl pointer-events-none"
              style={{ borderRadius: 12, borderWidth: 2, borderStyle: 'solid' }}
              animate={paymentToastType === 'success' ? {
                borderColor: ['#10B981', '#34D399', '#059669', '#22C55E', '#10B981'],
                boxShadow: [
                  '0 0 12px rgba(16,185,129,0.3)',
                  '0 0 16px rgba(52,211,153,0.4)',
                  '0 0 12px rgba(5,150,105,0.35)',
                  '0 0 16px rgba(34,197,94,0.4)',
                  '0 0 12px rgba(16,185,129,0.3)'
                ]
              } : {
                borderColor: ['#EF4444', '#F87171', '#DC2626', '#B91C1C', '#EF4444'],
                boxShadow: [
                  '0 0 12px rgba(239,68,68,0.3)',
                  '0 0 16px rgba(248,113,113,0.4)',
                  '0 0 12px rgba(220,38,38,0.35)',
                  '0 0 16px rgba(185,28,28,0.4)',
                  '0 0 12px rgba(239,68,68,0.3)'
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <p className="relative z-10 font-medium">
              {paymentToastType === 'success' 
                ? "Your Payment has been received. Download the App now to receive your free 1-month trial"
                : "Payment Failed. Contact support if this was an issue."
              }
            </p>
          </motion.div>
        </div>
      )}

      {/* Main content with background */}
      <div className="-bottom-5 relative z-10">
        {/* Content with relative positioning */}
        <div className="-bottom-5 relative z-10">
        {/* Header */}
        <header className="container mx-auto px-4 py-6 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Image
              src="/pifocus-logo-black.png"
              alt="PiFocus Logo"
              width={120}
              height={40}
              className="h-6 w-auto md:h-8 "
              
            />
          </div>
          <nav className="hidden md:flex items-center space-x-8">

          <Link href="/pifocus/pricing" className="block text-gray-600 hover:text-gray-900 transition-colors">
                    Pricing
          </Link>

            <button 
              onClick={() => openModal('demo')}
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Request a Demo
            </button>
            <button 
              onClick={() => openModal('documents')}
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Documents
            </button>
            <button 
              onClick={() => openModal('download')}
              className="bg-black text-white hover:bg-gray-800 rounded-xl px-4 py-2 font-medium transition-colors"
            >
              Download App
            </button>
          </nav>
          {/* Mobile hamburger */}
          <button onClick={() => setMobileOpen(v => !v)} className="md:hidden p-2 rounded-lg border border-gray-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
          </button>
          {mobileOpen && (
            <div className="md:hidden absolute right-4 top-16 z-50 w-56 rounded-xl bg-white shadow-lg ring-1 ring-black/5 p-2">
              <button onClick={() => { setMobileOpen(false); router.push('/pifocus/pricing'); }} className="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-100">Pricing</button>
              <button onClick={() => { setMobileOpen(false); openModal('demo'); }} className="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-100">Request a Demo</button>
              <a href="/installationGuideMDM.pdf" target="_blank" className="block px-4 py-2 rounded-lg hover:bg-gray-100">Installation Guide</a>
              <button onClick={() => { setMobileOpen(false); openModal('download'); }} className="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-100">Download</button>
            </div>
          )}
        </header><br /><br /><br />

        {/* Hero Section */}
        <section className="container mx-auto px-4 py-24 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold text-gray-900 mb-6 text-balance">
              Parenting made effortless
              <br />
              Learning made <span className="text-blue-600">focused.</span>
            </h1>
            <p className="hidden md:block text-xl text-gray-600 mb-12 max-w-3xl mx-auto text-pretty">
              Your smart parenting partner that keeps you connected to your child's digital world, even when you're not
              around. Whether it's work, chores, or other commitments, PiFocus ensures you never miss guiding their
              growth.
            </p>
           

            <div className="relative max-w-6xl mx-auto mb-10 md:mb-16 flex items-center justify-center">
              {/* Scale on the left with more spacing */}
              <div className="absolute left-[-40px] top-1/2 -translate-y-1/2 z-10 hidden md:block">
                {/* <Image
                  src="/ScaleThing.png"
                  alt="Scale decoration"
                  width={100}
                  height={350}
                  className="w-[140px] h-auto" 
                /> */}
              </div>

              {/* Main hero image - smaller and moved right with more spacing */}
              <div className="md:ml-20">
                <Image
                  src="/phone-laptop-2.png"
                  alt="PiFocus devices showing parental control interface"
                  width={600}
                  height={380}
                  className="w-full max-w-[320px] sm:max-w-[480px] md:max-w-[700px] h-auto mx-auto"
                />
              </div>
              
              
              <div className="sm:hidden absolute top-[460px] h-24  right-[-300px] hidden md:flex">
                
                <Image
                  src="/NineElevenThing.png"
                  alt="Paper airplane"
                  width={120}
                  height={10}
                  className="z-10"
                />
              
                {/* Jetstream line positioned at bottom right of plane */}
                <div className="relative ml-[-10px] mt-[-5px]">
                  <Image
                    src="/LineThing.png"
                    alt="Jetstream line"
                    width={300}
                    height={400}
                    className="h-auto w-full relative left-18 top-[-176px] right-18 "
                  />
                  </div>
                </div>
              
            </div>

             <div className="mb-24">
               <h2 className="text-3xl font-bold text-gray-900 mb-10 ">Why PiFocus?</h2>
              <div className="flex justify-center">
                <div className="flex bg-black rounded-2xl p-1 shadow-lg">
                  <button onClick={() => setSelectedPlatform("windows")} className={`px-8 py-2 rounded-xl font-medium ${selectedPlatform == "windows" ? "bg-white text-black" : "bg-transparent text-white"}`}>Windows</button>
                  <button onClick={() => setSelectedPlatform("android")} className={`px-8 py-2 rounded-xl font-medium ${selectedPlatform == "android" ? "bg-white text-black" : "bg-transparent text-white"}`}>Android</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="container mx-auto px-4 py-10 space-y-20  ">
          {/* Paper airplane with jetstream line positioned above Easy Child Switching */}
          {/* <div className="relative mb-0">
            <div className="absolute -top-8 right-1 bottom-[-100px] -translate-y-10">
             
            </div>
          </div> */}

          {/* Easy Child Switching - Phone on Right */}
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto relative">
            <div className="space-y-6">
              <h3 className="text-3xl md:text-4xl px-4 md:px-0 font-bold text-blue-600">Easy Child Switching</h3>
              <p className="text-lg px-4 md:px-0 text-gray-700 leading-relaxed">
                Manage learning for all your kids in one place. Simply pick a child's profile from the dropdown and
                instantly view their personalized stats and activity.
              </p>
            </div>
            <div className="flex justify-center lg:justify-end">
              {selectedPlatform == "windows" ? <Image
                src="/W1.png" 
                alt="Child switching interface"
                width={280}
                height={560}
                className="max-w-full h-auto"
              />: <Image
                src="/A1.png" 
                alt="Child switching interface"
                width={280}
                height={560}
                className="max-w-full h-auto"
              />}
            </div>
            <div className="absolute -bottom-1 left-0 right-0">
              <Image
                src="/PhoneLineThing.png"
                alt="Phone decoration"
                width={1200}
                height={40}
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Device Health & Control - Phone on Left */}
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto relative">
            <div className="flex justify-center lg:justify-start order-2 lg:order-1">
              {selectedPlatform == "windows" ?
              <Image
                src="/W2.png"
                alt="Device health and control interface"
                width={280}
                height={560}
                className="max-w-full h-auto"
              /> :
              <Image
                src="/A2.png"
                alt="Device health and control interface"
                width={280}
                height={560}
                className="max-w-full h-auto"
              />}
            </div>
            <div className="space-y-6 order-1 lg:order-2">
              <h3 className=" text-3xl md:text-4xl px-4 md:px-0 font-bold text-blue-600">Device Health & Control</h3>
              <p className="text-lg px-4 md:px-0 text-gray-700 leading-relaxed">
                Stay updated on your child's device status — see if it's active, battery level, and charging status.
                Parents can lock the device or USB ports when focus time is needed.
              </p>
            </div>
            <div className="absolute -bottom-1 left-0 right-0 rotate-180">
              <Image
                src="/PhoneLineThing.png"
                alt="Phone decoration"
                width={1200}
                height={40}
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Smart App Management - Phone on Right */}
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto relative">
            <div className="space-y-6">
              <h3 className="text-3xl px-4 md:px-0 md:text-4xl font-bold text-blue-600">Smart App Management</h3>
              <p className="text-lg px-4 md:px-0 text-gray-700 leading-relaxed">
                Guide your child's digital habits. Block distracting apps or set time limits to encourage a healthy
                balance between study and play.
              </p>
            </div>
            <div className="flex justify-center lg:justify-end">
              <Image
                src="/W3.png"
                alt="App management interface"
                width={280}
                height={560}
                className="max-w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-1 left-0 right-0">
              <Image
                src="/PhoneLineThing.png"
                alt="Phone decoration"
                width={1200}
                height={40}
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Live View & Quick Assist - Phone on Left */}
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto relative">
            <div className="flex justify-center lg:justify-start order-2 lg:order-1">
              <Image
                src="/W4.png"
                alt="Live view and quick assist interface"
                width={280}
                height={560}
                className="max-w-full h-auto"
              />
            </div>
            <div className="space-y-6 order-1 lg:order-2">
              <h3 className="text-3xl px-4 md:px-0 md:text-4xl font-bold text-blue-600">Live View & Quick Assist</h3>
              <p className="text-lg px-4 md:px-0 text-gray-700 leading-relaxed">
                Check in when needed with live screen view, instant screenshots, or by enabling sound around the device.
                Designed for peace of mind and quick assistance.
              </p>
            </div>
            <div className="absolute -bottom-1 left-0 right-0 rotate-180">
              <Image
                src="/PhoneLineThing.png"
                alt="Phone decoration"
                width={1200}
                height={40}
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Safe Browsing & Communication - Phone on Right */}
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto relative">
            <div className="space-y-6">
              <h3 className="text-3xl px-4 md:px-0 md:text-4xl font-bold text-blue-600">Safe Browsing & Communication</h3>
              <p className="text-lg px-4 md:px-0 text-gray-700 leading-relaxed">
                Keep online learning safe with browser protection that blocks unwanted sites. Stay connected through
                built-in audio and video calling features.
              </p>
            </div>
            <div className="flex justify-center lg:justify-end">
              <Image
                src="/W5.png"
                alt="Safe browsing interface"
                width={280}
                height={560}
                className="max-w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-1 left-0 right-0">
              <Image
                src="/PhoneLineThing.png"
                alt="Phone decoration"
                width={1200}
                height={40}
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Screen Time Insights - Phone on Left */}
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto relative">
            <div className="flex justify-center lg:justify-start order-2 lg:order-1">
              <Image
                src="/W6.png"
                alt="Screen time insights interface"
                width={280}
                height={560}
                className="max-w-full h-auto"
              />
            </div>
            <div className="space-y-6 order-1 lg:order-2">
              <h3 className="text-3xl px-4 md:px-0 md:text-4xl font-bold text-blue-600">Screen Time Insights</h3>
              <p className="text-lg px-4 md:px-0 text-gray-700 leading-relaxed">
                Understand your child's usage with clear analytics — see time spent on apps and identify the most-used
                ones to encourage mindful screen time.
              </p>
            </div>
            <div className="absolute -bottom-1 left-0 right-0 rotate-180">
              <Image
                src="/PhoneLineThing.png"
                alt="Phone decoration"
                width={1200}
                height={40}
                className="w-full h-auto"
              />
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="container mx-auto px-4 py-24">
          <h2 className="text-3xl font-bold text-center text-gray-900 mt-20 mb-10">Hear from our users</h2>
          <div className=''>
          <div className=" grid md:grid-cols-1 lg:grid-cols-2 gap-6">
            {[1, 2].map((index) => (
              <div key={index} className="bg-gray-600 text-white border-0 overflow-hidden rounded-2xl relative">
                <div className="p-0">
                  {/* Blurred background content */}
                  <div className="blur-sm opacity-30">
                    <div className="h-60 w-60 relative mb-4 bg-gray-400"></div>
                    <div className="p-6 pt-0">
                      <div className="h-6 bg-gray-400 rounded mb-2 w-3/4"></div>
                      <div className="h-4 bg-gray-400 rounded mb-3 w-1/2"></div>
                      <div className="space-y-2">
                        <div className="h-3 bg-gray-400 rounded w-full"></div>
                        <div className="h-3 bg-gray-400 rounded w-4/5"></div>
                        <div className="h-3 bg-gray-400 rounded w-3/4"></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Lock overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
                    <img
                      src="/lockDiv.png"
                      alt="Locked content"
                      className="w-16 h-16 opacity-90"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
          </div>

          {/* Pagination dots */}
          {/* <div className=" flex justify-center mb-8 space-x-2">
            <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
            <div className="w-2 h-2 bg-gray-800 rounded-full"></div>
          </div> */}
        </section>
        </div>
      </div>

      {/* Footer - Outside background container */}
      <footer className=" bg-black text-white py-16 mt-40">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8">
              <div className="md:col-span-2">
                <Image
                  src="/pifocus-logo-black.png"
                  alt="PiFocus Logo"
                  width={120}
                  height={40}
                  className="h-8 w-auto mb-6 filter invert"
                />
                <p className="text-gray-300 mb-6 max-w-md text-pretty">
                  We understand that every student has different learning needs and preferences. That's why we've built
                  PiFocus to be flexible and adaptable to fit every student.
                </p>
                {/* <div className="flex space-x-4">
                  <Link href="#" className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                    <span className="text-black text-sm">f</span>
                  </Link>
                  <Link href="#" className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                    <span className="text-black text-sm">t</span>
                  </Link>
                  <Link href="#" className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                    <span className="text-black text-sm">in</span>
                  </Link>
                  <Link href="#" className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                    <span className="text-black text-sm">ig</span>
                  </Link>
                </div> */}
              </div>

              <div>
                <h4 className="font-semibold mb-4">Other Links</h4>
                <div className="space-y-2">
                  <Link href="https://www.pw.live/" target="_blank" rel="noopener noreferrer" className="block text-gray-300 hover:text-white transition-colors">
                    PW Live
                  </Link>
                  <Link href="https://pibook.pw.live/" target="_blank" rel="noopener noreferrer" className="block text-gray-300 hover:text-white transition-colors">
                    PiBook
                  </Link>
                  <Link href="https://store.pw.live/" target="_blank" rel="noopener noreferrer" className="block text-gray-300 hover:text-white transition-colors">
                    PW Store
                  </Link>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4">Follow us</h4>
                <div className="space-y-2">
                  <Link href="/pifocus/privacy-policy" className="block text-gray-300 hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                  {/* <Link href="#" className="block text-gray-300 hover:text-white transition-colors">
                    Terms & Conditions
                  </Link> */}
                  <a href="mailto:pibook@pw.live">
                  <p className="text-gray-300">Contact us: pibook@pw.live</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>

        {/* Modal Overlay */}
        {activeModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 relative">
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-white hover:bg-gray-700 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Documents Modal */}
              {activeModal === 'documents' && (
                <div className="text-center">
                  <h2 className="text-2xl font-bold text-gray-900 mb-8">Documents</h2>
                  <div className="space-y-4 mb-16">
                    <a href= "/installationGuideMDM.pdf" download="InstallationGuide.pdf" className="w-full flex items-center justify-between px-6 py-4 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                        </div>
                        <span className="text-gray-700 font-medium">Installation Guide</span>
                      </div>
                      <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </a>
                    <a href="/pifocus-user-manual.pdf" download="UserManual.pdf" className="w-full flex items-center justify-between px-6 py-4 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <span className="text-gray-700 font-medium">User Manual</span>
                      </div>
                      <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </a>
                  </div>
                </div>
              )}

              {/* Download App Modal */}
              {activeModal === 'download' && (
                <div className="text-center">
                  <h2 className="text-2xl font-bold text-gray-900 mb-8">Download the App</h2>
                  
                  {/* Tab Selection */}
                  <div className="flex bg-gray-200 rounded-full p-1 mb-8 max-w-xs mx-auto">
                    <button
                      onClick={() => setActiveTab('parent')}
                      className={`flex-1 py-2 px-4 rounded-full text-sm font-medium transition-colors ${
                        activeTab === 'parent'
                          ? 'bg-black text-white shadow-sm'
                          : 'text-gray-600 hover:text-gray-900'
                      }`}
                    >
                      Parent's Mobile
                    </button>
                    <button
                      onClick={() => setActiveTab('child')}
                      className={`flex-1 py-2 px-4 rounded-full text-sm font-medium transition-colors ${
                        activeTab === 'child'
                          ? 'bg-gray-900 text-white shadow-sm'
                          : 'text-gray-600 hover:text-gray-900'
                      }`}
                    >
                      Child's Laptop
                    </button>
                  </div>

                  {/* Download Options */}
                  <div className="space-y-4 mb-16">
                    {activeTab === 'parent' ? (
                      <>
                    <button onClick={() => window.open('https://apps.apple.com/in/app/pibook-parent/id6751042914', '_blank')} className="w-full flex items-center justify-center space-x-3 px-6 py-4 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors">
                      <div className="w-6 h-6  rounded flex items-center justify-center">
                        {/* <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801"/>
                        </svg> */}
                        <Image src="/applepng.png" alt="iOS" width={24} height={24} />
                      </div>
                      <span className="text-gray-700 font-medium">Download for iOS</span>
                      <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </button>
                    <button onClick={() => {
                        const link = document.createElement("a");
                        link.href = "https://d37yir8f8g6stw.cloudfront.net/810da789-e7a0-46ef-87a4-d843b5952e10.apk";
                        link.setAttribute("download", "pibookParent.apk");
                        document.body.appendChild(link);
                        link.click();
                        document.body.removeChild(link);
                      }} 
                    className="w-full flex items-center justify-center space-x-3 px-6 py-4 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors">
                      <div className="w-6 h-6 rounded flex items-center justify-center">
                        <Image src="/androidpng.png" alt="Android" width={24} height={24} />
                      </div>
                      <span className="text-gray-700 font-medium">Download for Android</span>
                      <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </button>
                    </>
                  ) : activeTab === 'child' ? (
                    <>
                    <button className="w-full flex items-center justify-center space-x-3 px-6 py-4 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors">
                      <div className="w-6 h-6  rounded flex items-center justify-center">
                         <Image src="/windowspng.png" alt="Windows" width={24} height={24} />
                        
                      </div>
                      <span className="text-gray-700 font-medium">Download for Windows</span>
                      <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </button>
                    </>
                  ) : null}
                </div>
              </div>
              )}
              {/* Request Demo Modal */}
              {activeModal === 'demo' && (
                <div className="text-center">
                  <h2 className="text-2xl font-bold text-gray-900 mb-8">Request a Demo</h2>
                  <form onSubmit={handleSubmit} className="space-y-4 mb-16">
                    <input
                      type="text"
                      name="name"
                      placeholder="Full Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-100 rounded-lg border-0 focus:ring-2 focus:ring-blue-500 focus:bg-white transition-colors"
                    />
                    <input
                      type="tel"
                      name="contact"
                      placeholder="Contact Number"
                      value={formData.contact}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-100 rounded-lg border-0 focus:ring-2 focus:ring-blue-500 focus:bg-white transition-colors"
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email ID"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-100 rounded-lg border-0 focus:ring-2 focus:ring-blue-500 focus:bg-white transition-colors"
                    />
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gray-900 text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? 'Submitting...' : 'Request Demo'}
                    </button>
                    {submitMessage && (
                      <div className={`text-sm mt-2 ${submitMessage.includes('successfully') ? 'text-green-600' : 'text-red-600'}`}>
                        {submitMessage}
                      </div>
                    )}
                  </form>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  )
}
