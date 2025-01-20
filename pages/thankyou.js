import { useState, useRef, useEffect } from "react"
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

export default function thankyou() {
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
    const orderDetail = {
        "name": "Jasmeet",
        "Pre-Order ID": "PWPB20241027-001",
        "Payment Amount": "₹100",
        "Payment Method": "UPI",
        "Date & Time": "14 Jan 2024 1:15 PM"
    }
    return (
        <>
            <header className='sm:flex hidden bg-[#1A1A1A] w-full  absolute py-4 items-center justify-center'>
                <img src='/Logo.svg' />
                <span className='text-white'>by Pyhics Wallah</span>
            </header>


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


            <div className="bg-bgColor h-screen w-full  flex justify-center items-center">
                <div className="flex flex-col gap-4 justify-center items-center">
                    <img src="/thankyouGifPi.gif" className="w-52 h-52" />
                    <div className="text-white flex flex-col justify-center gap-2 items-center w-[70%]">
                        <p className="text-xl sm:text-3xl md:text-4xl lg:text-4xl  font-bold bg-gradient-to-r from-textGradientLeft to-textGradientRight inline-block text-transparent bg-clip-text">Your PiBook is Pre-ordered</p>

                        {/* <p >Your PiBook is Pre-ordered.</p> */}
                        <p className="text-center text-xs sm:text-xl my-6">Your pre-order is confirmed! You'll receive a confirmation email or text with your pre-order details. We'll keep you updated on the launch date and shipping information.</p>
                    </div>

                    <div className="text-white text-center flex flex-col gap-2">
                        <p className="font-semibold text-sm sm:text-xl">Username  :  <span className="font-normal"> {orderDetail.name}</span></p>
                        <p className="font-semibold text-sm sm:text-xl" >Pre-Order ID : <span className="font-normal"> {orderDetail["Pre-Order ID"]}</span></p>
                        <p className="font-semibold text-sm sm:text-xl">Payment Amount : <span className="font-normal"> {orderDetail["Payment Amount"]}</span></p>
                        <p className="font-semibold text-sm sm:text-xl">Payment Method : <span className="font-normal"> {orderDetail["Payment Method"]}</span></p>
                        <p className="font-semibold text-sm sm:text-xl">Date & Time : <span className="font-normal"> {orderDetail["Date & Time"]}</span></p>
                    </div>
                </div>

            </div>
        </>
    )
}