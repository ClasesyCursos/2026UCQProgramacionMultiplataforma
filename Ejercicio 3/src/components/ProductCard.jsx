import DemoButton from './DemoButton'

function ProductCard({ nombre, precio, imagen }) {
  return (
    <article className="product-card">
      <img src={imagen} alt={nombre} />
      <h4>{nombre}</h4>
      <p>${precio}</p>
      <DemoButton onClick={() => {}}>Ver detalle</DemoButton>
    </article>
  )
}

export default ProductCard
