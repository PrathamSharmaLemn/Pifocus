import { Assets } from "../../public/Assests"
import Image from "next/image"
import useWindowDimensions from "../../Dimensions"
import Banner2Componenet from "../banner2component/Banner2Component"


export default function Banner2() {
    const { width, height } = useWindowDimensions()
    return (
        <>
                <div className="sm:hidden flex flex-col justify-center items-center pt-8 bg-customRadialBanner2Mobile">
                    <p className="text-3xl font-bold bg-gradient-to-r from-textGradientLeft to-textGradientRight inline-block text-transparent bg-clip-text">Specifications</p>
                    <div className="flex flex-row mt-4">
                        <div className="mr-1">
                            {/* <button className="bg-gradient-to-r from-purple-500 to-red-500 text-white font-semibold rounded p-0.5">
                                <span className="flex w-full bg-gray-900 text-white rounded py-2 px-3 hover:cursor-pointer">
                                    Download Our App
                                </span> 
                            </button> */}
                            <Banner2Componenet title="Mediatek 8788" subTitle="Octa Core Processor" src={Assets.processor} />
                            <Banner2Componenet title="128GB" subTitle="Storage" src={Assets.storage} />
                            <Banner2Componenet title="4000 mah" subTitle="Battery Life (Upto 8 Hours)" src={Assets.battery} />
                        </div>
                        <div className="ml-1">
                            <Banner2Componenet title="11.4 Inches" subTitle="Display Size" src={Assets.display} />
                            <Banner2Componenet title="6GB" subTitle="Ram" src={Assets.ram} />
                            <Banner2Componenet title="Powered by Pi OS" subTitle="By PW" src={Assets.os} />
                        </div>
                    </div>
                </div>

                

                <div className="sm:flex hidden flex-col justify-center items-center bg-customRadialBanner2">
                    <p className="text-6xl font-bold bg-gradient-to-r from-textGradientLeft to-textGradientRight inline-block text-transparent bg-clip-text">Specifications</p>


                    <div className="flex flex-row relative mt-12  justify-center items-center p-4">
                        <div className="relative">
                            <div className="absolute left-4 z-0 top-4">
                                <Image
                                    className="h-28 w-28"
                                    src={Assets.arrowDownwards}
                                />
                            </div>
                            <div className="absolute right-28 z-0 bottom-56">
                                <Image
                                    className="h-28 w-28"
                                    src={Assets.arrowUpwards} />
                            </div>

                            <div className="pl-12">
                                <Image
                                    className=""
                                    src={Assets.Banner2Laptop}
                                    width={500}
                                    height={500}
                                />
                            </div>
                        </div>

                        <div className="flex flex-row ml-40 mb-10">
                            <div>
                                <div className="">
                                    <p className="text-4xl font-semibold text-white">Mediatek 8788</p>
                                    <p className="text-xs text-white">Octa Core Processor</p>
                                </div>
                                <div className="my-10">
                                    <p className="text-4xl font-semibold text-white">128GB</p>
                                    <p className="text-xs text-white">Storage</p>
                                </div>
                                <div>
                                    <p className="text-4xl font-semibold text-white">4000 mah</p>
                                    <p className="text-xs text-white">Battery Life (Upto 8 Hours)</p>
                                </div>
                            </div>

                            <div className="ml-12">
                                <div>
                                    <p className="text-4xl font-semibold text-white">11.4 Inches</p>
                                    <p className="text-xs text-white">Display Size</p>
                                </div>
                                <div className="my-10">
                                    <p className="text-4xl font-semibold text-white">6GB</p>
                                    <p className="text-xs text-white">Ram</p>
                                </div>
                                <div>
                                    <p className="text-4xl font-semibold text-white">Powered by Pi OS</p>
                                    <p className="text-xs text-white">By PW</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            





        </>
    )
}