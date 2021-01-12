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

  function endGame() {
    setIsTimeRunning(false)
    setTimeRemaining("Times Up!")
    setWordCount(calculateWordCount(text))
  }

  function startGame() {
    setIsTimeRunning(true)
    setText("")
    setTimeRemaining(startTime)
    setWordCount('-')
    textBoxRef.current.disabled = false
    textBoxRef.current.focus()
  }

  useEffect(() => {
    if (isTimeRunning && timeRemaining > 0) {
      setTimeout(() => {
        setTimeRemaining(prevTime => prevTime - 1)
      }, 1000)
    } else if (timeRemaining === 0) {
      endGame()
    }
  }, [timeRemaining, isTimeRunning])

  return {text, handleChange ,timeRemaining, isTimeRunning, wordCount, textBoxRef, startGame}

}

export default useWordGame