import { useState } from 'react'
import DemoButton from '../../components/DemoButton'
import { info } from './info'

function Example05() {
  const [texto, setTexto] = useState('')
  const [contador, setContador] = useState(0)

  console.log('Renderizando Example05...')

  return (
    <section className="demo-block">
      <h2>{info.title}</h2>
      <p>{info.description}</p>
      <div className="mini-demo">
        <input
          value={texto}
          onChange={(event) => setTexto(event.target.value)}
          placeholder="Escribe aqui"
        />
        <p>Texto actual: {texto || 'vacio'}</p>
        <DemoButton onClick={() => setContador((prev) => prev + 1)}>
          Re-render por contador ({contador})
        </DemoButton>
      </div>
    </section>
  )
}

export default Example05
