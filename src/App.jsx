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
<<<<<<< HEAD
import Cart from './components/Cart'
//Importando data de pizzas
//import { pizzas } from './data/pizzas'
=======

>>>>>>> ad69b6079c7d36eecec48e8805ecd380c8d431a7

function App() {
  return (
    <>
      <Navbar/>
<<<<<<< HEAD
      <Home/>
      <Registro/>
      <Login/>
      {/* <Cart/> */}
=======
      {/* <Home/> */}
      <Registro />
      <Login />
>>>>>>> ad69b6079c7d36eecec48e8805ecd380c8d431a7
      <Footer/>
    </>
  )
}

export default App
