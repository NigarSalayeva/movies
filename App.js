import './App.css';
import Header from "./Header";
import Main from "./Main";
import Movies from './Movies';
import { Route, Routes } from 'react-router';

function App() {
  return (
    <div className="App">
      <Header />
      
      <Routes>
        <Route path='' element={< Main />}/>
        <Route path={"/:Series_Title"} element={<Movies />}/>
      </Routes>
      
    </div>
  );
}

export default App;
