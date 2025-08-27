import React from 'react'
import './index.css' // Importante para Tailwind 
import {Routes,Route} from 'react-router-dom'
import Catalog from './pages/Catalog'
import Home from '../src/pages/Home'



function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      
      <Route path="/catalog" element={<Catalog/>} />
    </Routes>
  )
}

export default App
