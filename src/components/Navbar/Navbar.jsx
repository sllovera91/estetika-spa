import { Link } from 'react-router-dom';
import './style.css'




export const Navbar = () => {

  


  return (
<div className='arriba'>

    
    <div className="logo">
      <img src="https://lilianaestetica.netlify.app/img/logo1.png" alt=""/>
    </div>
    
  
    <nav className="navbar">
      <ul className="nav-menu">
        <li className="nav-item"> <Link to="Inicio">INICIO</Link></li>
        <li className="nav-item"> <Link to="Tratamiento">TRATAMIENTOS</Link></li>
        <li className="nav-item"> <Link to="Ubicacion">UBICACION</Link></li>
        <li className="nav-item"> <Link to="Consultanos">CONSULTANOS</Link></li>

        <div className="hamburguer">
             <span className="bar"></span>
             <span className="bar"></span>
             <span className="bar"></span>   
        </div>

      </ul>
    </nav>
  </div>
  )
}
