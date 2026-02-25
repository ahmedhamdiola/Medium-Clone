import { useEffect, useState } from "react"
import { HomeIcon, BookmarkIcon, UserIcon, DocumentTextIcon, ChartBarIcon } from "@heroicons/react/24/outline"

const SideBarButton = () => {
    const options = [
    {id: 1, name: 'Home', icon: HomeIcon},
    {id: 2, name: 'Library', icon: BookmarkIcon}, 
    {id: 3, name: 'Profile', icon: UserIcon},
    {id: 4, name: 'Stories', icon: DocumentTextIcon},
    {id: 5, name: 'Stats', icon: ChartBarIcon}]
    const [active,setActive] = useState('home')
    return (
        <>
        {options.map((option) => {
            const Icon = option.icon
            return(
                <div className="flex box-border cursor-pointer opacity-50 hover:opacity-80 hover:opacity-80 border-l-1 border-transparent active:border-gray-800 h-5 mb-2.5" 
                onClick={() => setActive(option.name)}>

                    <Icon className="size-4 ml-3" />
                    <button className="pl-3 text-[11px] font-semibold cursor-pointer">
                        {option.name}
                    </button>
                </div>
                )
            })
    }
        </>
    )}

export default SideBarButton
