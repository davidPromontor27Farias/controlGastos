import {useState} from 'react'
import CerrarModal from '../img/cerrar.svg'
import AlertaError from './AlertaError';


function Modal({setModal, animarModal, setAnimarModal, guardarGasto}) {

  //Se crean los states para cada campo del formulario de gastos
  const [nombre, setNombre] = useState('');
  const [cantidad, setCantidad] = useState(0);
  const [categoria, setCategoria] = useState('');

  const [alerta, setAlerta] = useState('');



  const closeModal = () =>{
        //Aqui cerramos el modal
        setAnimarModal(false);

        //Pasamos a false el de modal
        setTimeout(() => {
            setModal(false);
        }, 300);
    }

    const handleNuevoGasto = (e)=>{
      e.preventDefault();
      if([nombre, cantidad, categoria].includes('')){
        setAlerta('Alguno de los campos estan vacios');

        setTimeout(() => {
          setAlerta('');
        }, 2000);

        return;
      }

      //Le pasamos los datos al prop de guardarGasto
      guardarGasto({nombre, cantidad, categoria});
   
    }

    



  return (
    <div className="modal">
      <div className='cerrar-modal'>
        <img
             src={CerrarModal} 
             alt="icono cerrar modal"
             onClick={closeModal} 
        />
      </div>

        <form onSubmit={handleNuevoGasto} action="" className={`formulario ${animarModal ? "animar" : 'cerrar'}`}>
            
            {alerta && <AlertaError tipo="error">{alerta}</AlertaError>}

            <legend>
                Nuevo Gasto
            </legend>

            <div className="campo">
              <label htmlFor="nombre">Nombre Gasto:</label>
              <input value={nombre} onChange={e => setNombre(e.target.value)} type="text" id='nombre' placeholder="Añade un nuevo gasto" />
            </div>
            <div className="campo">
              <label htmlFor="cantidad">Cantidad Gasto:</label>
              <input value={cantidad} onChange={e => setCantidad(Number(e.target.value))} type="number" id='cantidad' placeholder="Inserte una cantidad" />
            </div>
            <div className="campo">
              <label htmlFor="categoria">Categoria:</label>
              <select name="" id="categoria" value={categoria} onChange={e => setCategoria(e.target.value)}>
                <option value="">-- Seleccione</option>
                <option value="ahorro">Ahorro</option>
                <option value="comida">Comida</option>
                <option value="casa">Casa</option>
                <option value="gastos">Gastos</option>
                <option value="ocio">Ocio</option>
                <option value="salud">Salud</option>
                <option value="suscripciones">Suscripciones</option>
              </select>
            </div>

            <input type="submit" value="Añadir gasto" />

            
        </form>
    </div>
  )
}

export default Modal
