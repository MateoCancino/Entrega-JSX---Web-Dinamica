import './App.css'
import Login from './screens/login'
import Signin from './screens/signin';
import Welcome from './screens/welcome';
import Sent from './screens/sent'

import {BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";



function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Welcome/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='signin' element={<Signin/>}/>
        <Route path='sent' element={<Sent/>}/>
      </Routes>
    </Router>
  );
    
}

export default App
