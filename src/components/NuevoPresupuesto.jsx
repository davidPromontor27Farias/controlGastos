import {useState} from 'react'
import AlertaError from './AlertaError';


function NuevoPresupuesto({presupuesto, setPresupuesto, setIsValiedPresupuesto}) {
    
    const [mensaje, setMensaje] = useState('');


    const handlePresupuesto = (e) =>{

        e.preventDefault();
        
        if(!(presupuesto) || (presupuesto) < 0){


            setMensaje("No es un presupuesto valido");

            return;
        }

        setMensaje('');

        
        setIsValiedPresupuesto(true);
    }


  return (
    <div className="contenedor-presupuesto contenedor sombra">
      <form onSubmit={handlePresupuesto} className="formulario" action="">
        <div className="campo">
            <label >Definir Presupuetos</label>

            <input type="number" value={presupuesto} onChange={(e) => setPresupuesto(Number(e.target.value)) } className="nuevo-presupuesto" placeholder="Añade un presuepuesto"  />
        </div>

        <input type="submit" className="" value="Añadir" />

        {mensaje && <AlertaError tipo="error">{mensaje}</AlertaError>}
      </form>


    </div>
  )
}

export default NuevoPresupuesto
