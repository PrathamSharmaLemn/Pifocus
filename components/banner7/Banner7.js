import Image from "next/image"
import { Assets } from "../../public/Assests"

export default function Banner7() {
    return (
        <>
            <div className="sm:hidden flex flex-col items-center px-4 py-10">
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





            <div className="sm:flex hidden flex-col  relative items-center py-10 bg-customRadialBanner7">
                {/* <div className="absolute left-40 top-40">
                        <Image
                            src={Assets.goal}
                        />
                    </div>

                    <div className="absolute left-24 bottom-44 ">
                        <Image
                            src={Assets.book} />
                    </div> */}




                <p className="text-6xl font-bold bg-gradient-to-r from-textGradientLeft to-textGradientRight inline-block text-transparent bg-clip-text">The Perfect Laptop for Students</p>
                <p className="text-white text-xl mt-4">Affordable, Lightweight, and built for productivity</p>
                <div className="flex flex-row items-center relative mt-8 ">
                    <div className="absolute z-0 right-0 top-0 ">
                        <Image
                            src={Assets.pwLogotTilted}
                            width={70}
                            height={70} />
                    </div>

                    <div className="absolute right-8 bottom-8 ">
                        <Image
                            src={Assets.pi}
                        />
                    </div>
                    <div className="relative">
                        {/* <div className="absolute left-12 top-10">
                                <Image
                                    width={70}
                                    height={70}
                                    src={Assets.arrowDownwards} />
                            </div>

                            <div className="absolute bottom-40 right-4 ">
                                <Image src={Assets.arrowUpwards}
                                    width={70}
                                    height={70} />
                            </div> */}
                        <div className="absolute -left-12 top-0">
                            <Image
                                src={Assets.goal}
                            />
                        </div>

                        <div className="absolute -left-20 bottom-16 ">
                            <Image
                                src={Assets.book} />
                        </div>

                        <Image
                            src={Assets.Banner7Image}
                            width={520}
                            height={520}
                        />
                    </div>
                    <div className="ml-28 flex flex-col items-center">
                        <div className="flex flex-row ">
                            <div className="text-white z-10 flex flex-col px-12 py-8   bg-white shadow-customShadow  bg-opacity-15  items-center  rounded-xl">
                                <Image
                                    src={Assets.feather}
                                    width={70}
                                    height={70}
                                />

                                <p className="text-4xl font-semibold mt-4 ">1.20 Kg</p>
                                <p className="text-lg">Light</p>
                            </div>
                            <div className="text-white z-10  flex flex-col ml-8 px-10 bg-white shadow-customShadow  justify-center bg-opacity-15  items-center rounded-xl">
                                <Image
                                    src={Assets.thin}
                                    width={60}
                                    height={60}
                                />
                                <p className="text-4xl font-semibold mt-4">18.8 mm</p>
                                <p className="text-lg">Thin</p>
                            </div>
                        </div>
                        <span className="bg-blue-600 p-3 rounded-md text-sm text-white hover:cursor-pointer mt-10 text-center w-52">Buy Now</span>

                    </div>
                </div>
            </div>


        </>

    )
}