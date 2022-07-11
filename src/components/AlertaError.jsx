import React from 'react'

function AlertaError({children, tipo}) {
  return (
    <div className={`alerta ${tipo}`}>
      {children}
    </div>
  )
}

export default AlertaError
