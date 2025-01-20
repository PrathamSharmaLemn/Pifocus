import { useState } from "react";
import { BsChatLeftTextFill } from "react-icons/bs";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { Assets } from "../../public/Assests";
import Image from "next/image";
import { FaArrowUp } from "react-icons/fa";
import WhatsappChatBox from "../WhatsappChatBox/WhatsappChatBox";
import { TrackGoogleAnalyticsEvent } from "../../utils/analytics";

const phone = process.env.NEXT_PUBLIC_PHONENO
export default function ChatWithUs() {
    const [openChat, setOpenChat] = useState(false)
    return (
        <>
            {/* <a href={`https://wa.me/${phone}`} target="_blank"  className="sm:hidden flex bg-white text-bgColor p-3 rounded-full hover:cursor-pointer fixed z-50 bottom-4 right-4">
                <BsChatLeftTextFill
                    style={{ width: 20, height: 20 }}
                />
            </a> */}



            {/* {openChat && <WhatsappChatBox setOpenChat={setOpenChat} />} */}

            <span onClick={() => {
                TrackGoogleAnalyticsEvent('contact_click', 'Contact', {
                    method: 'whatsapp'
                });
                window.open(`https://wa.me/9289105061`)
            }} className=" text-bgColor p-0 rounded-full hover:cursor-pointer fixed  z-50 right-5 bottom-5">
                {/* {!openChat && <BsChatLeftTextFill
                    style={{ width: 30, height: 30 }}
                />}
                {openChat && <IoMdClose
                    style={{ width: 30, height: 30 }}

                />} */}
                {/* { */}
                {/* <div className=" relative">
                        <p className="text-black p-2 absolute w-fit -top-10 -left-32 rounded-t-xl rounded-bl-xl bg-white">Any Questions ?</p>
                        <img src={"/whatsapp.png"} className="w-14 h-14" />
                    </div> */}
                <div  className="fixed h-16   -bottom-2 sm:bottom-0 right-4 flex flex-col items-center">
                    <div className="relative ">
                        {/* Animated "Any Questions?" Message */}

                        <p
                        // className=""
                            className="text-black w-fit p-2 py-1 text-nowrap text-xxs sm:text-xs absolute min-w-14 -top-12 -right-0  sm:-top-12 sm:-left-4 rounded-full rounded-br-none   bg-white transition-opacity duration-500 ease-in-out animate-fade-in-out"
                        >
                            Live Chat
                        </p>

                        

                        {/* WhatsApp Button */}
                        <img
                            src="/whatsapp.png"
                            className="w-12 h-12 sm:w-14 sm:h-14 shadow-lg cursor-pointer animate-bounce hover:scale-110 transition-transform duration-200"
                            // className="w-14 h-14 rounded-full shadow-lg cursor-pointer animate-bounce hover:scale-110 transition-transform duration-200"
                            alt="Chat with us on WhatsApp"
                        />
                    </div>t
                </div>

                {/* // } */}

            </span>

            {/* <a href={`https://wa.me/${phone}`} target="_blank" className="sm:flex hidden bg-white text-bgColor p-4 rounded-full fixed  z-50 right-4 bottom-4">
                <BsChatLeftTextFill
                    style={{ width: 30, height: 30 }}
                />

            </a> */}

        </>

    )
}