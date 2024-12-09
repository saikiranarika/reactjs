import React from 'react'
import { Routes,Route } from 'react-router-dom'
import './App.css'
import LandingPage from './stores/pages/LandingPage'
import MobilePage from './stores/pages/MobilePage'
function App() {
  return (
    <div>
     <Routes>
       <Route path='/'element = {<LandingPage/>}/>
       <Route path='/mobiles'element = {<MobilePage/>}/>
     </Routes>
     
    </div>
  )
}

export default App
