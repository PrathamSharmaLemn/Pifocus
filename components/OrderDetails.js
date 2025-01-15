import { useState } from "react"
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
export default function OrderDetails() {
    const [menuOpen, setMenuOpen] = useState(false)
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
                    {/* <span onClick={()=>setOpenModal(true)} className="bg-blue-600 p-2 rounded-md text-sm hover:cursor-pointer mt-0">Pre - Book</span> */}
                    {/* <span className="bg-blue-600 p-2 rounded-md text-sm hover:cursor-pointer mt-0">Buy Now</span> */}


                </div>}
            </div>


            <div>
                
            </div>
        </>

    )
}