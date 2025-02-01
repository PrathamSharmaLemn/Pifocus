import { IoMdArrowRoundBack } from "react-icons/io";

export default function PersonalDetails() {
    return (
        <div className="bg-bgColor w-fit">
            <div className="flex text-white items-center">
                <IoMdArrowRoundBack />
                <span>Back to Home</span>
            </div>

            <p className="sm:text-7xl md:text-8xl lg:text-3xl  font-bold bg-gradient-to-r from-textGradientLeft to-textGradientRight inline-block text-transparent bg-clip-text">Buy Now your PiBook at
            ₹99 Only!</p>

            <div className="bg-[#09090B]">
                 <p className="border-b-[1px]">Personal Details</p>
            </div>
        </div>
    )
}