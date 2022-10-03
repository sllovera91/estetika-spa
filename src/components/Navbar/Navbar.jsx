import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './style.css'


export const Navbar = () => {
  
  const [ navbarOpen, setNavbarOpen] = useState(false)

  const handleToggle = () => {
    setNavbarOpen(!navbarOpen)
  }

  const closeMenu = () => {
    setNavbarOpen(false)
  }

  return (

<div className='arriba'>
    
    <div className="logo">
      <img src="https://lilianaestetica.netlify.app/img/logo1.png" alt=""/>
    </div>
  

    <nav className="navbar">
      <ul className="nav-menu">
        <li className="nav-item "> <Link to="Inicio">INICIO</Link></li>
        <li className="nav-item "> <Link to="Tratamiento">TRATAMIENTOS</Link></li>
        <li className="nav-item "> <Link to="Ubicacion">UBICACION</Link></li>
        <li className="nav-item "> <Link to="Consultanos">CONSULTANOS</Link></li>
      </ul>
    </nav>

    <div className='menuresp' onClick={handleToggle}>
      <span className={`menuNav`}></span>
      <span className={`menuNav`}></span>
      <span className={`menuNav`}></span>

    </div>
  

    {
    navbarOpen
    ?
      <ul className='resp'>
        <div className='cajita'>
          <li className='item-resp'> <NavLink style={({ isActive }) => ({fontWeight:isActive?'bold':''})} to='Inicio'      onClick={() => closeMenu()} >INICIO</NavLink></li>
          <li className='item-resp'> <NavLink style={({ isActive }) => ({fontWeight:isActive?'bold':''})} to='Tratamiento'     onClick={() => closeMenu()} >TRATAMIENTOS</NavLink></li>
          <li className='item-resp'> <NavLink style={({ isActive }) => ({fontWeight:isActive?'bold':''})} to='Ubicacion'      onClick={() => closeMenu()} >UBICACION</NavLink></li>
          <li className='item-resp'> <NavLink style={({ isActive }) => ({fontWeight:isActive?'bold':''})} to='Consultanos'      onClick={() => closeMenu()} >CONSULTANOS</NavLink></li>
        </div>
      </ul>
    :
      null
    }

  </div>  
  )
}
