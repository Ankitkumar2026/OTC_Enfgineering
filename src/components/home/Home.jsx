import Navbar from '../layout/Navbar'
import Footer from '../layout/Footer'
import Hero from './Hero'
import About from '../home/About'
import Services from './Services'
import Projects from './Projects'
import Clients from './clients'
import Team from './Team'
import Contact from '../home/contacts'

export default function Home() {
  return (
    <>
      <Navbar />
       <Hero />
      <About />
      <Services />
      <Projects />
      <Clients />
      <Team />
      <Contact />
      <Footer />  
    </>
  )
}



