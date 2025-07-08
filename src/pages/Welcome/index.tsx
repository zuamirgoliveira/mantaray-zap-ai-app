import { useState } from 'react'

function Welcome() {
  const [count, setCount] = useState(0)

  return (
    <>

      <h1>Manta Ray Zap AI - Welcome</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default Welcome