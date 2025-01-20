import { Assets } from "../../public/Assests"
import Image from "next/image"

export default function Banner6() {
    return (
        <>
            <div className="sm:hidden flex flex-col items-center px-4 bg-customRadialBanner6Mobile">
                <div className="absolute w-full h-500 z-0 bg-customRadialBanner6-1Mobile"></div>
                <p className="text-3xl mt-12 sm:my-20 font-bold text-center bg-gradient-to-r from-textGradientLeft to-textGradientRight inline-block text-transparent bg-clip-text">Pi App Store <br /> Your App Marketplace</p>
                {/* <div className="flex border-2 flex-row justify-center items-center h-[500px]  w-full  z-10  bg-bgImgaeBanner6 bg-no-repeat bg-contain bg-center"> */}
                <div className="flex flex-col z-10  justify-center items-center  w-full h-[300px] bg-bgImgaeBanner6 bg-no-repeat bg-contain bg-center ">
                    {/* <video
                            autoPlay
                            loop
                            // width={200}
                            // height={200}
                            muted
                            playsInline
                            // className=" bg-black w-1/2  rounded-sm py-1 "
                            

                        >
                            <source src="/videoWithFrame.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video> */}
                </div>
                <p className="text-xs text-center   text-white">
                Discover the PiStore, a custom-built app store designed exclusively for PiBook, your Android laptop. Easily browse and download any Android app you need, all from a safe and secure platform tailored to enhance your experience.
                </p>
            </div>



            <div className="sm:flex hidden flex-col items-center py-12  bg-customRadialBanner6">
                <div className="absolute w-full h-500 z-0 bg-customRadialBanner6-1"></div>
                <p className="text-6xl text-center my-8 pb-4 font-bold bg-gradient-to-r from-textGradientLeft to-textGradientRight inline-block text-transparent bg-clip-text">Pi App Store - Your App Marketplace</p>
                <div className=" flex flex-row justify-center items-center sm:w-[500px] sm:h-[250px] md:w-full md:h-[400px] mt-4 lg:h-[550px] lg:w-[1020px]  z-10  bg-bgImgaeBanner6 bg-no-repeat bg-contain bg-center">
                
                {/* <div className=" flex flex-row justify-center items-center sm:w-[500px] sm:h-[250px] md:w-[700px] mt-4 lg:h-[550px] lg:w-[1020px]  z-10 "> */}
                    
                    
                    {/* <video
                        autoPlay
                        loop
                        muted
                        width={1200}
                        height={1200}
                        playsInline
                        className=""
                    >
                        <source src="/videoWithFrame.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video> */}
                </div>
                <p className="text-xl text-center my-8 text-white">
                    Discover the PiStore, a custom-built app store designed exclusively for PiBook, your Android laptop. <br /> Easily browse and download any Android app you need, all from a safe and secure platform tailored to enhance your experience.                </p>
            </div>

        </>

    )
}