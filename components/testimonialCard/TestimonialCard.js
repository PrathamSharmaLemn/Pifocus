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
        <div className="text-white relative max-w-72 sm:max-w-[500px] z-10 mx-2 flex flex-col  py-8 px-12 min-h-96 justify-between   bg-white shadow-customShadow  bg-opacity-15  items-center  rounded-xl">
            <p className="text-white text-center line-clamp-5 ">
                <div className="absolute top-6 left-10 sm:left-8 md:left-16 ">
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
                <IoStarOutline className="text-yellow-500 mx-1 w-7 h-7" />
            </div>

            <div className="flex flex-row items-center justify-evenly ">
                <div className="">
                    <Image
                        src={item.img}
                        width={70}
                        height={70}
                        className="rounded-full mr-8"
                    />
                </div>

                <div>
                    <p className="text-2xl">{item.name}</p>
                    <p className="text-sm opacity-60">{item.batch}</p>
                </div>
            </div>
        </div>
    )
}