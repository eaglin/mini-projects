import './App.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import useStore, { FromLanguage, Language } from './hooks/useStore';
import { Col,Row,Container} from 'react-bootstrap'
import { useEffect } from 'react';
import { translateText } from './services/translate';
import useDebounce from './hooks/useDebounce';


function App() {
  const { fromLanguage,isLoading,originalText,toLanguage,translatedText, setFromLanguage,setIsLoading,setOriginalTest,setToLanguage,switchLanguages,setTranslatedText } = useStore();


  const debounceValue = useDebounce(originalText, 800);

  useEffect(() => {
    
    console.log('Entramos')
    translateText({
      fromLanguage,
      toLanguage,
      text: debounceValue
    
    }).then(value => {
      
      setTranslatedText(!!value ? value : '')
    })
  }, [debounceValue])
  return (
    <><Container fluid>
      <h1>Google Translate</h1>
      <Row >
       
        <Col>
          <h2>From</h2>
          <header>
            <select value={fromLanguage} onChange={(event) => {
              setFromLanguage(event.target.value as FromLanguage)
            }}>
              <option value={'en'}>English</option>
              <option value={'es'}>Spanish</option>
            </select>
          </header>


          
            <textarea value={originalText} onChange={
              (event) => {
              setOriginalTest(event.target.value)
              }
          }></textarea>
        </Col>
        <Col >
          <Button onClick={switchLanguages} >Switch</Button>
        </Col>
        <Col>
          <h2>to</h2>
          <header>
            <select value={toLanguage} onChange={(event) => {
              setFromLanguage(event.target.value as Language)
            }}>
              <option value={'en'}>English</option>
              <option value={'es'}>Spanish</option>
            </select>
          </header>
          <textarea value={isLoading ? 'Cargando...' : translatedText}></textarea>
          </Col>
        </Row>
    </Container>
    </>
  )
}

export default App
