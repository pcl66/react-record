import { useEffect } from 'react'
import axios from 'axios'
import zz from '../../assets/山竹.svg'
import { Button } from '../../components/button'

export const Home = () => {
  useEffect(() => {
    // todo
    axios.get('http://localhost:5173/api/v1/me')
  })
  return (
    <div className='px-2'>
      <div className='flex justify-center items-center mt-[20vh] mb-[10vh]'>
        <img className='w-[125px] h-[125px]' src={zz} alt="" />
      </div>
      <Button block text='开始记账'/>
    </div>
  )
}
