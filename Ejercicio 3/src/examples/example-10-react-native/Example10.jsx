import { info } from './info'

function Example10() {
  return (
    <section className="demo-block">
      <h2>{info.title}</h2>
      <div className="table-like">
        <div>
          <strong>React Web</strong>
          <span>div</span>
          <span>p</span>
          <span>button</span>
        </div>
        <div>
          <strong>React Native</strong>
          <span>View</span>
          <span>Text</span>
          <span>Button / Pressable</span>
        </div>
      </div>
      <p className="tag">{info.description}</p>
    </section>
  )
}

export default Example10
