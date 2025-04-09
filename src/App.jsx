
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import NavBar from './components/NavBar.jsx'
import Features from './components/Features.jsx'
import Storry from './components/Storry.jsx'
import Contanctt from './components/Contanctt.jsx'
import Footerr from './components/Footerr.jsx'

function App() {
  return (
   <main>
     <div>
      <main className="realtive min-h-screen w-screen overflow-x-hidden">
      <NavBar/>
      <Hero/>
      <About/>
      {/* <FFeatures/> */}
      <Features/> 
     <Storry/>
     <Contanctt/>
     <Footerr/>
     </main>
   </div>
    
   </main>
  )
}

export default App
