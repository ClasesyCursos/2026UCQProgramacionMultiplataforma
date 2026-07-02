import { useMemo, useState } from 'react'
import DemoButton from '../../components/DemoButton'
import { info } from './info'

function Example06() {
  const [cantidad, setCantidad] = useState(1)
  const [destacado, setDestacado] = useState(false)

  const total = useMemo(() => cantidad * 259, [cantidad])

  return (
    <section className="demo-block">
      <h2>{info.title}</h2>
      <p>{info.description}</p>
      <div className="mini-demo">
        <div className="row">
          <DemoButton onClick={() => setCantidad((prev) => prev + 1)}>
            Cambiar cantidad
          </DemoButton>
          <DemoButton onClick={() => setDestacado((prev) => !prev)}>
            Alternar estilo
          </DemoButton>
        </div>
        <p>Cantidad: {cantidad}</p>
        <p className={destacado ? 'highlight' : ''}>Total calculado: ${total}</p>
      </div>
    </section>
  )
}

export default Example06
