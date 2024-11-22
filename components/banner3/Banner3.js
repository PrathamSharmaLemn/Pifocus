import Image from "next/image"
import { Assets } from "../../public/Assests"
import useWindowDimensions from "../../Dimensions"

export default function Banner3() {
    const { width } = useWindowDimensions()
    return (
        <>
            {width < 478 ?
                <div className="flex flex-col items-center py-8">
                    <p className="text-3xl  font-bold texw bg-gradient-to-r from-textGradientLeft to-textGradientRight inline-block text-transparent bg-clip-text">All the Ports<br/> you need</p>
                    <div className="mt-4">
                        <Image
                            src={Assets.Banner3Laptop}
                            
                        />
                    </div>
                </div>

                :

                <div className="flex flex-col items-center py-8 bg-customRadialBanner3">
                    <div className="absolute h-500 w-full bg-customRadialBanner3-2"></div>
                    <p className="text-6xl  font-bold texw bg-gradient-to-r from-textGradientLeft to-textGradientRight inline-block text-transparent bg-clip-text">All the Port you need</p>
                    <div className="z-10">
                        <Image
                            src={Assets.Banner3Laptop}
                        />
                    </div>
                </div>
            }

        </>
    )
}