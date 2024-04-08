import { Icon } from '../icon'

export const Loading = () => {
  return (
    <div className='flex justify-center items-center flex-col gap-2'>
      <Icon name="loading" className='animate-spin'/>
      <span>加载中...</span>
    </div>
  )
}
