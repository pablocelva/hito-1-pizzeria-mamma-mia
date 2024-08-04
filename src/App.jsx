import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
//Importando Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
//Importando componentes
import Navbar from './components/Navbar'
import Home from './components/Home'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar/>
      <Home/>
      <Footer/>
    </>
  )
}

export default App
