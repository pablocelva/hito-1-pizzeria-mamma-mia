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
import Registro from './components/Registro'
import Login from './components/Login'


function App() {
  return (
    <>
      <Navbar/>
      {/* <Home/> */}
      <Registro />
      <Login />
      <Footer/>
    </>
  )
}

export default App
