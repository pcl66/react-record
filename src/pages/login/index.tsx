import { Icon } from '../../components/icon'
import { TopBar } from '../../components/top-bar'
import shanzu from '../../assets/山竹.svg'
import { Input } from '../../components/input'
import { Button } from '../../components/button'

export const Login = () => {
  return (
    <div>
      {/* top */}
      <TopBar icon={<Icon className='w-[2em] h-[2em]' name='return' color='white'/>} title='登录' />
      <div className='px-[10px]'>
        {/* icon */}
        <div className='flex items-center flex-col py-[5vh]'>
          <img src={shanzu} alt="" />
          <span className='text-[28px] text-fuchsia-800'>山竹记账</span>
        </div>
        {/* login form */}
        <form onSubmit={e => e.preventDefault()} className='flex flex-col gap-5'>
          <Input labelName='邮箱地址' placeholder='请输入邮箱，然后点击发送验证码'></Input>
          <div className='flex gap-2 items-end'>
            <Input className='w-[40%]' labelName='验证码' placeholder='六位数字'></Input>
            <Button text='发送验证码' className='h-8 text-[12px] grow'/>
          </div>
          <Button className='mt-[80px]' text='登录'/>
        </form>
      </div>
    </div>
  )
}
