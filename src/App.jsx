import { useState, useEffect } from 'react'
import Header from './components/Header'
import ListadoGastos from './components/ListadoGastos';
import Modal from './components/Modal';
import { generarId } from './Helpers';

import IconoNuevoGasto from './img/nuevo-gasto.svg';


function App() {
 
  //Definimos nuestro stado del presupuesto
  const [presupuesto, setPresupuesto] = useState(Number(localStorage.getItem('presupuesto')) ?? 0);
  const [isValiedPresupuesto, setIsValiedPresupuesto] = useState(false);
  const [modal, setModal] = useState(false);
  const [animarModal, setAnimarModal] = useState(false);
  const [gastos, setGastos] = useState(localStorage.getItem('gastos') ? JSON.parse(localStorage.getItem('gastos')) : []);
  const [gastoEditar, setGastoEditar] = useState({});

  useEffect(()=>{
    //Comporbamos que se haya la edicion
    if(Object.keys(gastoEditar).length > 0 ){
      //Le pasamos el modal
      setModal(true);
 
      setTimeout(() => {
        
        setAnimarModal(true);
      }, 300);
    }
  }, [gastoEditar])

  useEffect(()=>{
    localStorage.setItem('presupuesto', presupuesto ?? 0);

  }, [presupuesto]);

  useEffect(()=>{

    const presupuestoLs = Number(localStorage.getItem('presupuesto')) ?? 0;
    if(presupuestoLs > 0){
      //mandamos la verificacios de que es valido el presupuesto
      setIsValiedPresupuesto(true);
    }

  }, [])

  useEffect(()=>{
    localStorage.setItem('gastos', JSON.stringify(gastos) ?? []);
  }, [gastos]);

  //evento que se ejecuta al dar click al icono de añadir
  const handleNuevoGasto = () =>{
    setModal(true);
    //limpiamos el modal
    setGastoEditar({});
    setTimeout(() => {
      
      setAnimarModal(true);
    }, 300);
  }
  const cantidadGasto = gastos.cantidad;


  //Creamos una funcion para guardar el gasto
  const guardarGasto = gasto =>{
    //Verificamos que tenga un id para actualizarlo
    if(gasto.id){
      //Actualizar el registro
      const gastosActualizados = gastos.map(gastoState => gastoState.id === gasto.id ? gasto : gastoState);

      setGastos(gastosActualizados)
    }
    else{
      //NOs crea una fecha
      gasto.fecha = Date.now();
      //Le añadimos el id al gasto
      gasto.id = generarId();
      setGastos([...gastos, gasto]);
      //reseteamos el state
      setGastoEditar({});
    }
    //cerramos el modal
    setAnimarModal(false);

        //Pasamos a false el de modal
        setTimeout(() => {
            setModal(false);
        }, 300);
  }

  //eliminar el gasto
  const eliminarGasto = (id) =>{
    const gastosActualizados = gastos.filter(gasto => gasto.id !== id);
    setGastos(gastosActualizados);
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
              setGastoEditar={setGastoEditar}
              eliminarGasto={eliminarGasto}
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
        gastoEditar={gastoEditar}
        setGastoEditar={setGastoEditar}
      />}
      
    </div>
    
  )
}

export default App
