import './App.css';

// import Header from './layouts/header';
import AboutMe from './components/aboutMe';
import Footer from './layouts/footer';
import Projects from './components/projects';
import  EhrenResume from "./images/EhrenLewisResume.pdf"


import {
  BrowserRouter,
  Route,
  Routes,
    Link
} from 'react-router-dom'

function App() {
  return (
      <div className='container'>
      {/* <Header /> */}
      <BrowserRouter>
      <nav className="nav">
            <Link className="cyber-grey" to="/">About Me</Link>
            <Link className="cyber-grey" to="/projects" >Projects</Link>
            <a className="cyber-grey" href="mailto:ehrenlewis0@gmail.com">Contact Me</a>
            <a className="cyber-grey" href={EhrenResume} download>Resume </a>
      </nav>


      <div>
          <Routes>
            <Route exact path="/"  element={<AboutMe />} />
            <Route exact path="/projects"  element={<Projects />} /> 
          </Routes>
      </div>

      </BrowserRouter>
      
      <Footer />
    </div>

  );
}

export default App;
