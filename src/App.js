import React from 'react';
import './App.css';
import { HashRouter, Route, BrowserRouter, Routes } from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/About';
import Navigation from './components/Navigation';

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/about' element={<About/>}/>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
