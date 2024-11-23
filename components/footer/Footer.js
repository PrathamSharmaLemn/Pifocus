import Image from "next/image"
import { Assets } from "../../public/Assests"
import { MdOutlineMail } from "react-icons/md";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import useWindowDimensions from "../../Dimensions";

export default function Footer() {
    const { width } = useWindowDimensions()
    return (
        <>
                <footer className="sm:hidden flex flex-col justify-evenly p-10 gap-10 bg-footerBg">
                    <div className="text-white">
                        <div className="flex flex-row items-center">
                            <Image
                                src={Assets.footerPW}
                                width={30}
                                height={30}
                            />
                            <p className="ml-2">Physics Wallah</p>
                        </div>
                        <p className="mt-8 text-xs">We understand that every student has different needs and capabilities, Which is why we create sucha wonderful and unique curriculum that is the best fit for every student.</p>
                        <p className="underline hover:cursor-pointer">...Read More</p>
                        <div className="mt-5">
                            <button className="bg-gradient-to-r from-purple-500 to-red-500 text-white font-semibold rounded p-0.5">
                                <span class="flex w-full bg-gray-900 text-white rounded py-2 px-3 hover:cursor-pointer">
                                    Download Our App
                                </span>
                            </button>
                        </div>
                    </div>

                    <div className="text-white">
                        <p>Get in touch</p>
                        <p className="my-4 text-sm">Have queries? Feel free to get in<br /> touch wiith us right away!</p>
                        <div className="flex flex-row items-center hover:cursor-pointer">
                            <span><MdOutlineMail /></span>
                            <p className="ml-2">support@pw.live</p>
                        </div>
                    </div>

                    <div className="text-white">
                        <div className="flex flex-row items-center">
                            <p>Follow us</p>
                            <div className="flex flex-row gap-2 my-4 ml-4 ">
                                <span className="p-1 bg-white rounded-full text-black hover:cursor-pointer"><FaYoutube /></span>
                                <span className="p-1 bg-white rounded-full text-black hover:cursor-pointer"><FaInstagram /></span>
                                <span className="p-1 bg-white rounded-full text-black hover:cursor-pointer"><FaTelegramPlane /></span>
                                <span className="p-1 bg-white rounded-full text-black hover:cursor-pointer"><FaFacebookF /></span>
                                <span className="p-1 bg-white rounded-full text-black hover:cursor-pointer"><FaTwitter /></span>
                            </div>
                        </div>

                        <div>
                            <p className="text-lg">Privacy Policy | Terms & Conditions</p>
                            <p className="text-xxs mt-4">Copyright c 2024 Physics Wallah Pvt.Ltd. All rights reserved.</p>
                        </div>

                    </div>
                </footer>

                

                <footer className="sm:flex hidden flex-row justify-evenly p-20 bg-footerBg">
                    <div className="text-white">
                        <div className="flex flex-row items-center">
                            <Image
                                src={Assets.footerPW}
                                width={30}
                                height={30}
                            />
                            <p className="ml-2">Physics Wallah</p>
                        </div>
                        <p className="mt-8">We understand that every student has different<br /> needs and capabilities, Which is why we create such<br /> a wonderful and unique curriculum that is the best<br /> fit for every student.</p>
                        <a href="https://www.pw.live/about-us" target="_self" className="underline hover:cursor-pointer">...Read More</a>
                        <div className="mt-10 flex flex-row items-center">
                            {/* <button className="bg-gradient-to-r from-purple-500 to-red-500 text-white font-semibold rounded p-0.5">
                                <span className="flex w-full bg-gray-900 text-white rounded py-2 px-3 hover:cursor-pointer">
                                    Download Our App
                                </span>
                            </button> */}
                            <a href="https://play.google.com/store/apps/details?id=xyz.penpencil.physicswala" target="_blank">
                                <Image
                                src={Assets.google}
                                height={110}
                                width={110}
                                />
                            </a>
                            <a href="https://apps.apple.com/in/app/physics-wallah/id1641443555" target="_blank" className="ml-4">
                                <Image 
                                src={Assets.apple}
                                height={100}
                                width={100}
                                />
                            </a>
                        </div>
                    </div>

                    <div className="text-white">
                        <p>Get in touch</p>
                        <p className="my-4">Have queries? Feel free to get in<br /> touch wiith us right away!</p>
                        <div className="flex flex-row items-center hover:cursor-pointer">
                            <span><MdOutlineMail /></span>
                            <p className="ml-2">support@pw.live</p>
                        </div>
                    </div>

                    <div className="text-white">
                        <p>Follow us</p>
                        <div className="flex flex-row gap-2 my-4 ">
                            <span className="p-1 bg-white rounded-full text-black hover:cursor-pointer"><FaYoutube /></span>
                            <span className="p-1 bg-white rounded-full text-black hover:cursor-pointer"><FaInstagram /></span>
                            <span className="p-1 bg-white rounded-full text-black hover:cursor-pointer"><FaTelegramPlane /></span>
                            <span className="p-1 bg-white rounded-full text-black hover:cursor-pointer"><FaFacebookF /></span>
                            <span className="p-1 bg-white rounded-full text-black hover:cursor-pointer"><FaTwitter /></span>
                        </div>
                        <p>Privacy Policy | Terms & Conditions</p>
                        <p>Copyright c 2024 Physics Wallah Pvt.Ltd. All rights reserved.</p>
                    </div>
                </footer>
            
        </>

    )
}