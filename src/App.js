import React from 'react' 
import useCustomHook from './useCustomHoook'

function App() {

  const {text, timeRemaining, isTimeRunning, wordCount,textInputRef, handleChange, startGame} = useCustomHook()

  return (
    <div>
      <h1>How Fast Can You Type?</h1>
      <textarea
        ref={textInputRef}
        value={text}
        onChange={handleChange}
        disabled={!isTimeRunning}
      />
      <h4>Time Remaining: {timeRemaining}</h4>
      <button 
        onClick={startGame}
        disabled={isTimeRunning}
      >Start</button>
      <h1>Word Count: {wordCount}</h1>
    </div>
  )
}

export default App