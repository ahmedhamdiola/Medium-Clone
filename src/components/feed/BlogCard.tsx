import { OutlinedIcons, SolidIcons } from "../../utilities/icons";
interface Blog{
    publisher: string,
    writer: string,
    title: string,
    description: string,
    date: string,
    likes: number,
    comments: number,
    pic: string;
}
interface Props{
    blogs: Blog[]
}


const BlogCard = ({blogs}: Props) => {
    const styleNames = "text-gray-800 hover:underline cursor-pointer"
    return<>
    {blogs.map((blog) => {
        const Publisher = <span className={styleNames}>{blog.publisher}</span>
        const Writer = <span className={styleNames}>{blog.writer}</span>
        return (
        <div className="flex items-center justify-between cursor-pointer mb-5">

        <div className="flex-1 pr-8">
        
            <div className="flex pt-3">
                <img src={blog.pic} alt="logo" className="object-cover size-4 hover:brightness-80 cursor-pointer rounded-xs ml-1"/>
                <p className="pl-1 text-[9px] text-gray-500">In {Publisher} by {Writer}
                </p>
            </div>
                <div>
                    <h1 className="text-[18px] tracking-tighter font-bold pt-1 pl-1">{blog.title}</h1>
                    <p className="pl-1 text-[10px] text-gray-500 font-semibold pt-1">{blog.description}</p>
                </div>
                <div className="flex justify-between  ">
                    <div className="mt-3 flex gap-3">
                        <SolidIcons.Star className="ml-1 size-3 text-yellow-300"/>
                        <p className="text-[8px] text-gray-500">{blog.date}</p>
                        <div className="flex">
                            <SolidIcons.HandThumbUpIcon className="size-3 text-gray-600"/>
                            <span className="text-[8px] text-gray-500 pl-1">{blog.likes}</span>
                        </div>
                        <div className="flex">
                            <SolidIcons.ChatBubbleOvalLeftIcon className="size-3 text-gray-600" />
                            <span className="text-[8px] text-gray-500 pl-1">{blog.comments}</span>
                        </div>
                        
                    </div>
                    <div className="flex gap-4 pt-2">
                        <OutlinedIcons.HandThumbDownIcon className="size-4 text-gray-400 hover:text-gray-600" />
                        <OutlinedIcons.Bookmark className="size-4 text-gray-400 hover:text-gray-600"/>
                        <OutlinedIcons.EllipsisHorizontalIcon className="size-4 text-gray-400 hover:text-gray-600"/>
                    </div>
                </div>
        </div>
        <img src={blog.pic} alt="" className="size-15 object-cover justify-end" />
    </div>

        )
    })}
    </>
}
export default BlogCard