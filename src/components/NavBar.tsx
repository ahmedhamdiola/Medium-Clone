import logo from "../assets/medium-logo.png";
import { Bars3Icon } from '@heroicons/react/24/solid'
import SearchBar from "./SearchBar";

const NavBar = () => {
    return (
    <nav className="flex inset-ring inset-ring-gray-500/5 justify-between">
        <div className="flex">
        <Bars3Icon className="size-4 cursor-pointer opacity-30 mt-3 ml-3" />
        <img src={logo} alt="alt" className="w-21 cursor-pointer m-3 mr-2"/>
        <SearchBar/>
    </div>
            <button className="">To be continued...</button>
        <div>

        </div>
    </nav>
    )
}

export default NavBar
