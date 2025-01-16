import Image from "next/image"
// bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))]  from-black via-blue-200 shadow-xlz to-radialGradientTo
export default function Banner2Componenet({ title, subTitle, src }) {
    return (
        // <button className="bg-gradient-to-r from-purple-500 to-red-500 text-white font-semibold rounded p-0.5">
        //     <span className="flex w-full bg-gray-900 text-white rounded py-2 px-3 hover:cursor-pointer">
        //         Download Our App
        //     </span>
            
        // </button>
        <div className="flex flex-col bg-white shadow-customShadow  bg-opacity-10  items-center justify-center my-4 rounded-xl w-40 h-28">
        <div>
            <img
                src={src}
                width={30}
                height={30}
            />
        </div>
        <p className="text-white font-semibold my-1 text-center">{title}</p>
        <p className="text-white text-xxs text-center">{subTitle}</p>
    </div>

    )
}