import SideBarButton from "./SideBarButton"
import {OutlinedIcons} from "../../utilities/icons"
const SideBar = () => {
    return (
    <div className="pt-3 ">
        <div>
            <SideBarButton />
            <div className="flex">
                <OutlinedIcons.Plus className="size-5 ml-4 text-gray-700"/>
                <span className="text-[9px] pl-3 text-gray-600">Find writers and publications to follow.</span>
            </div>
                <p className="text-[9px] ml-10 mt-1 text-gray-600 underline cursor-pointer hover:text-black" onClick={() => {window.location.href = "https://medium.com/"}}>See suggestions</p>
        </div>
    </div>
    )
}

export default SideBar
