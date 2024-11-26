import { BsChatLeftTextFill } from "react-icons/bs";

export default function ChatWithUs() {
    return (
        <>
                <span className="sm:hidden flex bg-white text-bgColor p-3 rounded-full hover:cursor-pointer fixed z-50 bottom-4 right-4">
                    <BsChatLeftTextFill
                        style={{ width: 20, height: 20 }}
                    />
                </span>
                
                <span className="sm:flex hidden bg-white text-bgColor p-4 rounded-full hover:cursor-pointer fixed  z-50 right-4 bottom-4">
                    <BsChatLeftTextFill
                        style={{ width: 30, height: 30 }}
                    />
                </span>
        </>

    )
}