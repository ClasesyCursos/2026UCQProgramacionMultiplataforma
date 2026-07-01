import { useState } from 'react'
import DemoButton from '../../components/DemoButton'
import { info } from './info'

function Example01() {
    const [contadorReact, setContadorReact] = useState(0)

    return (
        <section className="demo-block">
            <h2>{info.title}</h2>
            <p>{info.description}</p>
            <div className="grid-2">
                <article>
                    <h3>Imperativo (HTML + JS)</h3>
                    <pre>
                        <code>{`<h1 id="titulo">0</h1>
                <button onclick="incrementar()">Incrementar</button>

                function incrementar() {
                // Manipulas el DOM manualmente
                }`}</code>
                    </pre>
                </article>
                <article>
                    <h3>Declarativo (React)</h3>
                    <p>Contador React: {contadorReact}</p>
                    <DemoButton onClick={() => setContadorReact((prev) => prev + 1)}>
                        Incrementar en React
                    </DemoButton>
                    <p className="tag">UI = f(State)</p>
                </article>
            </div>
        </section>
    )
}

export default Example01
