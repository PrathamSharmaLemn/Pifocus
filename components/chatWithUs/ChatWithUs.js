import { BsChatLeftTextFill } from "react-icons/bs";
import useWindowDimensions from "../../Dimensions";

export default function ChatWithUs() {
    const { width } = useWindowDimensions()
    return (
        <>
            {width < 478 ?
                <span className="bg-white text-bgColor p-3 rounded-full hover:cursor-pointer fixed top-[610px] z-50 right-[15px]">
                    <BsChatLeftTextFill
                        style={{ width: 20, height: 20 }}
                    />
                </span>
                :
                <span className="bg-white text-bgColor p-4 rounded-full hover:cursor-pointer fixed top-[620px] z-50 right-[15px]">
                    <BsChatLeftTextFill
                        style={{ width: 30, height: 30 }}
                    />
                </span>
            }
        </>

    )
}