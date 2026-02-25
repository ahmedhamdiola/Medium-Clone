import { useEffect, useState } from "react"
import {SolidIcons, OutlinedIcons} from "./utilities/icons.ts"
const SideBarButton = () => {
    const options = [
    {id: 1, name: 'Home', iconOutlined: OutlinedIcons.Home, iconSolid: SolidIcons.Home},
    {id: 2, name: 'Library', iconOutlined: OutlinedIcons.Bookmark, iconSolid: SolidIcons.Bookmark}, 
    {id: 3, name: 'Profile', iconOutlined: OutlinedIcons.User, iconSolid: SolidIcons.User},
    {id: 4, name: 'Stories', iconOutlined: OutlinedIcons.Stories, iconSolid: SolidIcons.Stories},
    {id: 5, name: 'Stats', iconOutlined: OutlinedIcons.Stats, iconSolid: SolidIcons.Stats}]
    const [active,setActive] = useState(1)
    useEffect(() => {
        console.log(active)
    },[active])
    return (
        <>
        {options.map((option) => {
            const isActive = active == option.id 
            const Icon = isActive ? option.iconSolid : option.iconOutlined
            return(
                <div
                key={option.id}
                className={`flex cursor-pointer text-[11px] hover:text-black h-5 mb-2.5 border-l ${
                    isActive ? "border-black text-black"
                : "border-transparent text-gray-500"
                }`}

                onClick={() => setActive(option.id)}>

                    <Icon className="size-4 ml-3" />
                    <span className="pl-3 cursor-pointer">
                        {option.name}
                    </span>
                </div>
                )
            })
    }
        </>
    )
}

export default SideBarButton
