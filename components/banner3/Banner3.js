import Image from "next/image"
import { Assets } from "../../public/Assests"
import useWindowDimensions from "../../Dimensions"

export default function Banner3() {
    const { width } = useWindowDimensions()
    return (
        <>
                <div className="sm:hidden flex flex-col items-center pt-8 bg-customRadialBanner3Mobile">
                    <div className="absolute h-500 w-full z-0 bg-customRadialBanner3-2Mobile"></div>
                    <p className="text-3xl font-bold bg-gradient-to-r from-textGradientLeft to-textGradientRight inline-block text-transparent bg-clip-text">All the Ports<br/> you need</p>
                    <div className="mt-4 z-10 ">
                        <Image
                            src={Assets.Banner3MobileImage}
                        />
                    </div>
                </div>

                

                <div className="sm:flex hidden flex-col items-center py-8 bg-customRadialBanner3">
                    <div className="absolute h-500 w-full bg-customRadialBanner3-2"></div>
                    <p className="text-6xl  font-bold texw bg-gradient-to-r from-textGradientLeft to-textGradientRight inline-block text-transparent bg-clip-text">All the Port you need</p>
                    <div className="z-10">
                        <Image
                            src={Assets.Banner3Laptop}
                        />
                    </div>
                </div>
            

        </>
    )
}