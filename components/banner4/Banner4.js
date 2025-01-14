import Image from "next/image"
import { Assets } from "../../public/Assests"

export default function Banner4() {
    return (
        <>
                <div className="sm:hidden flex flex-col h-96 items-center bg-customRadialBanner4Mobile">
                    <p className="text-3xl text-center font-bold mb-8  bg-gradient-to-r from-textGradientLeft to-textGradientRight inline-block text-transparent bg-clip-text">Connects with<br /> Everything</p>
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

                

                <div className="sm:flex hidden flex-col relative items-center bg-customRadialBanner4 ">
                    <p className="text-6xl text-center font-bold bg-gradient-to-r from-textGradientLeft to-textGradientRight py-4 inline-block text-transparent bg-clip-text">Connects with Everything</p>
                    <div className="flex items-center my-10 h-[500px]  w-full bg-transparent justify-center bg-gray-900">
                        <div className="absolute z-10 bottom-0 w-full flex items-center justify-center">
                            <Image
                                src={Assets.Banner4Laptop}
                                width={1400}
                                height={1400}
                            />
                        </div>
                        <div className="flex flex-col justify-center  items-center">
                            <div className="absolute sm:w-[140px] sm:h-[140px]  h-[200px] w-[200px] bg-white rounded-full animate-ripple"></div>
                            <div className="sm:w-[140px] sm:h-[140px] md:w-[180px] md:h-[200px] bg-opacity-10 bg-white rounded-full animate-ripple"></div>
                        </div>
                    </div>

                </div>
            

        </>
    )
}