import { useState } from 'react'
import './App.css'

function App() {
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');

  return (
    <>
      <section>
        <article>
          <form>
            <input
              type="text"
              onChange={(e) => setFirstName(e.target.value)}
              value={firstname}
            />
            <input
              type="text"
              onChange={(e) => setLastname(e.target.value)}
              value={lastname}
            />
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </form>
          <p>Vorname ist: {firstname}</p>
          <p>Nachname ist: {lastname}</p>
          <p>Email: {email}</p>
        </article>
      </section>
    </>
  )
}

export default App
