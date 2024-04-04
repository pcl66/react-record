import { type MutableRefObject, useEffect, useRef, useState } from 'react'
import { throttle } from '../utils'

export const useSwipe = (targetDomRef: MutableRefObject<HTMLElement | null>) => {
  const xPosition = useRef(0)
  const [direction, setDirection] = useState<'left' | 'right' | ''>('')

  const hTouchStart = (e: TouchEvent) => {
    e.preventDefault()
    xPosition.current = e.touches[0].clientX
  }
  const hTouchMove = (e: TouchEvent) => {
    e.preventDefault()
    const diffX = xPosition.current - e.touches[0].clientX
    if (diffX > 10) {
      setDirection('left')
    }
    if (diffX < -10) {
      setDirection('right')
    }
  }
  const hTouchEnd = () => {
    setDirection('')
  }

  useEffect(() => {
    if (!targetDomRef.current)
      return
    targetDomRef.current.addEventListener('touchstart', hTouchStart)
    targetDomRef.current.addEventListener('touchmove', throttle(hTouchMove, 100))
    targetDomRef.current.addEventListener('touchend', hTouchEnd)
    return () => {
      targetDomRef.current?.removeEventListener('touchstart', hTouchStart)
      targetDomRef.current?.removeEventListener('touchmove', hTouchMove)
      targetDomRef.current?.removeEventListener('touchend', hTouchEnd)
    }
  }, [targetDomRef.current])

  return direction
}
