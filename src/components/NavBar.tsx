import logo from "../assets/medium-logo.png";
import { Bars3Icon } from '@heroicons/react/24/solid'
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'

const NavBar = () => {
    return (
    <nav className="flex inset-ring inset-ring-gray-500/5 justify-between">
        <div className="flex">
        <Bars3Icon className="size-4 cursor-pointer opacity-30 mt-3 ml-3" />
        <img src={logo} alt="alt" className="w-21 cursor-pointer m-3 mr-2"/>

    <div className="relative w-40 ">
            <MagnifyingGlassIcon className="absolute w-4 left-2 top-3 opacity-50"/>
        <input type="text" placeholder="Search" className="bg-[#F9F9F9] w-full text-[10px] h-8 font-sans pl-8 pr-3 pt-0.7 rounded-full focus:outline-none mt-1 font-semibold "/>
    </div>

        </div>
            <button className="">To be continued...</button>
        <div>

        </div>
    </nav>
    )
}

export default NavBar
