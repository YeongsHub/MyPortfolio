import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Project from "./components/Project";

import Career from "./components/Career";
import Education from "./components/Education";

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
         <Career />
         <Education />
        </>
      } />
      <Route path="/Header" element={<Header />} />
      <Route path="/AboutMe" element={<AboutMe />} />
      <Route path="/Skills" element={<Skills />} />
      <Route path="/project" element={<Project />} />
      <Route path="/detail/:id" element={<ProjectDetail /> } />
      <Route path="/career" element={<Career />} />
      <Route path="/education" element={<Education />} />
    </Routes>

    <footer 
        style={{ 
          textAlign: 'center', 
          padding: '1rem', 
          marginTop: '2rem'
        }}
      >
        <p>© 2025. Yeon-Gyung Wi. All rights reserved.</p>
      </footer>

    </div>
    </>
  )
}





export default App
