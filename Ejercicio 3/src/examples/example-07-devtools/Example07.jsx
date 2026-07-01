import { info } from './info'

function Example07() {
  return (
    <section className="demo-block">
      <h2>{info.title}</h2>
      <p>{info.description}</p>
      <ol>
        <li>Instala la extension React DevTools en tu navegador.</li>
        <li>Abre la pestana Components y explora el arbol.</li>
        <li>Selecciona un componente para ver props, state y hooks.</li>
        <li>Cambia estados en esta pagina y observa la actualizacion.</li>
      </ol>
    </section>
  )
}

export default Example07
