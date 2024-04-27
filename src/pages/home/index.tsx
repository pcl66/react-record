import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import zz from '../../assets/山竹.svg'
import { Button } from '../../components/button'
import { Draw } from '../../components/draw'
import { AddButton } from '../../components/add-button'
import { Calculator } from '../../components/calculator'

export const Home = () => {
  const [open, setOpen] = useState(false)
  const nav = useNavigate()

  return (
    <div className='px-2'>
      <div className='flex justify-center items-center mt-[20vh] mb-[10vh]'>
        <img className='w-[125px] h-[125px]' src={zz} alt="" />
      </div>
      {/* @ts-expect-error */}
      <Button onClick={() => {
        setOpen(true)
        nav('/login')
      }} block text='开始记账'/>
      <Draw open={open} onClose={() => { setOpen(false) }} />
      <AddButton className='fixed right-2 bottom-2'/>
      <Calculator />
    </div>
  )
}
