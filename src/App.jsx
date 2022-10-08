import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Home from "./components/Home";
import Project from "./components/Project";
import Services from "./components/Services";
import Teams from "./components/Teams";
import Technology from "./components/Technology";

function App() {
  return (
    <div  className='bg-black-russian  min-h-screen'>
      <BrowserRouter>
    <Header />
      <div className="text-cyan-300">
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
            path="team" 
            element={<Teams />} 
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
    </BrowserRouter>
    </div>
  );
}

export default App;
