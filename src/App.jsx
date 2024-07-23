import React from 'react'
import Home from './pages/Home'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Signup from './pages/Signup'
import Login from './pages/Login'
import './index.css'
// import Navbar from './components/Navbar'


const App = () => {
  return (
    <div>
      <BrowserRouter>
          {/* <Navbar/> */}
        <Routes>
          <Route path='/all' element={<Home/>} />
          <Route path='/register' element={<Signup/>} />
          <Route path='/login' element={<Login/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App