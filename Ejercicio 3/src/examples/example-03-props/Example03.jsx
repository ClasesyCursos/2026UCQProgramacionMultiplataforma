import ProductCard from '../../components/ProductCard'
import { products } from '../../data/products'
import { info } from './info'

function Example03() {
  return (
    <section className="demo-block">
      <h2>{info.title}</h2>
      <p>{info.description}</p>
      <div className="cards">
        {products.map((producto) => (
          <ProductCard key={producto.id} {...producto} />
        ))}
      </div>
    </section>
  )
}

export default Example03
