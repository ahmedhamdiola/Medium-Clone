import Feed from "./components/feed/Feed"
import NavBar from "./components/navbar/NavBar"
import SideBar from "./components/sidebar/SideBar"

function App() {

  return (
    <>
      <NavBar />
      <div className="flex h-1000 max-w-7xl mx-auto"> {/* main layout (PARENT)*/}
        <div className="w-[15%] border-r border-gray-200"> {/* sidebar */}
          <div className="sticky top-10 pt-3 pl-0.5">
          <SideBar />
          </div>
        </div>
        <div className=" w-[60%]">
          <Feed />
        </div> {/* center */}
        <div className="bg-yellow-500 w-[25%]">rightbar</div> {/* rightbar */}
      </div>
    </>
  )
}

export default App
