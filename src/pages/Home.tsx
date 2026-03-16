import Navbar from "../components/layout/Navbar"
import Footer from "../components/layout/Footer"
import Hero from "../components/sections/Hero"
import About from "../components/sections/About"
import Projects from "../components/sections/Projects"
import ContactCTA from "../components/sections/ContactCTA"

function Home() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  )
}

export default Home