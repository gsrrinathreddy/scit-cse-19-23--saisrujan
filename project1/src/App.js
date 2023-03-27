import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import {Routes,Route} from 'react-router-dom';
import Home from './Pages/Home';
import IDE from './Pages/IDE';
import Practise from './Pages/Practise';
import Qualification from './Pages/Qualification';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
         <Route path='/Home' element={<Home/>}/>
         <Route path='/Qualification' element={<Qualification/>}/>
         <Route path='/IDE' element={<IDE/>}/>
         <Route path='/Practise' element={<Practise/>}/>
      </Routes>
    </div>
  );
}

export default App;
