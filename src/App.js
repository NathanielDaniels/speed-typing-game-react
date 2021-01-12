import React, {useState, useEffect} from 'react'

function App() {
  const startTime = 10
  const [text, setText] = useState("")
  const [timeRemaining, setTimeRemaining] = useState(startTime)
  const [isTimeRunning, setIsTimeRunning] = useState(false)
  const [wordCount, setWordCount] = useState('')

  function handleChange(e) {
    const {value} = e.target
    setText(value)
  }

  function calculateWordCount(text) {
    const wordArray = text.trim().split(' ')
    return wordArray.filter((word) => word !== '').length
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
     setWordCount(0)
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


  return (
    <div>
      <h1>How fast do you type?</h1>
      <textarea
          onChange={handleChange}
          value={text}
          disabled={!isTimeRunning}
      />
      <h4>Time remaining: {timeRemaining}</h4>
      <button 
        onClick={() => {
          startGame()
        }}
        disabled={isTimeRunning}
        >Start
      </button>
      <h1>Word count: {wordCount}</h1>
    </div>
  );
}

export default App;
