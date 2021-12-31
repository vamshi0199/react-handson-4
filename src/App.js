import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Header from './Component/Header';
import Home from './Component/Home';
import Student from './Component/Student';
import Contact from './Component/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
     <Router>
       <Header/>
       <Routes>
         <Route path='/Home'  element={<Home/>}/>
         <Route path='/student' element={<Student/>}/>
         <Route path='/Contact' element={<Contact/>}/>
  
       </Routes>
     </Router>
    </div>
  );
}

export default App;
