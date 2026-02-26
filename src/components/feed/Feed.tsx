import CategoryButton from "./CategoryButton"
import {blogs} from "../../utilities/data"
import BlogCard from "./BlogCard"
const Feed = () => {

    const categories = [
        {id: 1, name: "For you"},
        {id: 2, name: "Featured"}
    ]
    return (
    <div className="ml-20 mr-20">
        <div className="font-semibold pt-5 sticky top-6 bg-white">
            <CategoryButton Categories={categories}/>
            <div className="pt-2 border-b border-gray-100 mb-4"></div>
        </div>
        
        <BlogCard blogs={blogs} />
    </div>
    )
}
export default Feed