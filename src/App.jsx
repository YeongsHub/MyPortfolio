import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Contact from "./components/Contact";
import { Routes, Route } from "react-router-dom";
import ProjectDetail from './pages/ProjectDetail'; 

import './App.css'

function App() {
  return (
    <>
    <div className="App">
    <Routes>
      <Route path="/" element={
        <>
         <Header />
         <AboutMe />
         <Skills />
         <Project />
        </>
      } />
      <Route path="/Header" element={<Header />} />
      <Route path="/AboutMe" element={<AboutMe />} />
      <Route path="/Skills" element={<Skills />} />
      <Route path="/project" element={<Project />} />
      <Route path="/detail/:id" element={<ProjectDetail /> } />
    </Routes>
    <Contact />
    </div>
    </>
  )
}





export default App
