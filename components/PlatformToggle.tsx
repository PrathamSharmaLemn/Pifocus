"use client"

import { useState } from "react"
import Image from "next/image"

export function PlatformToggle() {
  const [selectedPlatform, setSelectedPlatform] = useState<"windows" | "android">("windows")

  return (
    <div className="flex flex-col items-center gap-4">
      <h2 className="text-2xl font-semibold text-gray-900">Why PiFocus?</h2>

      {/* Platform Toggle Buttons */}
      <div className="relative">
        <Image
          src="/images/wind-and-thing.png"
          alt="Platform toggle"
          width={200}
          height={50}
          className="w-auto h-auto"
        />
        <div className="absolute inset-0 flex">
          <button
            onClick={() => setSelectedPlatform("windows")}
            className={`flex-1 text-sm font-medium transition-colors ${
              selectedPlatform === "windows" ? "text-black" : "text-gray-500 hover:text-gray-700"
            }`}
          >
            Windows
          </button>
          <button
            onClick={() => setSelectedPlatform("android")}
            className={`flex-1 text-sm font-medium transition-colors ${
              selectedPlatform === "android" ? "text-white" : "text-gray-400 hover:text-gray-200"
            }`}
          >
            Android
          </button>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="relative w-full max-w-4xl">
        {/* Paper Airplane */}
        <div className="absolute -top-8 right-8 z-10">
          <Image
            src="/images/nine-eleven-thing.png"
            alt="Paper airplane"
            width={60}
            height={40}
            className="w-auto h-auto"
          />
        </div>

        {/* Dashed Line */}
        <div className="absolute -top-4 right-16 z-5">
          <Image src="/images/line-thing.png" alt="Decorative line" width={120} height={60} className="w-auto h-auto" />
        </div>
      </div>
    </div>
  )
}
