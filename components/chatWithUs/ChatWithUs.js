import { useState } from "react";
import { BsChatLeftTextFill } from "react-icons/bs";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { Assets } from "../../public/Assests";
import Image from "next/image";
import { FaArrowUp } from "react-icons/fa";
import WhatsappChatBox from "../WhatsappChatBox/WhatsappChatBox";

const phone=process.env.NEXT_PUBLIC_PHONENO
export default function ChatWithUs() {
    const [openChat, setOpenChat] = useState(false)
    return (
        <>
            <a href={`https://wa.me/${phone}`} target="_blank"  className="sm:hidden flex bg-white text-bgColor p-3 rounded-full hover:cursor-pointer fixed z-50 bottom-4 right-4">
                <BsChatLeftTextFill
                    style={{ width: 20, height: 20 }}
                />
            </a>



            {openChat && <WhatsappChatBox setOpenChat={setOpenChat} />}

            <span className="sm:flex hidden bg-white text-bgColor p-4 rounded-full hover:cursor-pointer fixed  z-50 right-4 bottom-4">
                {!openChat && <BsChatLeftTextFill
                    style={{ width: 30, height: 30 }}
                />}
                {openChat && <IoMdClose
                    style={{ width: 30, height: 30 }}

                />}

            </span>
            
            <a href={`https://wa.me/${phone}`} target="_blank" className="sm:flex hidden bg-white text-bgColor p-4 rounded-full fixed  z-50 right-4 bottom-4">
                <BsChatLeftTextFill
                    style={{ width: 30, height: 30 }}
                />

            </a>
        </>

    )
}