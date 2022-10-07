import './App.css';

import Header from './layouts/header';
import AboutMe from './components/aboutMe';
import Footer from './layouts/footer';

import {
  BrowserRouter,
  Route,
  Routes
  // Link
} from 'react-router-dom'
import Projects from './components/projects';

function App() {
  return (
    <body className='container'>
      <Header />
      {/* <AboutMe /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AboutMe />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </body>
  );
}

export default App;
