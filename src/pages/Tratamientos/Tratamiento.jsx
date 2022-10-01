import { trats } from "../../data/datos"
import './style.css'


export const Tratamiento = () => {
  return (
  
  <div className="contenedor">
          {trats.map( ({id, descripcion, nombre, imagen}) => (
            <div key={id} className='tarjeta'> 
              <img src={`${ imagen }`} alt={ descripcion } />
              <b>{nombre}</b>
              <p>{descripcion}</p>
            </div>
          ))}
  </div>

  )
}
