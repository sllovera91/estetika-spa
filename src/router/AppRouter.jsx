import { Navigate, Route, Routes } from "react-router-dom"
import { Topbar } from "../components/Topbar/Topbar"
import { Navbar } from "../components/Navbar/Navbar"
import { Inicio } from "../pages/Inicio/Inicio"
import { Ubicacion } from "../pages/Ubicacion/Ubicacion"
import { Footer } from "../components/Footer/Footer"
import { Tratamiento } from "../pages/Tratamientos/Tratamiento"
import { Consultanos } from "../pages/Consulta/Consultanos"






export const AppRouter = () => {
  return (
    <>

    <Topbar />
    <Navbar />

      <Routes>
        <Route path="Inicio" element={<Inicio /> } />
        <Route path="Tratamiento" element={<Tratamiento />}  /> 
        <Route path="Ubicacion" element={<Ubicacion />} />
        <Route path="Consultanos" element={<Consultanos/>} />
        
        <Route path="/" element={<Navigate to='/Inicio'/>} />
      </Routes>

    <Footer />

  </>

  )
}
