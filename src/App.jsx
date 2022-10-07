import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Project from "./components/Project";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Technology from "./components/Technology";

function App() {
  return (
    <div>
        <Routes>
          <Route 
            path="/"
            element={<Home />} 
          />
          <Route 
            path="about"
            element={<About />}
          />
          <Route 
            path="contact" 
            element={<Contact />} 
          />
          <Route 
            path="service" 
            element={<Services />} 
          />
          <Route 
            path="skills" 
            element={<Skills />} 
          />
          <Route 
            path="project" 
            element={<Project />} 
          />
          <Route 
            path="technology" 
            element={<Technology />} 
          />
        </Routes>
    </div>
  );
}

export default App;
