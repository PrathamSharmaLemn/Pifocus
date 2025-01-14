import Image from "next/image"
import { Assets } from "../../public/Assests"

export default function AnswerBotSide() {
    return (
        <div className=" flex w-fit flex-row px-1 justify-center my-2">
                        <div className="w-10 flex flex-col justify-end  items-center">
                            <Image
                            src={Assets.logo}
                            width={25}
                            height={25}
                            className="p-1 bg-blue-700 rounded-full"
                            />
                        </div>
                        <p className="text-xs h-fit  max-w-72 bg-blue-200 rounded-t-xl rounded-br-xl px-2 py-2">lorem vnlk vnlek vnelr cmsod noce lorem vnlk vnlek vnelr cmsod noce lorem vnlk vnlek vnelr cmsod noce lorem vnlk vnlek vnelr cmsod noce lorem vnlk vnlek vnelr cmsod noce lorem vnlk vnlek vnelr cmsod noce lorem vnlk vnlek vnelr cmsod noce lorem vnlk vnlek vnelr cmsod noce lorem vnlk vnlek vnelr cmsod noce lorem vnlk vnlek vnelr cmsod noce
                        </p>
                    </div>
    )
}