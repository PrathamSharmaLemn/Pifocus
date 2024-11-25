import Image from "next/image"
import { Assets } from "../../public/Assests"
import Button from "../button/Button"
import useWindowDimensions from "../../Dimensions"
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";


export default function Header({showBuyNow}) {
  const { width, height } = useWindowDimensions()
  const [menuOpen, setMenuOpen] = useState(false)
  console.log(width, height, "width,height")
  return (
    <>
      
       <div className="sm:hidden block">
        <header className="flex bg-footerBg backdrop-blur-xl  bg-opacity-50 z-50 justify-between items-center py-4 px-10  fixed w-full">
          <div className='leftBox flex flex-row  items-center'>
            <Image
              src={Assets.logo}
              width={30}
              height={30}
              alt="Logo"
            />
            <span className="text-white text-xs ml-2">By Physics Wallah</span>
          </div>
          {!menuOpen && <div className="text-white" onClick={() => { setMenuOpen(!menuOpen) }}>
            <GiHamburgerMenu />
          </div>}

          {menuOpen && <div className="text-white" onClick={() => { setMenuOpen(!menuOpen) }}>
            <IoMdClose />
          </div>}

          
        </header>
        {menuOpen && <div className='fixed top-14 z-50 rounded-md bg-bgColor backdrop-blur-xl right-0 w-1/2 py-2 bg-opacity-50 text-white flex flex-col justify-center items-center gap-4'>
            <span className="hover:cursor-pointer">Home</span>
            <div className="w-16 text-white opacity-15 border-b-2"></div>
            <span className="hover:cursor-pointer">About Us</span>
            <div className="w-16 text-white opacity-15 border-b-2"></div>
            <span className="hover:cursor-pointer">Contact</span>
            {/* <div className="w-16 text-white opacity-15 border-b-2"></div> */}
            <span className="bg-blue-600 p-2 rounded-md text-sm hover:cursor-pointer">Buy Now</span>
          </div>}
        </div>

        

        <header className="sm:flex hidden bg-footerBg bg-opacity-50  backdrop-blur-xl justify-between z-50 items-center py-4 px-20  fixed w-full">
          <div className='leftBox flex flex-row items-center'>
            <Image
              src={Assets.logo}
              width={40}
              height={40}
              alt="Logo"
            />
            <span className="text-white mb-2 ml-2">By Physics Wallah</span>
          </div>
          <div className='text-white flex-row'>
            <span className="mx-2 hover:cursor-pointer">Home</span>
            <span className="mx-4 hover:cursor-pointer">About Us</span>
            <span className="mr-4 hover:cursor-pointer">Contact</span>
            {showBuyNow && <span className="bg-blue-500 p-3 rounded-md text-sm hover:cursor-pointer">Buy Now</span>}
          </div>
        </header>
      
    </>


  )
}
