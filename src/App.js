import React from 'react'
import SignUp from './Components/SignUp'
import './App.css';
import Home from './Components/Home'
import { BrowserRouter, Routes,Route } from 'react-router-dom';
function App() {
  return (
   <div className='App'>
      <BrowserRouter>
      <Routes>
        <Route path= '/' element={<SignUp/>} />
        <Route path = '/Home' elements={< Home/>} />
       </Routes>
      
      </BrowserRouter>
      </div>
  );
}

export default App;
