import Gasto from "./Gasto.jsx"

function ListadoGastos({gastos}) {
  return (
    <div className="listado-gastos contenedor">
        <h2>{gastos.length > 0 ? 'Gastos' : 'Cree un gasto'}</h2>

        {gastos.map(gasto => (
            <Gasto
            key={gasto.id}
            gasto={gasto}
            />
        ))}
    </div>
  )
}

export default ListadoGastos
