import { MagnifyingGlassIcon } from '@heroicons/react/16/solid'
const SearchBar = () => {
    return (
    <div className="relative w-40 ">
        <MagnifyingGlassIcon className="absolute w-4 left-2 top-3 text-gray-400"/>
        <input type="text" placeholder="Search" className="bg-[#F9F9F9] w-full text-[10px] h-8 font-sans pl-8 pr-3 pt-0.7 rounded-full focus:outline-none mt-1 font-semibold "/>
    </div>
    )
}

export default SearchBar