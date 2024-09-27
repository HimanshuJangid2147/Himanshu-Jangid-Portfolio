import Navbar from "./sections/navbar.jsx";
import Hero from "./sections/hero.jsx";
import About from './sections/About.jsx';
import Projects from "./sections/Projects.jsx";
import Contact from "./sections/contact.jsx";
import Footer from "./sections/footer.jsx";

const App = () => {
    return (
        <main className="max-w-full mx-auto">
            <Navbar />
            <Hero />
            <About />
            <Projects />

            <Contact />
            <Footer />
        </main>
    )
}
export default App