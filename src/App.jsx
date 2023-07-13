import { useState } from 'react'
import './App.css'
import Login from './components/login/Login'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from './components/signup/Signup';
import Navbar from './components/navbar/Navbar';
import Problems from './components/problemlist/Problems';
import Problempage from './components/problempage/Problempage';
import Trial from './components/trial/Trial';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/problems" element={<Problems />} />
          <Route path="/problems/:pid/" element={<Trial />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
