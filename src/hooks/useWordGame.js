import {useState, useEffect, useRef}from 'react'

function useWordGame(startTime = 15) {
  const [text, setText] = useState("")
  const [timeRemaining, setTimeRemaining] = useState(startTime)
  const [isTimeRunning, setIsTimeRunning] = useState(false)
  const [wordCount, setWordCount] = useState('')
  const textBoxRef = useRef(null)

  function handleChange(e) {
    const {value} = e.target
    setText(value)
  }

  function calculateWordCount(text) {
    const wordArray = text.trim().split(' ')
    return wordArray.filter((word) => word !== '' && word !== ',' && word !== '.' && word !== '/' && word !== '?' && word !== '>' && word !== '<').length
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

  function endGame() {
    document.querySelector('h4 > span').style.color = "red"
    if (calculateWordCount(text) !== 0) {
      document.querySelector('h1 > span').style.color = "green"
    } else {
      document.querySelector('h1 > span').style.color = "red"
    }
    setIsTimeRunning(false)
    setTimeRemaining("Times Up!")
    setWordCount(calculateWordCount(text))
  }
  useEffect(() => {
    if (isTimeRunning && timeRemaining > 0) {
      setTimeout(() => {
        setTimeRemaining(prevTime => prevTime - 1)
        console.log("word count useEffect= ",wordCount)
      }, 1000)
    } else if (timeRemaining === 0) {
      endGame()
    }
  }, [timeRemaining, isTimeRunning])

  return {text, handleChange ,timeRemaining, isTimeRunning, wordCount, textBoxRef, startGame}

}

export default useWordGame