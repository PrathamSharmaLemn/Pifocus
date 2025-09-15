import React, { useState } from 'react';
import Image from "next/image"
import Link from "next/link"

export default function HomePage() {

  const [selectedPlatform, setSelectedPlatform] = useState<"windows" | "android">("windows")
  const [activeModal, setActiveModal] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState<'parent' | 'child'>('parent')
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    email: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

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
    <div className="w-screen overflow-x-hidden"
    style={{
      backgroundImage: 'url(/bgPifocus2.png)',
      backgroundSize: 'cover',        // scales to fill
      backgroundPosition: 'top center',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'scroll',
    }}

    >

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
              className="h-8 w-auto"
              
            />
          </div>
          <nav className="hidden md:flex items-center space-x-8">
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
              className="bg-black text-white hover:bg-gray-800 rounded-full px-6 py-2 font-medium transition-colors"
            >
              Download App
            </button>
          </nav>
        </header><br /><br /><br />

        {/* Hero Section */}
        <section className="container mx-auto px-4 py-24 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-2xl sm:text-3xl md:text-6xl font-bold text-gray-900 mb-6 text-balance">
              Parenting made effortless
              <br />
              Learning made <span className="text-blue-600">focused.</span>
            </h1>
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto text-pretty">
              Your smart parenting partner that keeps you connected to your child's digital world, even when you're not
              around. Whether it's work, chores, or other commitments, PiFocus ensures you never miss guiding their
              growth.
            </p>
           

            <div className="relative max-w-6xl mx-auto mb-16 flex items-center justify-center">
              {/* Scale on the left with more spacing */}
              <div className="absolute left-[-40px] top-1/2 -translate-y-1/2 z-10">
                <Image
                  src="/ScaleThing.png"
                  alt="Scale decoration"
                  width={100}
                  height={350}
                  className="w-[140px] h-auto"
                />
              </div>

              {/* Main hero image - smaller and moved right with more spacing */}
              <div className="ml-32">
                <Image
                  src="/phone-laptop.png"
                  alt="PiFocus devices showing parental control interface"
                  width={600}
                  height={380}
                  className="w-[700px] h-auto"
                />
              </div>
              
              
              <div className="absolute top-[460px] h-24  right-[-300px] flex">
                
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
                <div className="flex bg-white rounded-full p-1 shadow-lg">
                  <button onClick={() => setSelectedPlatform("windows")} className={`px-6 py-2 rounded-full font-medium ${selectedPlatform == "windows" ? "bg-black text-white" : "bg-transparent text-black"}`}>Windows</button>
                  <button onClick={() => setSelectedPlatform("android")} className={`px-6 py-2 rounded-full font-medium ${selectedPlatform == "android" ? "bg-black text-white" : "bg-transparent text-black"}`}>Android</button>
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
              <h3 className="text-4xl font-bold text-blue-600">Easy Child Switching</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Manage learning for all your kids in one place. Simply pick a child's profile from the dropdown and
                instantly view their personalized stats and activity.
              </p>
            </div>
            <div className="flex justify-center lg:justify-end">
              {selectedPlatform == "windows" ? <Image
                src="/phone1.png" 
                alt="Child switching interface"
                width={280}
                height={560}
                className="max-w-full h-auto"
              />: <Image
                src="/phoneAndr1.png" 
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
                src="/phone2.png"
                alt="Device health and control interface"
                width={280}
                height={560}
                className="max-w-full h-auto"
              /> :
              <Image
                src="/phoneAndr2.png"
                alt="Device health and control interface"
                width={280}
                height={560}
                className="max-w-full h-auto"
              />}
            </div>
            <div className="space-y-6 order-1 lg:order-2">
              <h3 className="text-4xl font-bold text-blue-600">Device Health & Control</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
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
              <h3 className="text-4xl font-bold text-blue-600">Smart App Management</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Guide your child's digital habits. Block distracting apps or set time limits to encourage a healthy
                balance between study and play.
              </p>
            </div>
            <div className="flex justify-center lg:justify-end">
              <Image
                src="/phone3.png"
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
                src="/phone4.png"
                alt="Live view and quick assist interface"
                width={280}
                height={560}
                className="max-w-full h-auto"
              />
            </div>
            <div className="space-y-6 order-1 lg:order-2">
              <h3 className="text-4xl font-bold text-blue-600">Live View & Quick Assist</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
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
              <h3 className="text-4xl font-bold text-blue-600">Safe Browsing & Communication</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Keep online learning safe with browser protection that blocks unwanted sites. Stay connected through
                built-in audio and video calling features.
              </p>
            </div>
            <div className="flex justify-center lg:justify-end">
              <Image
                src="/phone5.png"
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
                src="/phone6.png"
                alt="Screen time insights interface"
                width={280}
                height={560}
                className="max-w-full h-auto"
              />
            </div>
            <div className="space-y-6 order-1 lg:order-2">
              <h3 className="text-4xl font-bold text-blue-600">Screen Time Insights</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
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
          <div className=" grid md:grid-cols-1 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((index) => (
              <div key={index} className="bg-gray-600 text-white border-0 overflow-hidden rounded-2xl relative">
                <div className="p-0">
                  {/* Blurred background content */}
                  <div className="blur-sm opacity-30">
                    <div className="aspect-square relative mb-4 bg-gray-400"></div>
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
                  <p className="text-gray-300">Contact us: pibook@pw.live</p>
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
                    <a href= "/installation-guide-for-pifocus.pdf" download="InstallationGuide.pdf" className="w-full flex items-center justify-between px-6 py-4 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors">
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
                          ? 'bg-white text-gray-900 shadow-sm'
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
                    <button className="w-full flex items-center justify-center space-x-3 px-6 py-4 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors">
                      <div className="w-6 h-6 bg-blue-500 rounded flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801"/>
                        </svg>
                      </div>
                      <span className="text-gray-700 font-medium">Download for Windows</span>
                      <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </button>
                    <button className="w-full flex items-center justify-center space-x-3 px-6 py-4 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors">
                      <div className="w-6 h-6 bg-green-500 rounded flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993.0001.5511-.4482.9997-.9993.9997m-5.046-13.1054c.5616.0001.8461.6676.4507 1.0574l-2.4993 2.4993c-.1953.1953-.5118.1953-.7071 0l-2.4993-2.4993c-.3954-.3898-.1109-1.0573.4507-1.0574h1.4993v-1.4993c0-.8284.6716-1.4999 1.5-1.4999.8284 0 1.5.6715 1.5 1.4999v1.4993h1.4993zm5.046 4.8657c-3.4518 0-6.2497 2.7979-6.2497 6.2497 0 3.4518 2.7979 6.2497 6.2497 6.2497 3.4518 0 6.2497-2.7979 6.2497-6.2497 0-3.4518-2.7979-6.2497-6.2497-6.2497z"/>
                        </svg>
                      </div>
                      <span className="text-gray-700 font-medium">Download for Android</span>
                      <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </button>
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
  )
}
