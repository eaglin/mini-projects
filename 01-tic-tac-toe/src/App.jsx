import { useState } from 'react'
import './App.css'
import { Square } from './components/Square'
import { TURNS, WINNER_ARRAYS } from './constants'


function App() {


  const [turn, setTurn] = useState(() => {

    const turn = window.localStorage.getItem('turn')
    return turn ? turn : TURNS.X
  })
  const [winner, setWinner] = useState(null)
  const [board, setBoard] = useState(
    () => {

      const board = JSON.parse(window.localStorage.getItem('board'))
      return board ? board : Array(9).fill('')
    })

  const updateBoard = (index) => {

    //IS EMPTY SLOT
    if (board[index] === '') {
      const newBoard = [...board];
      newBoard[index] = turn
      setBoard(newBoard)


      window.localStorage.setItem('board', JSON.stringify(board))

      const newWinner = checkWinner(newBoard)
      if (newWinner) {
        setWinner(newWinner)
      } else if (checkIsDraw(newBoard)) {

        setWinner(false)
      }
      turn === TURNS.X ? setTurn(TURNS.O) : setTurn(TURNS.X)
    }
  }
  const checkIsDraw = (board) => {
    console.log(board.filter(slot => slot === '').length)
    return board.filter(slot => slot === '').length <= 0
  }
  const checkWinner = (boardToCheck) => {

    for (const combo of WINNER_ARRAYS) {
      const [a, b, c] = combo
      console.log(boardToCheck[a], boardToCheck[b], boardToCheck[c])

      if (boardToCheck[a] && boardToCheck[a] === boardToCheck[b] && boardToCheck[b] === boardToCheck[c])
        return boardToCheck[a]
    }


  }

  const restartGame = () => {
    setTurn(TURNS.X)
    setWinner(null)
    setBoard(Array(9).fill(''))
    window.localStorage.clear()
  };
  return (
    <>
      <main className='board'>
        <h1>Tic tac toe</h1>
        <button onClick={
          restartGame
        }  >Empezar de nuevo</button>
        <section className='game'>{board.map((el, index) =>

          <Square
            key={index}
            index={index}
            updateBoard={updateBoard}>{el}
          </Square>)}</section>



        <section className='turn'>
          <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
          <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
        </section>

        {
          winner !== null && (
            <section className='winner'>
              <div className='text'>
                <h2>
                  {winner === false ? 'Empate' : 'Ganó:'}
                </h2>
                <header className='win'>
                  {winner && <Square>{winner}</Square>}


                </header>
                <footer>
                  <button onClick={
                    restartGame
                  }  >Empezar de nuevo</button>
                </footer>
              </div>
            </section>
          )
        }

      </main>
    </>
  )
}

export default App
