import { useNavigate } from 'react-router-dom'
import zz from '../../../assets/云.svg'
import { WelcomeTemplate } from './WelcomeTemplate'

export const Welcome4 = () => {
  const nav = useNavigate()
  const next = () => {
    nav('/home')
  }
  return (
    <WelcomeTemplate imgSrc={zz} word1='云备份' word2='再也不怕数据丢失' onClick={next} isLast/>
  )
}
