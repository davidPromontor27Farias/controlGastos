import React from 'react'
import ControlPresupuesto from './ControlPresupuesto'
import NuevoPresupuesto from './NuevoPresupuesto'



function Header({presupuesto, setPresupuesto, isValiedPresupuesto, setIsValiedPresupuesto, gastos}) {
  return (
    <header>
        <h1>Planificador de Gastos</h1>
        {isValiedPresupuesto ? (
            <ControlPresupuesto
              presupuesto={presupuesto}
              gastos={gastos}
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
