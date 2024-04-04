import { useNavigate } from 'react-router-dom'
import zz from '../../../assets/图表.svg'
import { WelcomeTemplate } from './WelcomeTemplate'

export const Welcome3 = () => {
  const nav = useNavigate()
  const next = () => {
    nav('/welcome/4')
  }
  const hSwipeChange = (direction: string) => {
    if (direction === 'left') {
      next()
    }
  }
  return (
    <WelcomeTemplate imgSrc={zz} word1='数据可视化' word2='收支一目了然' onClick={next} onSwipeChange={hSwipeChange}/>
  )
}
