import { useState } from "react";
import { BrowserRouter } from "react-router-dom"; // Import BrowserRouter
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Banner from "./Components/Banner/Banner";
import About from "./Components/About/About";
import Experience from "./Components/Experience/Experience";
import Footer from "./Components/Footer/Footer";
import SkillsSection from "./Components/Skills/Skills";
import Projects from "./Components/Projects/Projects";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter> {/* Wrap everything inside BrowserRouter */}
      <Navbar />
      <Banner />
      <About />
      <SkillsSection />
      <Projects />
      <Experience />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
