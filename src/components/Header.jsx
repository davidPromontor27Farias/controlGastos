import React from 'react'
import ControlPresupuesto from './ControlPresupuesto'
import NuevoPresupuesto from './NuevoPresupuesto'



function Header({gastos, setGastos, presupuesto, setPresupuesto, isValiedPresupuesto, setIsValiedPresupuesto}) {
  return (
    <header>
        <h1>Planificador de Gastos</h1>
        {isValiedPresupuesto ? (
            <ControlPresupuesto
              gastos={gastos}
              setGastos={setGastos}
              presupuesto={presupuesto}
              setPresupuesto={setPresupuesto}
              setIsValiedPresupuesto={setIsValiedPresupuesto}
            />
        ):
        (
            <NuevoPresupuesto
            presupuesto={presupuesto}
            setPresupuesto={setPresupuesto}
            setIsValiedPresupuesto={setIsValiedPresupuesto}
        />
        )}
        


    </header>
  )
}

export default Header
