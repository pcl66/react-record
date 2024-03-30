import { animated, useTransition } from '@react-spring/web'
import type { ReactNode } from 'react'
import { useRef, useState } from 'react'
import { useLocation, useOutlet } from 'react-router-dom'

export function Welcome() {
  const [isAnimating, setIsAnimating] = useState(false)
  const location = useLocation()
  const outletMap = useRef<Record<string, ReactNode>>({})
  const outlet = useOutlet()
  outletMap.current[location.pathname] = outlet
  const transitions = useTransition(location.pathname, {
    from: { transform: location.pathname === '/welcome/1' ? 'translateX(0%)' : 'translateX(100%)' },
    enter: { transform: 'translateX(0%)' },
    leave: { transform: 'translateX(-100%)' },
    onStart() {
      setIsAnimating(true)
    },
    onRest() {
      setIsAnimating(false)
    },
    config: { duration: 5000 },
  })
  return (
    <>
      {
        transitions((style, item) => (
          <animated.div key={item} style={{ ...style, textAlign: 'center', pointerEvents: isAnimating ? 'none' : 'auto' }}>
            {outletMap.current[item]}
          </animated.div>
        ))
      }
    </>
  )
}
