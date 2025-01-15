import Image from "next/image"
import { Assets } from "../../public/Assests"

export default function Banner7() {
    return (
        <>
            <div className="sm:hidden flex flex-col items-center px-4 py-10">
                <p className="text-3xl text-center font-bold bg-gradient-to-r from-textGradientLeft to-textGradientRight inline-block text-transparent bg-clip-text">The Perfect Laptop<br /> for Students</p>
                <div className="flex flex-col items-center mt-8">
                    <div className="">
                        <img
                            // src={Assets.Banner7Image}
                            src="/Frame 1171276083.png"
                            width={450}
                            height={450}
                        />
                    </div>
                    <div className="flex items-center flex-row">
                        <div className="text-white">
                            <p className="text-2xl font-semibold ">1.1 Kg</p>
                            <p className="text-lg text-center">Light</p>
                        </div>
                        <div className=" text-white flex ml-8 flex-col items-center justify-between">
                            <p className="text-2xl font-semibold">18.3 mm</p>
                            <p className="text-lg text-center">Thin</p>
                        </div>
                    </div>
                </div>
                <span  className="bg-blue-600 p-3 rounded-md text-sm w-80 text-center text-white hover:cursor-pointer mt-12">Pre-Order</span>
            </div>





            <div className="sm:flex hidden flex-col  relative items-center py-10 bg-customRadialBanner7">
               




                <p className="text-6xl text-center font-bold bg-gradient-to-r from-textGradientLeft to-textGradientRight inline-block text-transparent bg-clip-text">The Perfect Laptop for Students</p>
                <p className="text-white text-xl mt-4">Affordable, Lightweight, Built for productivity</p>
                <div className="flex flex-row items-center relative mt-8 ">
                    <div className="absolute z-0 right-0 top-0 ">
                        <img
                            // src={Assets.pwLogotTilted}
                            src="/pw-logo-tilted.svg"
                            width={70}
                            height={70} />
                    </div>

                    <div className="absolute right-8 bottom-8 ">
                        <img
                            // src={Assets.pi}
                            src="/pi.svg"
                        />
                    </div>
                    <div className="relative">
                        
                        <div className="absolute -left-12 top-0">
                            <img
                                // src={Assets.goal}
                                src="/goal.svg"
                            />
                        </div>

                        <div className="absolute -left-20 bottom-16 ">
                            <img
                                // src={Assets.book}
                                src="/book.svg"
                                 />
                        </div>

                        <img
                            // src={Assets.Banner7Image}
                            src="/Frame 1171276083.png"
                            width={600}
                            height={600}
                        />
                    </div>
                    <div className="ml-28 flex flex-col items-center">
                        <div className="flex flex-row ">
                            <div className="text-white z-10 flex flex-col px-12 py-8   bg-white shadow-customShadow  bg-opacity-15  items-center  rounded-xl">
                                <img
                                    // src={Assets.feather}
                                    src="/feather.svg"
                                    width={70}
                                    height={70}
                                />

                                <p className="text-4xl font-semibold mt-4 ">1.1 Kg</p>
                                <p className="text-lg">Light</p>
                            </div>
                            <div className="text-white z-10  flex flex-col ml-8 px-10 bg-white shadow-customShadow  justify-center bg-opacity-15  items-center rounded-xl">
                                <img
                                    // src={Assets.thin}
                                    src="/thin 1.svg"
                                    width={60}
                                    height={60}
                                />
                                <p className="text-4xl font-semibold mt-4">18.3 mm</p>
                                <p className="text-lg">Thin</p>
                            </div>
                        </div>
                        <span className="bg-blue-600 p-3 rounded-md text-sm text-white hover:cursor-pointer mt-10 text-center w-52">Pre-Order</span>

                    </div>
                </div>
            </div>


        </>

    )
}