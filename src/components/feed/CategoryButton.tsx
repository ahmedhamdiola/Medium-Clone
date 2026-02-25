import { useState } from "react"

interface Category{
    id: number,
    name: string
}
interface Props{
    Categories :Category[]
}
const CategoryButton = ({Categories} : Props) => {
    const [active,setActive] = useState(1)
    return (
        Categories.map((category) => {
        const isActive = active === category.id
        return(
            <span className={`mr-6 text-[9px] cursor-pointer hover:text-black ${isActive ? `border-b text-gray-800 border-black pb-3` : `text-gray-500`}`}
            onClick={() => setActive(category.id)}>
                {category.name}
            </span>
        )
    })

    )
}

export default CategoryButton
