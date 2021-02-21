import {useState, useEffect, useRef}from 'react'

function useWordGame(startTime = 25) {
  const [text, setText] = useState("")
  const [timeRemaining, setTimeRemaining] = useState(startTime)
  const [isTimeRunning, setIsTimeRunning] = useState(false)
  const [wordCount, setWordCount] = useState('')

  const textBoxRef = useRef(null)
  const countdownDisplay = document.querySelector('h4 > span')
  const wordCountDisplay = document.querySelector('h1 > span')

  function handleChange(e) {
    const {value} = e.target
    setText(value)
  }

  function calculateWordCount(text) {
    const wordArray = text.trim().split(' ')
    return wordArray.filter((word) => 
      word !== '' 
      && word !== ',' 
      && word !== '.' 
      && word !== '/' 
      && word !== '?' 
      && word !== '>' 
      && word !== '<' 
      && word !== "'"
      && word !== "["
      && word !== "]"
      && word !== "|"
      && word !== ";").length
  }

  function startGame() {
    document.querySelector('h4 > span').style.color = "green"
    document.querySelector('h1 > span').style.color = "#fff"
    setIsTimeRunning(true)
    setText("")
    setTimeRemaining(startTime)
    setWordCount('-')
    textBoxRef.current.disabled = false
    textBoxRef.current.focus()
  }

  // function endGame() {
  //   setIsTimeRunning(false)
  //   setTimeRemaining("Time's Up!")
  //   setWordCount(calculateWordCount(text))
  //   countdownDisplay.style.color = "red"
  //   if (calculateWordCount(text) !== 0) {
  //     wordCountDisplay.style.color = "green"
  //   } else {
  //     wordCountDisplay.style.color = "red"
  //   }
  // }
  
  useEffect(() => {
    if (timeRemaining < (startTime / 3.5)) {
      countdownDisplay.style.color = "yellow"
    }
    if (isTimeRunning && timeRemaining > 0) {
      setTimeout(() => {
        setTimeRemaining(prevTime => prevTime - 1)
      }, 1000)
    } else if (timeRemaining === 0) {
      // endGame()
      setIsTimeRunning(false)
      setTimeRemaining("Time's Up!")
      countdownDisplay.style.color = "red"
    }
  }, [timeRemaining, isTimeRunning, startTime, countdownDisplay])

  return {text, handleChange ,timeRemaining, isTimeRunning, wordCount, textBoxRef, startGame, calculateWordCount}

}

export default useWordGame