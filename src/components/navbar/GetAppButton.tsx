import { QrCodeIcon } from "@heroicons/react/24/outline"

const GetAppButton = () => {
    return (
    <div className="relative">
        <QrCodeIcon className="absolute size-4 text-white top-1.5 left-2 cursor-pointer"/>
        <button className="bg-black text-white w-17 h-6 rounded-xl text-[9px] pl-5 font-semibold cursor-pointer ">Get App</button>
    </div>
    )
}

export default GetAppButton