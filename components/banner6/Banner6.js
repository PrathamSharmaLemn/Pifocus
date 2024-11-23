import { Assets } from "../../public/Assests"
import Image from "next/image"
import useWindowDimensions from "../../Dimensions"

export default function Banner6() {
    const { width } = useWindowDimensions()
    return (
        <>
                <div className="sm:hidden flex flex-col items-center px-4">
                    <p className="text-3xl my-8 font-bold text-center bg-gradient-to-r from-textGradientLeft to-textGradientRight inline-block text-transparent bg-clip-text">Pi Store <br /> Your App Marketplace</p>
                    <div className="mt-4">
                        <Image
                            src={Assets.Banner6Image}
                        />
                    </div>
                    <p className="text-xs text-center my-8 text-white">
                        Discover a curated selection of apps designed to enhance your learning experience. The Pi Store offers a safe and secure platform to download and install apps, ensuring you have the tools you need to succeed.
                    </p>
                </div>

                

                <div className="sm:flex hidden flex-col items-center py-12 bg-customRadialBanner6">
                    <div className="absolute w-full h-500 z-0 bg-customRadialBanner6-1"></div>
                    <p className="text-6xl my-8 pb-3 font-bold bg-gradient-to-r from-textGradientLeft to-textGradientRight inline-block text-transparent bg-clip-text">Pi Store - Your App Marketplace</p>
                    <div className=" flex flex-row justify-center items-center mt-4 h-[500px] w-[700px] lg:w-[1000px]  z-10  bg-bgImgaeBanner6 bg-no-repeat bg-contain">
                        {/* <Image
                            src={Assets.Banner6Image}
                        /> */}
                        <video
                            // controls
                            autoPlay
                            width={342}
                            height={600}
                            loop
                            muted
                            playsInline
                            className="mb-40 bg-black  rounded-md ml-0.5 py-2"
                        >
                            <source src="/videoLaptop.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <p className="text-xl text-center my-8 text-white">
                        Discover a curated selection of apps designed to enhance your learning experience. The Pi Store<br /> offers a safe and secure platform to download and install apps, ensuring you have the tools you<br /> need to succeed.
                    </p>
                </div>
            
        </>

    )
}