import { Assets } from "../../public/Assests"
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { useState, useRef, useEffect } from "react";
import ModalForm from "../modal/ModalForm";
import Link from "next/link";


const phone = process.env.NEXT_PUBLIC_PHONENO
export default function Header({ showBuyNow, setOpenModal }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const menuRef = useRef(null);

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setMenuOpen(false)
    }
  };

  useEffect(() => {
    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    // Cleanup on unmount
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen]);
  return (
    <>

      <div className="sm:hidden block">
        <header className="flex bg-footerBg backdrop-blur-xl  bg-opacity-50 z-50 justify-between items-center py-4 px-10  fixed w-full">
          <div className='leftBox flex flex-row  items-center'>
            <img
              // src={Assets.logo}
              src="/Logo.svg"
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
        {menuOpen && <div ref={menuRef} className='fixed top-0 z-50 rounded-md bg-bgColor right-0 w-8/12 h-screen py-2  text-white flex flex-col  items-center gap-4'>
          <div className="w-full items-end ml-2" onClick={() => setMenuOpen(!menuOpen)}><IoMdClose className="w-6 h-6" /></div>
          <div className="h-1/2 flex gap-2 flex-col items-center">
            <span className="hover:cursor-pointer">Home</span>
            <div className="w-16 text-white opacity-15 border-b-2"></div>
            <span className="hover:cursor-pointer">About Us</span>
            <div className="w-16 text-white opacity-15 border-b-2"></div>
            <span className="hover:cursor-pointer">Contact</span>
          </div>
          {/* <Link href="/preorder" className="bg-blue-600 p-2 rounded-md text-sm hover:cursor-pointer mt-0">Pre-Order</Link> */}
          <span onClick={()=>setOpenModal(true)} className="bg-blue-600 p-2 rounded-md text-sm hover:cursor-pointer mt-0">Pre-Order</span>


        </div>}
      </div>



      <header className="sm:flex hidden bg-footerBg bg-opacity-50  backdrop-blur-xl justify-between z-50 items-center py-4 px-20  fixed w-full">
        <div className='leftBox flex flex-row items-center'>
          <img
            // src={Assets.logo}
            src="/Logo.svg"
            width={40}
            height={40}
            alt="Logo"
          />
          <span className="text-white mb-2 ml-2">By Physics Wallah</span>
        </div>
        <div className='text-white flex-row'>
          {/* <span className="mx-2 hover:cursor-pointer">Home</span> */}
          <a href="https://www.pw.live/about-us" target="_blank" className="mx-4 hover:cursor-pointer">About Us</a>
          <span onClick={() => {
            window.open(`https://wa.me/${phone}`)
          }} className="mr-4 hover:cursor-pointer">Contact</span>
          {/* {showBuyNow && <Link href="/preorder" className="bg-blue-500 p-3 rounded-md text-sm hover:cursor-pointer">Pre-Order</Link>} */}
          {showBuyNow && <span onClick={()=>setOpenModal(true)} className="bg-blue-500 p-3 rounded-md text-sm hover:cursor-pointer">Pre-Order</span>}

          {/* {showBuyNow && <ModalForm />} */}

        </div>
      </header>

    </>


  )
}
