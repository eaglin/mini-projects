
import './App.css'
import { useEffect, useState } from 'react'
import '/index.css'
function App() {

  const [enabled, setEnable] = useState(false);
  const [position, setPosition] = useState({ clientX: 0, clientY: 0 });
  useEffect(() => {

    const handleMove = (event) => {
      const { clientX, clientY } = event
      setPosition({ clientX, clientY })

    }
    if (enabled) {
      window.addEventListener('pointermove', handleMove)
    }


    return () => { window.removeEventListener('pointermove', handleMove) }
  }, [enabled])





  return (
    <main>
      <div style={{
        position: 'absolute',
        backgroundColor: '#09f',
        borderRadius: '50%',
        opacity: 0.8,
        pointerEvents: 'none',
        left: -20,
        top: -20,
        width: 40,
        height: 40,
        transform: `translate(${position.clientX}px,${position.clientY}px)`
      }}></div>
      <h3>
        Proyecto 3
      </h3>
      <button onClick={() => setEnable(!enabled)}>
        {enabled ? "Activado" : "Desactivado"}
      </button>


    </main>
  )
}

export default App
