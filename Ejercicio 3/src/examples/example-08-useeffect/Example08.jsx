import { useEffect, useState } from 'react'
import { info } from './info'

function Example08() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/users',
        )

        if (!response.ok) {
          throw new Error('No se pudo cargar la API de usuarios.')
        }

        const data = await response.json()
        setUsers(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchUsers()
  }, [])

  return (
    <section className="demo-block">
      <h2>{info.title}</h2>
      <p>{info.description}</p>
      {loading && <p>Loading...</p>}
      {!loading && error && <p className="error">{error}</p>}
      {!loading && !error && (
        <ul className="simple-list">
          {users.map((user) => (
            <li key={user.id}>
              {user.name} · {user.email}
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}

export default Example08
