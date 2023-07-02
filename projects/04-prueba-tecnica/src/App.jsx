import { useEffect, useState } from 'react'
import './App.css'
import { getRandomFact } from './service/fact'
function useCatFact() {
  const [fact, setFact] = useState();

  const getFactAndUpdate = () => {
    getRandomFact().then(setFact)
  }
  useEffect(() => {
    getFactAndUpdate
  }, [])

  return { fact, getFactAndUpdate }
}
function App() {


  const baseUrl = "https://cataas.com/cat/says/";
  const { fact, getFactAndUpdate } = useCatFact()
  const [url, setUrl] = useState();





  useEffect(() => {
    console.log("ENTRAMOS")
    if (fact)
      setUrl(baseUrl + fact.slice(' ', 3));
  }, [fact])

  const handleClick = async () => {

    getFactAndUpdate()
  }
  return (
    <>
      <main style={{


        display: 'flex',
        justifyContent: 'center',
        alignContent: 'space-between',
        placeItems: 'center'

      }}>
        <p>{fact}</p>
        {url ? <img style={{
          height: 200, width: 200, alignSelf: 'center', borderRadius: '100%',
          alignItems: 'center',
          alignContent: 'center',
          justifyContent: 'center',
        }} src={url} /> : <h1>loading...</h1>}
      </main>
      <button onClick={handleClick}>Reload</button>
    </>
  )
}

export default App
