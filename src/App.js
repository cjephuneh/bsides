import { BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import Home from './pages/Home';
import Volunter from './pages/volunter'
import Speakers from './pages/speakers'
import Registration from './pages/register';
import Schedule from './pages/schedule'
import CallforPapers from './pages/callsorpapers'
import Navbar from './pages/Navbar';
import About from './pages/about';
import Archives from './pages/Archives';
import Codeofconduct from './pages/code-of-conduct';

function App() {
  return (
    <div>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/volunteer" element={<Volunter />} />
          <Route path="/speakers" element={<Speakers />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/code-of-conduct" element={<Codeofconduct />} />
          <Route path="/archives" element={<Archives />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/callforpapers" element={<CallforPapers/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
