import Logo from "../../assets/Logo.tsx";
import profilePic from "../../assets/profilePic.jpg";
import { Bars3Icon, BellIcon } from '@heroicons/react/24/outline'
import SearchBar from "./SearchBar";
import GetAppButton from "./GetAppButton";
import WriteButton from "./WriteButton.tsx";

const NavBar = () => {
    return (
    <nav className="flex sticky top-0 bg-white border-b border-gray-200 justify-between">
        <div className="flex items-center">
        <Bars3Icon className="size-4 cursor-pointer text-gray-500 ml-4 mt-1" />
        <Logo/>
        <SearchBar/>
        </div>
        <div className="flex items-center gap-4 mr-1">
            <GetAppButton />
            <WriteButton />
            <BellIcon className="size-4.5 text-gray-400 hover:text-gray-500 cursor-pointer"/>
            {/* Data here is put static as example .. in the future these should be dynamically assigned*/}
            <img src={profilePic} alt="Ahmed Hamdy" className="object-cover size-5 rounded-full hover:brightness-80 cursor-pointer mr-3"/>
        </div>
    </nav>
    )
}
export default NavBar