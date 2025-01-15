import { Assets } from "../../public/Assests"
import { IoIosStar } from "react-icons/io";
import { IoStarOutline } from "react-icons/io5";

export default function TestimonialCard({ item }) {
    const stars = []
    for (let i = 0; i < item.rating; i++) {
        stars.push(i)
    }
    return (
        <div className="text-white relative  mr-2 sm:mr-4 sm:ml-0 max-w-full sm:max-w-full md:max-w-[500px] z-10 flex flex-col py-2 sm:py-4 px-4 sm:px-12 h-52 sm:h-72 md:h-96 justify-around   bg-white shadow-customShadow  bg-opacity-15  items-center  rounded-xl">
            <p className="text-white   text-center text-xxs sm:text-sm md:text-lg lg:text-lg">
                <div className="absolute top-4 left-2 sm:top-6 sm:left-7  ">
                    <img
                        // src={Assets.reviewMark}
                        src="/reviewMark.svg"
                        className="h-2 w-2 sm:h-6 sm:w-6"
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
                

                <div>
                    <p className="text-xs  sm:text-sm md:text-xl">{item.name}</p>
                    <p className="text-xxs sm:text-xs md:text-sm opacity-60">{item.batch}</p>
                </div>
            </div>
        </div>
    )
}