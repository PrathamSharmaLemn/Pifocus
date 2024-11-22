import { Assets } from "../../public/Assests"
import Image from "next/image"
import useWindowDimensions from "../../Dimensions"

export default function Banner6() {
    const { width } = useWindowDimensions()
    return (
        <>
            {width < 478 ?
                <div className="flex flex-col items-center px-4">
                    <p className="text-3xl my-8 font-bold text-center bg-gradient-to-r from-textGradientLeft to-textGradientRight inline-block text-transparent bg-clip-text">Pi Store <br/> Your App Marketplace</p>
                    <div className="mt-4">
                        <Image
                            src={Assets.Banner6Image}
                        />
                    </div>
                    <p className="text-xs text-center my-8 text-white">
                        Discover a curated selection of apps designed to enhance your learning experience. The Pi Store offers a safe and secure platform to download and install apps, ensuring you have the tools you need to succeed.
                    </p>
                </div>

                :

                <div className="flex flex-col items-center py-12 bg-customRadialBanner6">
                    <div className="absolute w-full h-500 z-0 bg-customRadialBanner6-1"></div>
                    <p className="text-6xl my-8 pb-3 font-bold bg-gradient-to-r from-textGradientLeft to-textGradientRight inline-block text-transparent bg-clip-text">Pi Store - Your App Marketplace</p>
                    <div className="mt-4">
                        <Image
                            src={Assets.Banner6Image}
                        />
                    </div>
                    <p className="text-xl text-center my-8 text-white">
                        Discover a curated selection of apps designed to enhance your learning experience. The Pi Store<br /> offers a safe and secure platform to download and install apps, ensuring you have the tools you<br /> need to succeed.
                    </p>
                </div>
            }
        </>

    )
}