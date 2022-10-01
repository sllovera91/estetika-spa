import './style.css'
import Iframe from 'react-iframe'



export const Ubicacion = () => {

 
  return (
    <div className='ubicacion'>
      
      <h2>Nuestras Ubicaciones</h2>
      <div className="iframe">
            <div className="caba">
                <h3>Caballito</h3>
                <Iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13133.275954667!2d-58.449349930224614!3d-34.62137839999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca3884d957bf%3A0xe0ec915053451f2a!2sGaler%C3%ADa%20Centenera%2C%20Av.%20del%20Barco%20Centenera%20150%2C%20C1424%20CABA!5e0!3m2!1ses-419!2sar!4v1652669425758!5m2!1ses-419!2sar" width="90%" height="90%" style="border:0;"  loading="lazy" referrerPolicy="no-referrer-when-downgrade"></Iframe>
            </div>
            <div className="pale">
                <h3>Palermo</h3>
                <Iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.8929686536517!2d-58.40741058543541!3d-34.581574680465266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb563261b7515%3A0x4a314ca7f3cef434!2sAv.%20Cnel.%20D%C3%ADaz%20%26%20Av.%20Cervi%C3%B1o%2C%20C1425%20CABA!5e0!3m2!1ses-419!2sar!4v1652669512006!5m2!1ses-419!2sar" width="90%" height="90%" style="border:0;"  loading="lazy" referrerPolicy="no-referrer-when-downgrade"></Iframe>
            </div>
        </div>

    </div>
    
  )
}

