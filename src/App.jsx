import './App.css'
import Login from './pages/login'
import Signin from './pages/signin';
import Welcome from './pages/welcome';
import Sent from './pages/sent'

import {BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";



function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Welcome/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/sent' element={<Sent/>}/>
      </Routes>
    </Router>
  );
    
}

export default App
