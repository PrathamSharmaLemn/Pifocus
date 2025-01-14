// import { Input } from "antd";
import { useState, useEffect, useRef } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { FaArrowUp } from "react-icons/fa";
import AnswerBotSide from "./AnswerBotSide";
import ReplyUserSide from "./ReplyUserSide";

export default function WhatsappChatBox({ setOpenChat }) {
    const [items, setItems] = useState([]);
    const containerRef = useRef(null);

    const modalRef = useRef(null);

    const handleOutsideClick = (event) => {
        if (modalRef.current && !modalRef.current.contains(event.target)) {
            setOpenChat(false) // Close the modal if clicked outside
        }
    };
    // if (!isOpen) return null; // Don't render the modal if it's not open
    const addItem = () => {
        setItems((prevItems) => [...prevItems, `Item ${prevItems.length + 1}`]);
    };

    useEffect(() => {
        const container = containerRef.current;
        if (container) {
            container.scrollTop = container.scrollHeight;
        }
    }, [items]);
    return (
        <div className="sm:flex hidden flex-col justify-between bg-white text-bgColor h-[82%] w-1/4 fixed  z-50 right-4 bottom-24 rounded-xl">
            <div className="w-full min-h-14 bg-blue-600 rounded-t-xl flex flex-row justify-between px-4 items-center">
                <span className="text-white font-bold text-2xl">ChatBot</span>
                <MdOutlineKeyboardArrowDown onClick={() => setOpenChat(false)} className="text-white hover:cursor-pointer" style={{ width: 25, height: 25 }} />
            </div>
            <div ref={containerRef}
                className="max-h-full overflow-y-scroll scrollbar-hide">
                <AnswerBotSide />
                <ReplyUserSide />
                <AnswerBotSide />
                <ReplyUserSide />
                <AnswerBotSide />
                <ReplyUserSide />
                <AnswerBotSide />
                <ReplyUserSide />
                <AnswerBotSide />
                <ReplyUserSide />
                <ReplyUserSide />
                <ReplyUserSide />
                <ReplyUserSide />
                <AnswerBotSide />
                <div>

                </div>
            </div>
            <div className="h-16 w-full flex items-center px-2 py-4 relative">
                <Input placeholder="Enter Message . . . . . . . ." className="py-2 rounded-full" />
                <div className="text-white bg-blue-700 w-8 rounded-full hover:cursor-pointer flex justify-center items-center h-8 absolute right-3 bottom-4">
                    <FaArrowUp width={40} height={40} />
                </div>
            </div>
        </div>
    )
}