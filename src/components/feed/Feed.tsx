import CategoryButton from "./CategoryButton"

const Feed = () => {
    const categories = [
        {id: 1, name: "For you"},
        {id: 2, name: "Featured"}
    ]
    return (
        <>
    <div className="ml-20 font-semibold mt-5 sticky top-11">
        <CategoryButton Categories={categories}/>
        <div className=" mr-15 pt-2 border-b border-gray-100 mb-4"></div>
    </div>
        </>
    )
}
export default Feed