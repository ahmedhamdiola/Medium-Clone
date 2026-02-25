import { 
    HomeIcon 
    } from "@heroicons/react/24/outline"
import { useEffect, useState } from "react"
interface Props{
    name: string,
    icon: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement>, "ref"> & {
    title?: string;
    titleId?: string;
} & React.RefAttributes<SVGSVGElement>>
}
const SideBarButton = (props : Props) => {
    const [active,setActive] = useState('home')
    const Icon = props.icon
    useEffect(() => {
        console.log(active)
    }, [active])
    return (
        <div className="flex box-border cursor-pointer opacity-50 hover:opacity-80 hover:opacity-80 border-l-1 border-transparent active:border-gray-800 h-5 mb-2.5" onClick={() => setActive(props.name)}>
        <Icon className="size-4 ml-3" />
        <button className="pl-3 text-[11px] font-semibold cursor-pointer">
            {props.name}
        </button>
    </div>
    )
}

export default SideBarButton
