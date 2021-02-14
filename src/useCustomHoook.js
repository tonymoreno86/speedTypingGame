import {useState, useRef, useEffect} from 'react' 

function useCustomHook(startingTime = 15) {
    const [text, setText] = useState('')
    const [timeRemaining, setIsTimeRemaining] = useState(startingTime)
    const [isTimeRunning, setIsTimeRunning] = useState(false)
    const [wordCount, setWordCount] = useState(0)
    const textInputRef = useRef(null)

    const handleChange = (e) => {
        const {value} = e.target
        setText(value)
      }
    
      const startGame = () => {
        setIsTimeRunning(true)
        setIsTimeRemaining(startingTime)
        setWordCount(0)
        setText('')
        textInputRef.current.disabled = false
        textInputRef.current.focus()
      }
    
      const endGame = () => {
        setWordCount(calculateWordCount(text))
        setIsTimeRunning(false)
      }
    
      const calculateWordCount = (str) => {
        const wordsArr = str.split(" ");
        const filteredWords = wordsArr.filter(word => word !== '')
        return filteredWords.length
      }
    
      useEffect(() => {
        if(timeRemaining > 0 && isTimeRunning) {
          setTimeout(() => {
            setIsTimeRemaining(currentTime => currentTime - 1)
          }, 1000)
        } else {
          endGame()
        }
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [isTimeRunning, timeRemaining])

      return {text, timeRemaining, isTimeRunning, wordCount, handleChange, startGame, textInputRef}
}

export default useCustomHook