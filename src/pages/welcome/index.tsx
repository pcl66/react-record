import { animated, useTransition } from '@react-spring/web'
import type { ReactNode } from 'react'
import { useRef, useState } from 'react'
import { Navigate, useLocation, useNavigate, useOutlet } from 'react-router-dom'
import shanZhu from '../../assets/山竹.svg'
import { useUserStore } from '../../store/useUserStore'

export function Welcome() {
  const [isAnimating, setIsAnimating] = useState(false)
  const location = useLocation()
  const outletMap = useRef<Record<string, ReactNode>>({})
  const outlet = useOutlet()
  const nav = useNavigate()
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
    config: { duration: 750 },
  })

  // 跳过（已经观看过广告
  const isSkipped = useUserStore(state => state.userInfo.isSkipped)
  const setIsSkipped = useUserStore(state => state.setIsSkipped)
  if (isSkipped) {
    return <Navigate to={'/home'}/>
  }
  return (
    <div className='h-screen bg-gradient-to-b from-[#5C33BE] to-[#8F4CD7] overflow-hidden'>
      <div className='fixed right-2 top-2 text-white text-3xl' onTouchStart={() => {
        setIsSkipped(true)
        nav('/home')
      }}>
        跳过
      </div>
      <div className='h-[200px] pt-[80px] flex justify-center items-center flex-col gap-2'>
        <img src={shanZhu} alt="" />
        <div className='text-white text-3xl font-bold'>山竹记账</div>
      </div>
      <div className='relative'>
        {
          transitions((style, item) => (
            <animated.div className='flex w-full justify-center items-center absolute' key={item} style={{ ...style, pointerEvents: isAnimating ? 'none' : 'auto' }}>
              {outletMap.current[item]}
            </animated.div>
          ))
        }
      </div>
    </div>
  )
}
