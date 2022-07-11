import { useState } from 'react'
import Header from './components/Header'
import ListadoGastos from './components/ListadoGastos';
import Modal from './components/Modal';
import { generarId } from './Helpers';

import IconoNuevoGasto from './img/nuevo-gasto.svg';


function App() {
 
  //Definimos nuestro stado del presupuesto
  const [presupuesto, setPresupuesto] = useState(0);
  const [isValiedPresupuesto, setIsValiedPresupuesto] = useState(false);
  const [modal, setModal] = useState(false);
  const [animarModal, setAnimarModal] = useState(false);
  const [gastos, setGastos] = useState([]);

  //evento que se ejecuta al dar click al icono de añadir
  const handleNuevoGasto = () =>{
    setModal(true);

    setTimeout(() => {
      
      setAnimarModal(true);
    }, 300);
  }
  const cantidadGasto = gastos.cantidad;


  //Creamos una funcion para guardar el gasto
  const guardarGasto = gasto =>{

    //NOs crea una fecha
    gasto.fecha = Date.now();
    //Le añadimos el id al gasto
    gasto.id = generarId();
    setGastos([...gastos, gasto]);


    //cerramos el modal
    setAnimarModal(false);

        //Pasamos a false el de modal
        setTimeout(() => {
            setModal(false);
        }, 300);
  }

  //En caso de que si haya un modal que le aplique cierta clase y si no no le aplique nada
  return (
    <div className={modal ? 'fijar': ''}>
      <Header
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        isValiedPresupuesto={isValiedPresupuesto}
        setIsValiedPresupuesto={setIsValiedPresupuesto}
        gastos={gastos}
      />

      {isValiedPresupuesto ? (

        <>
          <main>
            <ListadoGastos
              gastos={gastos}
            />
          </main>
          <div className="nuevo-gasto">
            <img 

              src={IconoNuevoGasto}
              alt='iconono nuevo gasto'
              onClick={handleNuevoGasto}
            />
          </div>

        </>
      ): null}


      {modal && <Modal
        setModal={setModal}
        animarModal={animarModal}
        setAnimarModal={setAnimarModal}
        guardarGasto={guardarGasto}
      />}
      
    </div>
    
  )
}

export default App
