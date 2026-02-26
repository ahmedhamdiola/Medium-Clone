import CategoryButton from "./CategoryButton"
import profilePic from "../../assets/profilePic.jpg"
import BlogCard from "./BlogCard"
const Feed = () => {

    const categories = [
        {id: 1, name: "For you"},
        {id: 2, name: "Featured"}
    ]
    const blogs = [
        {
        publisher: "Galacticos",
        writer: "Ahmed Hamdy",
        title: "Did Galacticos Fall and Reached Their End?",
        description: "The answer isn't as obvious as I used to believe.",
        date: "3d ago",
        likes: 420,
        comments: 12,
        pic: profilePic
    },
    {
        publisher: "Data Science Collective",
        writer: "Marina Wyss",
        title: "Should You Still Learn to Code in 2026?",
        description: "AI is evolving fast, but coding still holds unexpected value.",
        date: "5d ago",
        likes: 980,
        comments: 34,
        pic: profilePic
    },
    {
        publisher: "Tech Today",
        writer: "Omar Khaled",
        title: "Why React is Still Dominating Frontend",
        description: "Despite new frameworks, React keeps leading the ecosystem.",
        date: "1w ago",
        likes: 650,
        comments: 20,
        pic: profilePic
    },
    {
        publisher: "Startup Insider",
        writer: "Laila Hassan",
        title: "From Zero to SaaS in 6 Months",
        description: "How small teams are building profitable SaaS products fast.",
        date: "2w ago",
        likes: 1200,
        comments: 56,
        pic: profilePic
    },    {
        publisher: "Galacticos",
        writer: "Ahmed Hamdy",
        title: "Did Galacticos Fall and Reached Their End?",
        description: "The answer isn't as obvious as I used to believe.",
        date: "3d ago",
        likes: 420,
        comments: 12,
        pic: profilePic
    },
    {
        publisher: "Data Science Collective",
        writer: "Marina Wyss",
        title: "Should You Still Learn to Code in 2026?",
        description: "AI is evolving fast, but coding still holds unexpected value.",
        date: "5d ago",
        likes: 980,
        comments: 34,
        pic: profilePic
    },
    {
        publisher: "Tech Today",
        writer: "Omar Khaled",
        title: "Why React is Still Dominating Frontend",
        description: "Despite new frameworks, React keeps leading the ecosystem.",
        date: "1w ago",
        likes: 650,
        comments: 20,
        pic: profilePic
    },
    {
        publisher: "Startup Insider",
        writer: "Laila Hassan",
        title: "From Zero to SaaS in 6 Months",
        description: "How small teams are building profitable SaaS products fast.",
        date: "2w ago",
        likes: 1200,
        comments: 56,
        pic: profilePic
    },    {
        publisher: "Galacticos",
        writer: "Ahmed Hamdy",
        title: "Did Galacticos Fall and Reached Their End?",
        description: "The answer isn't as obvious as I used to believe.",
        date: "3d ago",
        likes: 420,
        comments: 12,
        pic: profilePic
    },
    {
        publisher: "Data Science Collective",
        writer: "Marina Wyss",
        title: "Should You Still Learn to Code in 2026?",
        description: "AI is evolving fast, but coding still holds unexpected value.",
        date: "5d ago",
        likes: 980,
        comments: 34,
        pic: profilePic
    },
    {
        publisher: "Tech Today",
        writer: "Omar Khaled",
        title: "Why React is Still Dominating Frontend",
        description: "Despite new frameworks, React keeps leading the ecosystem.",
        date: "1w ago",
        likes: 650,
        comments: 20,
        pic: profilePic
    },
    {
        publisher: "Startup Insider",
        writer: "Laila Hassan",
        title: "From Zero to SaaS in 6 Months",
        description: "How small teams are building profitable SaaS products fast.",
        date: "2w ago",
        likes: 1200,
        comments: 56,
        pic: profilePic
    },    {
        publisher: "Galacticos",
        writer: "Ahmed Hamdy",
        title: "Did Galacticos Fall and Reached Their End?",
        description: "The answer isn't as obvious as I used to believe.",
        date: "3d ago",
        likes: 420,
        comments: 12,
        pic: profilePic
    },
    {
        publisher: "Data Science Collective",
        writer: "Marina Wyss",
        title: "Should You Still Learn to Code in 2026?",
        description: "AI is evolving fast, but coding still holds unexpected value.",
        date: "5d ago",
        likes: 980,
        comments: 34,
        pic: profilePic
    },
    {
        publisher: "Tech Today",
        writer: "Omar Khaled",
        title: "Why React is Still Dominating Frontend",
        description: "Despite new frameworks, React keeps leading the ecosystem.",
        date: "1w ago",
        likes: 650,
        comments: 20,
        pic: profilePic
    },
    {
        publisher: "Startup Insider",
        writer: "Laila Hassan",
        title: "From Zero to SaaS in 6 Months",
        description: "How small teams are building profitable SaaS products fast.",
        date: "2w ago",
        likes: 1200,
        comments: 56,
        pic: profilePic
    },
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