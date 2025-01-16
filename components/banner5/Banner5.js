import Image from "next/image"
import { Assets } from "../../public/Assests"
import BannerAdded from "../bannerAdded/BannerAdded"

export default function Banner5() {
    return (
        <>
            <div className="sm:hidden flex flex-col items-center px-4 bg-customRadialBanner5Mobile ">
                <div className="absolute w-full h-500 z-0 bg-customRadialBanner5-1"></div>

                <p className="text-3xl my-8 font-bold bg-gradient-to-r from-textGradientLeft to-textGradientRight inline-block text-transparent bg-clip-text">Meet PiBook OS</p>
                <div className="p-4 z-10">
                    <img
                        // src={Assets.Banner5Image1}
                        src="/Frame 1171276008 (1).png"
                    />
                </div>

                <p className="text-xs  my-4 text-white text-center">Experience the future of computing with Android 13. Enjoy a seamless user experience, enhanced performance, and a wide range of features designed to make your life easier.</p>



                <div className=" w-full mt-4">
                    <p className="text-3xl my-4 font-bold bg-gradient-to-r text-center w-full from-textGradientLeft to-textGradientRight inline-block text-transparent bg-clip-text">Keymapper</p>

                    <BannerAdded />
                </div>



                <div className="flex flex-col justify-center items-center bg-customRadialBanner5-2 mt-4">
                    <div className="ml-4 mt-8">
                        <p className="text-3xl text-center w-full font-bold bg-gradient-to-r from-textGradientLeft to-textGradientRight inline-block text-transparent bg-clip-text">Tapasya Mode<br /> Focus, Redefined</p>
                        <p className="w-80 mt-4 text-xs text-center text-white">Immerse yourself in a distraction-free learning enviroment. Tapasya Mode allows you to focus on what matters most by minimizing distraction and optimizing your device for focused studies.</p>
                    </div>

                    <div>
                        <img
                            // src={Assets.Banner5Image2}
                            src="/Frame 1116600025.png"
                            width={300}
                            height={300}
                        />
                    </div>


                </div>
            </div>



            <div className="sm:flex hidden flex-col items-center bg-customRadialBanner5 ">
                <div className="absolute w-full h-500 z-0 bg-customRadialBanner5-1"></div>

                <p className="text-6xl my-14 font-bold bg-gradient-to-r from-textGradientLeft to-textGradientRight inline-block text-transparent bg-clip-text">Meet PiBook OS</p>
                <div className="z-10">
                    <img
                        // src={Assets.Banner5Image1}
                        src="/Frame 1171276008 (1).png"
                        width={900}
                        height={900}
                        loading="lazy"
                    />
                </div>

                <p className="text-xl my-12 text-white">Experience the future of computing with Android 13. Enjoy a seamless user experience,<br /> enhanced performance, and a wide range of features designed to make your life easier.</p>


                <div className=" w-full">
                    <BannerAdded />
                </div>



                <div className="flex flex-row items-center bg-customRadialBanner5-2  px-8 justify-center ">

                    <div className="sm:mr-20 lg:mr-56">
                        <p className="text-3xl sm:w-60 font-bold bg-gradient-to-r from-textGradientLeft to-textGradientRight inline-block text-transparent bg-clip-text">Tapasya Mode: Focus Redefined</p>
                        <p className="w-80 mt-12 text-white">Immerse yourself in a distraction-free learning enviroment. Tapasya Mode allows you to focus on what matters most by minimizing distraction and optimizing your device for focused studies.</p>
                    </div>

                    <div className="">
                        <img
                            // src={Assets.Banner5Image2}
                            src="/Frame 1116600025.png"
                            width={500}
                            height={500}
                        />
                    </div>


                </div>
            </div>

        </>

    )
}