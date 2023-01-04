import './App.css';
import Navbar from "./Navbar"

import Home from "./Home"
import Main from "./Main";
import Movies from './Movies';
import Contact from "./Contact"
import { Route, Routes } from 'react-router';

function App() {
  return (
    <div className="App">
      <Navbar />
      
      <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/Contact" element={<Contact />}/>
      <Route path="/Movies" element={<Main />}/>
      <Route path='' element={< Main />}/>
      <Route path={"/:Series_Title"} element={<Movies />}/>
      </Routes>
      
    </div>
  );
}

export default App;
