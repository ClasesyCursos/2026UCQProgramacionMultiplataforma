import { products } from '../../data/products'
import { info } from './info'

function Example09() {
  return (
    <section className="demo-block">
      <h2>{info.title}</h2>
      <p>
        {info.description} Las tarjetas de productos se generan con{' '}
        <code>products.map()</code> para evitar repetir estructuras.
      </p>
      <ul className="simple-list">
        {products.map((producto) => (
          <li key={`list-${producto.id}`}>
            {producto.nombre} · ${producto.precio}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Example09
