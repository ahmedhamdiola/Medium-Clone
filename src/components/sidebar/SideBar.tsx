import { HomeIcon, BookmarkIcon, UserIcon, DocumentTextIcon, ChartBarIcon } from "@heroicons/react/24/outline"
import { useState } from "react"
import SideBarButton from "./SideBarButton"

const options = [
    {id: 1, name: 'Home', icon: HomeIcon},
    {id: 2, name: 'Library', icon: BookmarkIcon}, 
    {id: 3, name: 'Profile', icon: UserIcon},
    {id: 4, name: 'Stories', icon: DocumentTextIcon},
    {id: 5, name: 'Stats', icon: ChartBarIcon}]
const SideBar = () => {
    return (
    <div className="pt-3">
        <div>
        {
            options.map((option) => {
                return(
                    <SideBarButton name={option.name} icon={option.icon}/>
                )
            })
        }
        </div>
    </div>
    )
}

export default SideBar
