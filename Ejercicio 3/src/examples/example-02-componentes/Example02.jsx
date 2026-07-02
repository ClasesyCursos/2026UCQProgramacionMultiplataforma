import ProductCard from '../../components/ProductCard'
import { products } from '../../data/products'
import { info } from './info'

function Example02() {
  return (
    <section className="demo-block">
      <h2>{info.title}</h2>
      <p>{info.description}</p>
      <div className="cards">
        <ProductCard {...products[0]} />
      </div>
    </section>
  )
}

export default Example02
