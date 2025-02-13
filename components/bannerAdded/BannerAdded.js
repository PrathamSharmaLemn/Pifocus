import { Assets } from "../../public/Assests";
import Image from "next/image";
import { MdOutlineMessage } from "react-icons/md";
import { IoMdKeypad } from "react-icons/io";
import { MdOutlineAddIcCall } from "react-icons/md";
import { IoMdMicOff } from "react-icons/io";
import { HiMiniSpeakerWave } from "react-icons/hi2";
import { MdCallEnd } from "react-icons/md";

export default function BannerAdded() {
    return (
        <>
            <div className="block sm:hidden">
                <div className="text-white rounded-2xl bg-white bg-opacity-10 p-4">
                    <p className="w-full text-sm text-center">Game key Mapping</p>
                    <div className="mt-2">
                        <div className="flex justify-around py-2">
                            {Assets.addBannerLine1.map((item, index) => <div key={index} className="flex flex-col gap-2 items-center justify-center ">
                                <img src={item.img} alt="img" width={35} height={35} />
                                <p className="text-xxs">{item.name}</p>
                            </div>)}
                        </div>


                        <div className="flex justify-around border-t-[1px] border-gray-200 py-2">
                            {Assets.addBannerLine2.map((item, index) => <div key={index} className="flex flex-col gap-2 items-center justify-center ">
                                <img src={item.img} alt="img" width={35} height={35} />
                                <p className="text-xxs">{item.name}</p>
                            </div>)}
                        </div>

                    </div>
                </div>
                <p className="text-center text-white text-sm mt-6">
                    The PiBook's powerful keymapper allows users to customize their experience by mapping any function to the gamepad buttons, touchpad, and analog sticks.
                </p>
                <span className="text-blue-200 border-2 border-blue-400/20 text-sm bg-blue-400/10 px-4 py-1 rounded-full hover:text-blue-400 mt-5 mx-auto block w-fit"><a href="https://www.youtube.com/watch?v=ADjK5KAbbfs" target="_blank" rel="noopener noreferrer">Tutorial Video</a></span>

                <p className="text-3xl my-8 mb-4 font-bold bg-gradient-to-r text-center w-full from-textGradientLeft to-textGradientRight inline-block text-transparent bg-clip-text">Connectivity</p>
                <p className="text-xl mb-8 font-bold bg-gradient-to-r text-center w-full from-textGradientLeft to-textGradientRight inline-block text-transparent bg-clip-text">Calling + 4G + Bluetooth + Wi-Fi</p>

                <div className=" rounded-xl relative">
                    <img src="/connectivity.png" alt="connectivity" className="w-full h-auto rounded-lg" />
                    {/* <img src="/lte.png" alt="img" className="absolute w-10 h-10 right-3 top-3 opacity-70" />
                    <div className="flex flex-col gap-1 justify-center text-white w-full  items-center">
                        <div className="">
                            <p className="bg-[#FF7F7F] rounded-full py-4 px-6 font-semibold text-3xl text-white ">A</p>

                        </div>
                        <p className="text-2xl">Alakh Sir</p>
                        <p>02 : 36</p>
                    </div>

                    <div className="flex w-full  items-center justify-around py-2 mt-2">
                        <div className="text-black bg-white p-2 rounded-full">
                            <MdOutlineMessage />
                        </div>
                        <div className="text-black bg-white p-2 rounded-full">
                            <IoMdKeypad />
                        </div><div className="text-black bg-white p-2 rounded-full">
                            <MdOutlineAddIcCall />
                        </div><div className="text-black bg-white p-2 rounded-full">
                            <IoMdMicOff />

                        </div>
                        <div className="text-black bg-white p-2 rounded-full">
                            <HiMiniSpeakerWave />

                        </div>
                        <div className="text-white bg-red-500 p-2 rounded-full">
                            <MdCallEnd />


                        </div>
                    </div> */}
                </div>
                <p className="text-white mt-5 text-xs w-[80%] mx-auto text-center lg:text-lg">Stay connected anywhere, anytime with seamless 4G and calling support on your PiBook— learning and productivity on the go!</p>

                <span className="text-blue-200 border-2 border-blue-400/20 text-sm bg-blue-400/10 px-4 py-1 rounded-full hover:text-blue-400 mt-5 w-fit mx-auto block"><a href="https://www.youtube.com/shorts/EdNR8WbP-ZY" target="_blank" rel="noopener noreferrer">How to Connect SIM</a></span>


            </div>



            <div className="hidden sm:block sm:px-4 md: lg:px-28 my-12">
                <div className="flex justify-around items-center sm:px-4 sm:gap-2 md:gap-8 ">
                    <div className="w-[30%] flex flex-col items-center justify-center">
                        <p className="text-3xl sm:my-2 font-bold bg-gradient-to-r text-center w-full from-textGradientLeft to-textGradientRight inline-block text-transparent bg-clip-text">Keymapper</p>
                        <p className="text-white text-center lg:text-lg">The PiBook's powerful keymapper allows users to customize their experience by mapping any function to the gamepad buttons, touchpad, and analog sticks. <br /> </p> 
                        <span className="text-blue-200 border-2 border-blue-400/20 text-sm bg-blue-400/10 px-4 py-1 rounded-full hover:text-blue-400 mt-5"><a href="https://www.youtube.com/watch?v=ADjK5KAbbfs" target="_blank" rel="noopener noreferrer">Tutorial Video</a></span>
                    </div>
                    <div className="w-[50%]">
                        <div className="text-white rounded-2xl bg-white bg-opacity-10 sm:p-4 md:p-8">
                            <p className="w-full text-sm text-center">Game key Mapping</p>
                            <div className="mt-2">
                                <div className="flex justify-around py-2">
                                    {Assets.addBannerLine1.map((item, index) => <div key={index} className="flex flex-col gap-2 items-center justify-center ">
                                        <img src={item.img} alt="img" className="sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" />
                                        <p className="sm:text-xxs md:text-xxs lg:text-xs">{item.name}</p>
                                    </div>)}
                                </div>


                                <div className="flex justify-around border-t-[1px] border-gray-200 py-2">
                                    {Assets.addBannerLine2.map((item, index) => <div key={index} className="flex flex-col gap-2 items-center justify-center ">
                                        <img src={item.img} alt="img" className="sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" />
                                        <p className="sm:text-xxs md:text-xsx lg:text-xs">{item.name}</p>
                                    </div>)}
                                </div>

                            </div>
                        </div>
                    </div>
                </div>


                <div className="flex justify-around items-center mt-24">
                    <div className=" rounded-xl md:p-8 relative w-[50%]">
                        <img src="/connectivity.png" alt="connectivity" className="w-full h-auto rounded-lg" />
                        {/* <img src="/lte.png" alt="img" className="absolute sm:w-7 sm:h-7 md:w-10 md:h-10 right-3 top-3 opacity-70" />
                        <div className="flex flex-col gap-1 justify-center text-white w-full  items-center">
                            <div className="">
                                <p className="bg-[#FF7F7F] rounded-full sm:py-2 sm:px-4 md:py-4 md:px-6 font-semibold text-3xl text-white ">A</p>

                            </div>
                            <p className="sm:text-2xl md:text-3xl">Alakh Sir</p>
                            <p className="sm:text-sm md:text-lg">02 : 36</p>
                        </div>

                        <div className="flex w-full  items-center justify-around py-2 mt-4">
                            <div className="text-black bg-white sm:p-2 md:p-3 lg:p-4 rounded-full">
                                <MdOutlineMessage />
                            </div>
                            <div className="text-black bg-white sm:p-2 md:p-3 lg:p-4 rounded-full">
                                <IoMdKeypad />
                            </div><div className="text-black bg-white sm:p-2 md:p-3 lg:p-4 rounded-full">
                                <MdOutlineAddIcCall />
                            </div><div className="text-black bg-white sm:p-2 md:p-3 lg:p-4 rounded-full">
                                <IoMdMicOff />

                            </div>
                            <div className="text-black bg-white sm:p-2 md:p-3 lg:p-4 rounded-full">
                                <HiMiniSpeakerWave />

                            </div>
                            <div className="text-white bg-red-500 sm:p-2 md:p-3 lg:p-4 rounded-full">
                                <MdCallEnd />


                            </div>
                        </div> */}
                    </div>
                    <div className="w-[30%] flex flex-col items-center justify-center">
                        <p className="text-3xl sm:my-2 font-bold bg-gradient-to-r text-center w-full from-textGradientLeft to-textGradientRight inline-block text-transparent bg-clip-text">Connectivity</p>
                        <p className="text-xl mb-8 font-bold bg-gradient-to-r text-center w-full from-textGradientLeft to-textGradientRight inline-block text-transparent bg-clip-text">Calling + 4G + Bluetooth + Wi-Fi</p>
                        <p className="text-white text-center lg:text-lg">Stay connected anywhere, anytime with seamless 4G and calling support on your PiBook— learning and productivity on the go!</p>
                        <span className="text-blue-200 border-2 border-blue-400/20 text-sm bg-blue-400/10 px-4 py-1 rounded-full hover:text-blue-400 mt-5"><a href="https://www.youtube.com/shorts/EdNR8WbP-ZY" target="_blank" rel="noopener noreferrer">How to Connect SIM</a></span>
                    </div>
                </div>
            </div>
        </>
    )
}