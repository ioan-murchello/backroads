import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Servises from "./components/Servises";
import About from "./components/About";
import Tours from './components/Tours'
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About/>
      <Servises />
      <Tours/>
      <Footer/>
    </>
  );
}

export default App;
