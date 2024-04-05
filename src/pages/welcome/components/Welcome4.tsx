import { useNavigate } from 'react-router-dom'
import zz from '../../../assets/云.svg'
import { WelcomeTemplate } from './WelcomeTemplate'

export const Welcome4 = () => {
  const nav = useNavigate()
  const next = () => {
    localStorage.setItem('welcome', 'true')
    nav('/home')
  }
  const hSwipeChange = (direction: string) => {
    if (direction === 'left') {
      next()
    }
  }
  return (
    <WelcomeTemplate imgSrc={zz} word1='云备份' word2='再也不怕数据丢失' onClick={next} onSwipeChange={hSwipeChange} isLast/>
  )
}
