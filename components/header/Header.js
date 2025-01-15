import { Assets } from "../../public/Assests"
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { useState, useRef, useEffect } from "react";
import ModalForm from "../modal/ModalForm";
import Link from "next/link";


const phone = process.env.NEXT_PUBLIC_PHONENO
export default function Header({ showBuyNow, setOpenModal }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [ctaOpen, setCtaOpen] = useState(true)
  const menuRef = useRef(null);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Add timer calculation effect
  useEffect(() => {
    const targetDate = new Date('2025-01-29T23:59:59').getTime(); // Set your target date here

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

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

  const [scrollPosition, setScrollPosition] = useState(0);

  // Add this new effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


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
        {
        <div ref={menuRef} className={` ${menuOpen ? '-translate-y-0' : '-translate-y-80'} fixed top-0 z-50 rounded-md bg-white/5 backdrop-blur-xl right-0 w-full h-fit pb-8 rounded-b-2xl border-b-white/40 border-b-[1px] py-2  text-white flex flex-col  items-center gap-4 transition-all duration-300`}>
          <div className="w-full flex justify-end px-10 ml-2 pt-2" onClick={() => setMenuOpen(!menuOpen)}>
            <IoMdClose className="w-6 h-6" />
          </div>
          <div className="h-1/2 w-full px-10 flex gap-2 flex-col items-center">
            <span className="hover:cursor-pointer">Home</span>
            <div className="w-full text-white opacity-15 border-b-1"></div>
            <span className="hover:cursor-pointer">About Us</span>
            <div className="w-full text-white opacity-15 border-b-1"></div>
            <div className="w-16 text-white opacity-15 border-b-2"></div>
            <span onClick={() => {
              window.open(`https://wa.me/9289105061`)
            }} className="hover:cursor-pointer">Contact</span>
          </div>

          {/* <Link href="/preorder" className="bg-blue-600 p-2 rounded-md text-sm hover:cursor-pointer mt-0">Pre-Order</Link> */}
          <Link href={'https://store.pw.live/products/pi-book'} referrerPolicy="no-referrer" target="_blank"><span className="bg-blue-600 p-2 px-10 rounded-md text-sm hover:cursor-pointer mt-0">Pre-Order</span></Link>
        </div>}
        
          
          <div className={` w-full fixed top-0 pt-14 z-40 h-fit bg-black pb-8 backdrop-blur-xl`}>
            
            {/* <div className="w-full flex justify-end px-10 ml-2 pt-2 mb-5" onClick={() => setCtaOpen(prev=>!prev)}>
              <IoMdClose className="w-6 h-6 text-white" />
            </div> */}

            {/* Timer */}
            {!showBuyNow &&<div className="w-full flex justify-center mt-5 items-center gap-1 px-2">
              <div className="flex flex-col items-center bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl p-3 rounded-l-lg w-20">
                <span className="text-2xl font-bold text-white">{timeLeft.days}</span>
                <span className="text-xs text-white">Days</span>
              </div>
              <div className="flex flex-col items-center bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl p-3 w-20">
                <span className="text-2xl font-bold text-white">{timeLeft.hours}</span>
                <span className="text-xs text-white">Hours</span>
              </div>
              <div className="flex flex-col items-center bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl p-3 w-20">
                <span className="text-2xl font-bold text-white">{timeLeft.minutes}</span>
                <span className="text-xs text-white">Minutes</span>
              </div>
              <div className="flex flex-col items-center bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl p-3 rounded-r-lg w-20">
                <span className="text-2xl font-bold text-white">{timeLeft.seconds}</span>
                <span className="text-xs text-white">Seconds</span>
              </div>
            </div>}

            {!showBuyNow ?
            <div className="w-full flex flex-col justify-center items-center mt-5">
              <div className='leftBox flex flex-row  items-center'>
                <span className="text-white text-2xl ml-2">Pre-order your</span>
                <img
                  // src={Assets.logo}
                  className="w-32 "
                  src="/Pi book (1) 2.svg"
                  width={30}
                  height={30}
                  alt="Logo"
                />
              </div>
              <div className="w-full flex text-xl text-white row justify-center items-center pt-2 pb-4">
                <h3>
                  at <span className="line-through text-lg text-gray-400 decoration-white">₹25000</span> ₹14999/-
                </h3>
                <div>
                <img
                  className="w-20 ml-1 "
                  src="/discount.svg"
                  width={30}
                  height={30}
                  alt="discount"
                />
              </div>
              </div>
              
              <Link href={'https://store.pw.live/products/pi-book'} referrerPolicy="no-referrer" target="_blank">
              <button className="bg-blue-600 p-2 px-5 rounded-md text-lg flex flex-row gap-2 items-center justify-center text-white hover:cursor-pointer">
                <h3>Pre-Order Now</h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="14"
                  fill="none"
                  viewBox="0 0 7 10"
                >
                  <path
                    fill="#fff"
                    fillRule="evenodd"
                    d="M.71 9.77a.75.75 0 0 1 .02-1.06L4.668 5 .73 1.29A.75.75 0 1 1 1.77.21l4.5 4.25a.75.75 0 0 1 0 1.08l-4.5 4.25a.75.75 0 0 1-1.06-.02"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
              </Link>
            </div>

            :

            <div className="w-full flex flex-col justify-center items-center">
              <div className="w-full flex flex-col justify-center items-center mt-4">
                <div className='leftBox text-white text-xl flex flex-row gap-2 items-center'>
                  <span className="text-white ">Pre-order at</span>
                  <span className="line-through text-gray-400 decoration-white text-lg">₹25000</span> ₹14999/-
                </div>
              </div>

            <Link href={'https://store.pw.live/products/pi-book'} referrerPolicy="no-referrer" target="_blank">
              <button className="bg-blue-600 mt-4 p-2 px-5 rounded-md text-lg flex flex-row gap-2 items-center justify-center text-white hover:cursor-pointer">
                <h3>Pre-Order Now</h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="14"
                  fill="none"
                  viewBox="0 0 7 10"
                >
                  <path
                    fill="#fff"
                    fillRule="evenodd"
                    d="M.71 9.77a.75.75 0 0 1 .02-1.06L4.668 5 .73 1.29A.75.75 0 1 1 1.77.21l4.5 4.25a.75.75 0 0 1 0 1.08l-4.5 4.25a.75.75 0 0 1-1.06-.02"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
              </Link>
          </div>
            
            }

            

          </div>
      </div>

      <div className="hidden sm:block">
        <div className={`fixed transition-all duration-300 ${
          scrollPosition > 100 
            ? 'translate-y-20' 
            : 'bottom-10'
        } left-10 z-40`}>
          {(
            <div className={`bg-black/80 backdrop-blur-xl p-6 ${scrollPosition > 100 ? 'pt-2' : 'pt-6'} rounded-xl`}>
              {!showBuyNow &&<div className="flex gap-1">
                <div className="flex flex-col items-center bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl p-2 rounded-l-lg w-16">
                  <span className="text-xl font-bold text-white">{timeLeft.days}</span>
                  <span className="text-xs text-white">Days</span>
                </div>
                <div className="flex flex-col items-center bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl p-2 w-16">
                  <span className="text-xl font-bold text-white">{timeLeft.hours}</span>
                  <span className="text-xs text-white">Hours</span>
                </div>
                <div className="flex flex-col items-center bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl p-2 w-16">
                  <span className="text-xl font-bold text-white">{timeLeft.minutes}</span>
                  <span className="text-xs text-white">Minutes</span>
                </div>
                <div className="flex flex-col items-center bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl p-2 rounded-r-lg w-16">
                  <span className="text-xl font-bold text-white">{timeLeft.seconds}</span>
                  <span className="text-xs text-white">Seconds</span>
                </div>
              </div>}
              {!showBuyNow ?
            <div className="w-full flex flex-col justify-center items-center mt-5">
              <div className='leftBox flex flex-row  items-center'>
                <span className="text-white text-2xl ml-2">Pre-order your</span>
                <img
                  // src={Assets.logo}
                  className="w-32 "
                  src="/Pi book (1) 2.svg"
                  width={30}
                  height={30}
                  alt="Logo"
                />
              </div>
              <div className="w-full flex text-xl text-white row justify-center items-center pt-2 pb-4">
                <h3>
                  at <span className="line-through text-lg text-gray-400 decoration-white">₹25000</span> ₹14999/-
                </h3>
                <div>
                <img
                  className="w-20 ml-1 "
                  src="/discount.svg"
                  width={30}
                  height={30}
                  alt="discount"
                />
              </div>
              </div>
              
              <Link href={'https://store.pw.live/products/pi-book'} referrerPolicy="no-referrer" target="_blank">
              <button className="bg-blue-600 p-2 px-5 rounded-md text-lg flex flex-row gap-2 items-center justify-center text-white hover:cursor-pointer">
                <h3>Pre-Order Now</h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="14"
                  fill="none"
                  viewBox="0 0 7 10"
                >
                  <path
                    fill="#fff"
                    fillRule="evenodd"
                    d="M.71 9.77a.75.75 0 0 1 .02-1.06L4.668 5 .73 1.29A.75.75 0 1 1 1.77.21l4.5 4.25a.75.75 0 0 1 0 1.08l-4.5 4.25a.75.75 0 0 1-1.06-.02"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
              </Link>
            </div>

            :

            <div className="w-full flex flex-col justify-center items-center">
              <div className="w-full flex flex-col justify-center items-center mt-4">
                <div className='leftBox text-white text-xl flex flex-row gap-2 items-center'>
                  <span className="text-white ">Pre-order at</span>
                  <span className="line-through text-gray-400 decoration-white text-lg">₹25000</span> ₹14999/-
                </div>
              </div>

            <Link href={'https://store.pw.live/products/pi-book'} referrerPolicy="no-referrer" target="_blank">
              <button className="bg-blue-600 mt-4 p-2 px-5 rounded-md text-lg flex flex-row gap-2 items-center justify-center text-white hover:cursor-pointer">
                <h3>Pre-Order Now</h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="14"
                  fill="none"
                  viewBox="0 0 7 10"
                >
                  <path
                    fill="#fff"
                    fillRule="evenodd"
                    d="M.71 9.77a.75.75 0 0 1 .02-1.06L4.668 5 .73 1.29A.75.75 0 1 1 1.77.21l4.5 4.25a.75.75 0 0 1 0 1.08l-4.5 4.25a.75.75 0 0 1-1.06-.02"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
              </Link>
          </div>
            
            }
            </div>
          )}
        </div>
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
          {showBuyNow && <Link href={'https://store.pw.live/products/pi-book'} referrerPolicy="no-referrer" target="_blank"><span  className="bg-blue-500 p-3 rounded-md text-sm hover:cursor-pointer">Pre-Order</span></Link>}

          {/* {showBuyNow && <ModalForm />} */}

        </div>
      </header>

    </>


  )
}
