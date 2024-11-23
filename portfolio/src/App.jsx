import './App.css'
import  Navbar  from "./component/Navbar";
import AboutMe from "./component/AboutMe";
import Skill from "./component/Skill";

function App() {

  return (
    <div className="min-h-screen flex flex-col">
    <Navbar />
    <AboutMe />
    <Skill/>
</div>

  )
}

export default App
