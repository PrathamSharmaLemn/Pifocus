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
        <div className="text-white relative  max-w-64 sm:max-w-[500px] z-10 mx-2 flex flex-col  py-8 px-12 min-h-96 justify-around   bg-white shadow-customShadow  bg-opacity-15  items-center  rounded-xl">
            <p className="text-white  text-center line-clamp-5 ">
                <div className="absolute top-5 left-6 sm:top-12 sm:left-6 ">
                    <Image
                        src={Assets.reviewMark}
                    />
                </div>
                {item.review}

            </p>
            <div className="flex flex-row">
                {stars.map((item) =>
                    <IoIosStar className="text-yellow-500 mx-1 w-7 h-7" />
                )}
                {/* <IoStarOutline className="text-yellow-500 mx-1 w-7 h-7" /> */}
            </div>

            <div className="flex flex-row items-center justify-evenly ">
                <div className="">
                    <Image
                        src={item.img}
                       
                        className="rounded-full mr-8 w-16 h-16"
                    />
                </div>

                <div>
                    <p className="text-base sm:text-2xl">{item.name}</p>
                    <p className="text-xxs sm:text-sm opacity-60">{item.batch}</p>
                </div>
            </div>
        </div>
    )
}