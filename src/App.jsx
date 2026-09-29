import Navbar from "./components/NavBar"
import Hero from "./components/Hero"
import AboutSection from "./components/AboutSection"
export default function App(){
  return (
    <>
    <Navbar />
    <Hero />
    <main>
     <AboutSection /> 
    </main>
    </>
  )
}