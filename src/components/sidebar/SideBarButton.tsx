import { useEffect, useState } from "react"
import {SolidIcons, OutlinedIcons} from "../../utilities/icons.ts"
const SideBarButton = () => {
    const mainOptions = [
    {id: 1, name: 'Home', iconOutlined: OutlinedIcons.Home, iconSolid: SolidIcons.Home},
    {id: 2, name: 'Library', iconOutlined: OutlinedIcons.Library, iconSolid: SolidIcons.Library}, 
    {id: 3, name: 'Profile', iconOutlined: OutlinedIcons.User, iconSolid: SolidIcons.User},
    {id: 4, name: 'Stories', iconOutlined: OutlinedIcons.Stories, iconSolid: SolidIcons.Stories},
    {id: 5, name: 'Stats', iconOutlined: OutlinedIcons.Stats, iconSolid: SolidIcons.Stats}
    ]
    const secondaryOptions = [
    {id: 6, name: 'Following', iconOutlined: OutlinedIcons.Following, iconSolid: SolidIcons.Following},
    ]
    const [active,setActive] = useState(1)
    useEffect(() => {
        console.log(active)
    },[active])
    const renderOptions = (options : typeof mainOptions) =>
        options.map((option) => {
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
    return (
        <div className="">
            {renderOptions(mainOptions)}
            <div className="pt-3 border-b border-gray-200 mb-4"></div>
            {renderOptions(secondaryOptions)}
        </div>
    )
}

export default SideBarButton
