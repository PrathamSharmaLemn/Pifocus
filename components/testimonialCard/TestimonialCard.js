import { Assets } from "../../public/Assests"
import Image from "next/image"
import { IoIosStar } from "react-icons/io";
import { IoStarOutline } from "react-icons/io5";

export default function TestimonialCard({ item }) {
    const stars = []
    for (let i = 0; i < item.rating; i++) {
        stars.push(i)
    }
    return (
        <div className="text-white relative  max-w-64 sm:max-w-72 md:max-w-[500px] z-10 mx-2 flex flex-col py-2 sm:py-4  px-12 h-52 sm:h-72 md:h-96 justify-around   bg-white shadow-customShadow  bg-opacity-15  items-center  rounded-xl">
            <p className="text-white  text-center text-xs sm:text-sm md:text-lg">
                <div className="absolute top-2 left-6 sm:top-6 sm:left-7  ">
                    <Image
                        src={Assets.reviewMark}
                        width={20}
                        height={20}
                    />
                </div>
                {item.review}

            </p>
            <div className="flex flex-row">
                {stars.map((item) =>
                    <IoIosStar className="text-yellow-500 mx-1 w-4 h-4 sm:w-5 sm:h-5 md:w-7 md:h-7" />
                )}
                {/* <IoStarOutline className="text-yellow-500 mx-1 w-7 h-7" /> */}
            </div>

            <div className="flex flex-row items-center justify-evenly ">
                {/* <div className="">
                    <Image
                        src={item.img}
                       t
                        className="rounded-full mr-8 w-9 h-9 sm:w-16 sm:h-16"
                    />
                </div> */}

                <div>
                    <p className="text-xs sm:text-sm md:text-xl">{item.name}</p>
                    <p className="text-xxs sm:text-xs md:text-sm opacity-60">{item.batch}</p>
                </div>
            </div>
        </div>
    )
}