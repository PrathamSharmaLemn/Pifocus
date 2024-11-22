import Image from "next/image"
import { Assets } from "../../public/Assests"
import useWindowDimensions from "../../Dimensions"

export default function Banner7() {
    const { width } = useWindowDimensions()
    return (
        <>
            {width < 478 ?
                <div className="flex flex-col items-center px-4 py-10">
                    <p className="text-3xl text-center font-bold bg-gradient-to-r from-textGradientLeft to-textGradientRight inline-block text-transparent bg-clip-text">The Perfect Laptop<br /> for Students</p>
                    <div className="flex flex-col items-center mt-8">
                        <div className="">
                            <Image
                                src={Assets.Banner7Image}
                                width={450}
                                height={450}
                            />
                        </div>
                        <div className="flex items-center flex-row">
                            <div className="text-white">
                                <p className="text-2xl font-semibold ">1.20 Kg</p>
                                <p className="text-lg text-center">Light</p>
                            </div>
                            <div className=" text-white flex ml-8 flex-col items-center justify-between">
                                <p className="text-2xl font-semibold">18.8 mm</p>
                                <p className="text-lg text-center">Thin</p>
                            </div>
                        </div>
                    </div>
                    <span className="bg-blue-600 p-3 rounded-md text-sm w-80 text-center text-white hover:cursor-pointer mt-12">Buy Now</span>
                </div>


                :


                <div className="flex flex-col items-center py-16 bg-customRadialBanner7">
                    {/* <div className="w-full b"></div> */}
                    <div className="absolute left-52 top-[5080px]">
                        <Image
                            src={Assets.goal
                            }
                        />
                    </div>

                    <div className="absolute top-[5380px] left-[100px]">
                        <Image
                            src={Assets.book} />
                    </div>

                    <div className="absolute top-[5200px] left-[270px]">
                        <Image
                            width={70}
                            height={70}
                            src={Assets.arrowDownwards} />
                    </div>

                    <div className="absolute top-[5300px] left-[620px]">
                        <Image src={Assets.arrowUpwards}
                            width={70}
                            height={70} />
                    </div>

                    <div className="absolute top-[5150px] left-[1270px] ">
                        <Image
                            src={Assets.pwLogotTilted}
                            width={60}
                            height={60} />
                    </div>

                    <div className="absolute top-[5500px] left-[1170px]">
                        <Image
                            src={Assets.pi}
                        />
                    </div>
                    <p className="text-6xl font-bold bg-gradient-to-r from-textGradientLeft to-textGradientRight inline-block text-transparent bg-clip-text">The Perfect Laptop for Students</p>
                    <p className="text-white text-xl mt-4">Affordable, Lightweight, and built for productivity</p>
                    <div className="flex flex-row items-center mt-8 ">
                        <div    >
                            <Image

                                src={Assets.Banner7Image}
                                width={500}
                                height={500}
                            />
                        </div>
                        <div className="ml-28 flex flex-col items-center">
                            <div className="flex flex-row">
                                <div className="text-white flex flex-col px-12 py-8   bg-white shadow-customShadow  bg-opacity-15  items-center  rounded-xl">
                                    <Image
                                        src={Assets.feather}
                                        width={70}
                                        height={70}
                                    />

                                    <p className="text-4xl font-semibold mt-4 ">1.20 Kg</p>
                                    <p className="text-lg">Light</p>
                                </div>
                                <div className="text-white z-40 flex flex-col ml-8 px-10 bg-white shadow-customShadow  justify-center bg-opacity-15  items-center rounded-xl">
                                    <Image
                                        src={Assets.thin}
                                        width={60}
                                        height={60}
                                    />
                                    <p className="text-4xl font-semibold mt-4">18.8 mm</p>
                                    <p className="text-lg">Thin</p>
                                </div>
                                {/* <div className="flex justify-center items-center min-h-screen">
                                    <div className="w-40 h-44 flex flex-col justify-center items-center bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl shadow-lg text-white text-center">
                                        <div className="text-4xl text-blue-400 mb-2">
                                            <Image
                                            src={Assets.feather}
                                            width={60}
                                            height={60}
                                            />
                                        </div>
                                        <div className="text-2xl font-bold">1.20 KG</div>
                                        <div className="text-sm opacity-70">Light</div>
                                    </div>
                                </div>
                                <div className="flex justify-center  items-center min-h-screen h-44 ml-8">
                                    <div className="w-40 h-44 flex flex-col justify-center items-center bg-gradient-to-br from-gray-300 to-gray-400 rounded-xl bg-opacity-70 shadow-lg text-white text-center">
                                        <div className="text-4xl text-blue-400 mb-2">
                                            <Image
                                                src={Assets.thin}
                                                width={60}
                                                height={60}
                                            />
                                        </div>
                                        <div className="text-2xl font-bold">18.8 mm</div>
                                        <div className="text-sm opacity-70">Thin</div>
                                    </div>
                                </div> */}
                                {/* <div className="flex h-28 items-center justify-center min-h-screen bg-gradient-to-br from-blue-900 to-black">
                                    <div className="bg-blue-800 text-white rounded-lg p-6 shadow-lg border border-blue-700">
                                        <div className="flex justify-center mb-4">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-8 h-8 text-blue-400" viewBox="0 0 24 24">
                                                <path d="M20.294 4.705a9.6 9.6 0 0 0-7.52-2.704c-1.872.1-3.77.752-5.64 2.125a1 1 0 0 0 .17 1.616c2.03 1.168 4.179 1.618 6.401 1.255a10.963 10.963 0 0 1-6.23 4.666 1 1 0 0 0-.63 1.205c.31 1.53 1.068 2.937 2.2 4.068 1.088 1.084 2.437 1.848 3.992 2.185a1 1 0 0 0 1.166-.801 9.57 9.57 0 0 0 1.227-4.912c1.114.16 2.269.043 3.42-.376a1 1 0 0 0 .426-1.524 10.972 10.972 0 0 1-2.68-4.015c1.926.197 3.858-.306 5.49-1.472a1 1 0 0 0 .215-1.562Z"></path>
                                            </svg>
                                        </div>
                                        <div className="text-center">
                                            <p className="text-2xl font-bold">1.20 KG</p>
                                            <p className="text-blue-300 mt-2">Light</p>
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                            <span className="bg-blue-600 p-3 rounded-md text-sm text-white hover:cursor-pointer mt-10 text-center w-52">Buy Now</span>

                        </div>
                    </div>
                </div>
            }
            
        </>

    )
}