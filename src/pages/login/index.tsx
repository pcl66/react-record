import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Icon } from '../../components/icon'
import { TopBar } from '../../components/top-bar'
import shanzu from '../../assets/山竹.svg'
import { Input } from '../../components/input'
import { Button } from '../../components/button'
import type { Error, Rules } from '../../utils/validator'
import { validator } from '../../utils/validator'
import { useRequest } from '../../hooks/useRequest'
import { useCountdown } from '../../hooks/useCountdown'

type LoginForm = {
  email: string
  code: string
}

export const Login = () => {
  const { start, isCounting, time } = useCountdown(1000 * 60)
  const nav = useNavigate()
  const request = useRequest()
  const [loginForm, setLoginForm] = useState<LoginForm>({
    email: 'fangyinghang@foxmail.com',
    code: '123456',
  })
  const [error, setError] = useState<Error<LoginForm>>()
  const hSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    const rules: Rules<LoginForm> = [
      {
        key: 'email',
        type: 'required',
        message: '请输入邮箱地址',
      },
      {
        key: 'code',
        type: 'required',
        message: '请输入验证码',
      },
    ]
    const error = validator(loginForm, rules)
    setError(error)
    request.post('/api/v1/session', {
      email: loginForm.email,
      code: loginForm.code,
    }).then((res) => {
      if (res.data.jwt) {
        localStorage.setItem('token', res.data.jwt)
        nav('/record-list')
      }
    })
  }
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
        <form onSubmit={hSubmit} className='flex flex-col gap-5'>
          <Input error={error?.email?.[0]} value={loginForm.email} onChange={e => setLoginForm({ ...loginForm, email: e.target.value })} label='邮箱地址' placeholder='请输入邮箱，然后点击发送验证码'></Input>
          <div className='flex gap-2 items-end'>
            <Input error={error?.code?.[0]} value={loginForm.code} onChange={e => setLoginForm({ ...loginForm, code: e.target.value })} className='w-[40%]' label='验证码' placeholder='六位数字'></Input>
            {
              isCounting
                ? (
                <Button className='h-8 text-[12px] grow pointer-events-none contrast-[.25]' text={`${Math.ceil(time / 1000)}s`} disabled/>
                  )
                : <Button onTouchStart={() => { start() }} type='button' text='发送验证码' className='h-8 text-[12px] grow'/>
            }

          </div>
          <Button className='mt-[80px]' text='登录'/>
        </form>
      </div>
    </div>
  )
}
