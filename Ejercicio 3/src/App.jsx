import DemoFooter from './components/DemoFooter'
import DemoHeader from './components/DemoHeader'
import Example01 from './examples/example-01-html-vs-react/Example01'
import Example02 from './examples/example-02-componentes/Example02'
import Example03 from './examples/example-03-props/Example03'
import Example04 from './examples/example-04-state/Example04'
import Example05 from './examples/example-05-renderizado/Example05'
import Example06 from './examples/example-06-virtual-dom/Example06'
import Example07 from './examples/example-07-devtools/Example07'
import Example08 from './examples/example-08-useeffect/Example08'
import Example09 from './examples/example-09-listas/Example09'
import Example10 from './examples/example-10-react-native/Example10'
import './App.css'

function App() {
  return (
    <div className="page">
      <DemoHeader />

      <main className="layout">
        <Example01 />
        <Example02 />
        <Example03 />
        <Example04 />
        <Example05 />
        <Example06 />
        <Example07 />
        <Example08 />
        <Example09 />
        <Example10 />
      </main>

      <DemoFooter />
    </div>
  )
}

export default App
