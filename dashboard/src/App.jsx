import Content1 from "./Components/Content1"
import NavBar from "./Components/NavBar"
import Header from "./Components/header"
export default function App() {
  return (
    <div className="h-full flex">
      <NavBar />
      <div className="flex flex-col w-full ">
        <Header />
        <Content1/>
      </div>
    </div>
  )
}
