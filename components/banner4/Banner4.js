import Image from "next/image"
import { Assets } from "../../public/Assests"
import useWindowDimensions from "../../Dimensions"

export default function Banner4() {
    const { width } = useWindowDimensions()
    return (
        <>
            {width < 478 ?
                <div className="flex flex-col items-center">
                    <p className="text-3xl font-bold mb-8 bg-gradient-to-r from-textGradientLeft to-textGradientRight inline-block text-transparent bg-clip-text">Connects with<br /> Everything</p>
                    {/* <div className="px-2 mt-4  bg-circle bg-center bg-no-repeat bg-contain">
                        <Image
                            src={Assets.Banner4ImageMobile}
                        />
                    </div> */}
                    {/* <div className="w-full h-250 my-16 flex justify-center items-center">
                        <div className="circle h-[240px] w-[240px] rounded-full bg-white animate-pulse-scale">
                        </div>
                        <div className="absolute">
                            <Image
                                src={Assets.Banner4ImageMobile}
                                width={500}
                                height={500}
                            />
                        </div>
                    </div> */}
                    <div className="flex items-center  w-full bg-transparent justify-center bg-gray-900">
                        <div className="absolute z-10">
                            <Image
                                src={Assets.Banner4ImageMobile}
                            />
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <div className="absolute w-[90px] h-[90px] bg-white rounded-full animate-ripple"></div>
                            <div className="w-[270px] h-[270px] bg-opacity-5 bg-white rounded-full animate-pulse-scale"></div>
                        </div>
                    </div>
                </div>

                :

                <div className="flex flex-col items-center bg-customRadialBanner4">
                    <p className="text-6xl font-bold mb-8  bg-gradient-to-r from-textGradientLeft to-textGradientRight inline-block text-transparent bg-clip-text">Connects with Everything</p>
                    {/* <div className="px-2 py-8 bg-circle bg-contain bg-center bg-no-repeat">
                        <Image
                            src={Assets.Banner4Laptop}
                        />
                    </div> */}
                    {/* <div className="w-full h-500 flex justify-center items-center">
                        <div className="circle h-[400px] w-[400px] rounded-full bg-white animate-repel">
                        </div>
                        <div className="absolute">
                            <Image
                                src={Assets.Banner4Laptop}
                            />
                        </div>
                    </div> */}
                    <div className="flex items-center w-full bg-transparent justify-center h-screen bg-gray-900">
                        <div className="absolute z-10">
                            <Image
                                src={Assets.Banner4Laptop}
                            />
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <div className="absolute w-[200px] h-[200px] bg-white rounded-full animate-ripple"></div>
                            <div className="w-[600px] h-[600px] bg-opacity-5 bg-white rounded-full animate-pulse-scale"></div>
                        </div>
                    </div>

                </div>
            }

        </>
    )
}