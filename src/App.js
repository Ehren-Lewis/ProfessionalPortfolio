import "./App.css"

import Header from './layouts/header';
import AboutMe from './components/aboutMe';
import Footer from './layouts/footer';
import Projects from './components/projects';
import  EhrenResume from "./images/EhrenLewisResume.pdf"
import Sidebar from './layouts/sidebar/sidebarindex';

// import {
//   BrowserRouter,
//   Route,
//   Routes,
//     Link
// } from 'react-router-dom'

function App() {
  return (
    <>
          <Sidebar />

      <div className='container'>
      {/* <nav className="nav">

            <a href="#about" className="cyber-grey">About Me</a>
            <a href="#projects" className='cyber-grey'>Projects</a>
            <a className="cyber-grey" href="mailto:ehrenlewis0@gmail.com">Contact Me</a>
            <a className="cyber-grey" href={EhrenResume} download>Resume </a>
      </nav> */}
      <Header />
      <div>
        <AboutMe id="about" />
        <Projects id="projects"/>
      </div>

      
      {/* <Footer /> */}
    </div>
    </>

  );
}

export default App;
