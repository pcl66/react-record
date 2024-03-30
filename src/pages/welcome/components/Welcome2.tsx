import { useNavigate } from 'react-router-dom'
import zz from '../../../assets/闹钟.svg'
import { WelcomeTemplate } from './WelcomeTemplate'

export const Welcome2 = () => {
  const nav = useNavigate()
  const next = () => {
    nav('/welcome/3')
  }
  return (
    <WelcomeTemplate imgSrc={zz} word1='每日提醒' word2='不会遗漏每一笔账单' onClick={next}/>
  )
}
