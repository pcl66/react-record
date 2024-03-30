import { useNavigate } from 'react-router-dom'
import zz from '../../../assets/存钱罐.svg'
import { WelcomeTemplate } from './WelcomeTemplate'

export const Welcome1 = () => {
  const nav = useNavigate()
  const next = () => {
    nav('/welcome/2')
  }
  return (
    <WelcomeTemplate imgSrc={zz} word1='会赚钱' word2='还要会攒钱' onClick={next}/>
  )
}
