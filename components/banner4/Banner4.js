import Image from "next/image"
import { Assets } from "../../public/Assests"
import useWindowDimensions from "../../Dimensions"

export default function Banner4() {
    const { width } = useWindowDimensions()
    return (
        <>
                <div className="sm:hidden flex flex-col h-96 items-center bg-customRadialBanner4Mobile">
                    <p className="text-3xl font-bold mb-8  bg-gradient-to-r from-textGradientLeft to-textGradientRight inline-block text-transparent bg-clip-text">Connects with<br /> Everything</p>
                    <div className="flex items-center w-full bg-transparent justify-center bg-gray-900">
                        <div className="absolute z-10 mt-28">
                            <Image
                                src={Assets.Banner4ImageMobile}
                            />
                        </div>
                        <div className="flex flex-col mt-20 justify-center items-center">
                            <div className="absolute w-[90px] h-[90px] bg-white rounded-full animate-ripple"></div>
                            <div className="w-[90px] h-[90px] bg-opacity-5 bg-white rounded-full animate-ripple"></div>
                        </div>
                    </div>
                </div>

                

                <div className="sm:flex hidden flex-col items-center bg-customRadialBanner4">
                    <p className="text-6xl font-bold mb-8  bg-gradient-to-r from-textGradientLeft to-textGradientRight t inline-block text-transparent bg-clip-text">Connects with Everything</p>
                    <div className="flex items-center w-full bg-transparent justify-center h-screen bg-gray-900">
                        <div className="absolute z-10">
                            <Image
                                src={Assets.Banner4Laptop}
                            />
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <div className="absolute w-[200px] h-[200px] bg-white rounded-full animate-ripple"></div>
                            <div className="w-[300px] h-[300px] bg-opacity-10 bg-white rounded-full animate-ripple"></div>
                        </div>
                    </div>

                </div>
            

        </>
    )
}