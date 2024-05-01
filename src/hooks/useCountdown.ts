import { useEffect, useRef, useState } from 'react'

export const useCountdown = (targetTime: number, onEnd?: () => void) => {
  const [time, setTime] = useState(targetTime)
  const [isCounting, setIsCounting] = useState(false)
  const targetTimeRef = useRef(targetTime + Date.now())
  const timeId = useRef(0)

  const start = () => {
    if (isCounting)
      return
    setIsCounting(true)
    targetTimeRef.current = targetTime + Date.now()
    timeId.current = window.setInterval(() => {
      if (targetTimeRef.current - Date.now() <= 0) {
        clearInterval(timeId.current)
        setIsCounting(false)
        setTime(targetTime)
        targetTimeRef.current = targetTime + Date.now()
        onEnd?.()
      }
      else {
        setTime(targetTimeRef.current - Date.now())
      }
    }, 1000)
  }

  useEffect(() => {
    return () => {
      clearInterval(timeId.current)
    }
  }, [])

  return {
    time,
    isCounting,
    start,
  }
}
