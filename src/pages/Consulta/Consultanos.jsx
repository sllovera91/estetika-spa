import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import './style.css'

import axios from 'axios';




export const Consultanos = () => {

  

  const { register, formState:{ errors,}, reset, handleSubmit, formState  } = useForm()
  const onSubmit = (data) => { 
      
      axios.defaults.headers.post['Content-Type'] = 'application/json';
      axios.post('https://formsubmit.co/ajax/sllovera91@hotmail.com', {

        name:data.nombre,
        tel:data.telefono,
        info:data.info,

      })
          .then(response => alert('Gracias por enviar su mensaje !'))
          .catch(error => console.log(error));

    
  }

    useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({ nombre: '', telefono: '', info: '' });
    }
  }, [formState, reset]);

  
  return (
    <div className="container">

      <h2>Solicita una evaluacion gratuita virtual</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo iusto unde molestias dolores ipsam officia alias asperiores provident voluptas? Totam blanditiis voluptatum earum distinctio quis iure, molestiae sequi aspernatur nesciunt!</p>


       <form onSubmit={ handleSubmit(onSubmit) }>

        <div>
          <input  type="text" name='nombre'  placeholder= 'Dejanos tu nombre!'{ ...register('nombre',{
            required: true,
            minLength: 3,
          }) }  
          onChange={() => console.log('email input changed')}
          />
          {errors.nombre?.type === 'required' && <p> Dejanos tu nombre !</p>}
          {errors.nombre?.type === 'minLength' && <p> Necesitas escribir por lo menos tres letras</p>}
          
        </div>

        <div>
          <input  type="tel" name='telefono'  placeholder= 'Dejanos tu telefono!' { ...register('telefono',{
           required: true,
           minLength: 8
          }) }  
          onChange={() => console.log('email input changed')}
          />
          {errors.telefono?.type === 'required' && <p> Dejanos tu telefono para contactarte </p>}
          {errors.telefono?.type === 'minLength' && <p> Necesitas por lo menos ocho numeros </p>}
        </div>

        <div>
          <textarea  name="info" cols="40" rows="10" placeholder= 'Hacenos tu consulta' { ...register('info',{
           required: true,

          }) } onChange={() => console.log('email input changed')}
          ></textarea>
          {errors.info?.type === 'required' && <p> No olvides ingresar tu consulta</p>}
        </div>

        <input className='btn' type="submit" value='Enviar' />
      </form>
    
    </div>

  )
}
