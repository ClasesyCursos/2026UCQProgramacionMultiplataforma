import { useState } from 'react'
import DemoButton from '../../components/DemoButton'
import { info } from './info'

function Example04() {
  const [carrito, setCarrito] = useState(0)

  return (
    <section className="demo-block">
      <h2>{info.title}</h2>
      <p>{info.description}</p>
      <p>Carrito actual: {carrito}</p>
      <DemoButton onClick={() => setCarrito((prev) => prev + 1)}>
        Agregar al carrito
      </DemoButton>
    </section>
  )
}

export default Example04
