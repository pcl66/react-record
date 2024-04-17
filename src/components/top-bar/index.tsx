import { Icon } from '../icon'

export interface TopBarProps {
  icon?: React.ReactNode
  title?: string
}

export const TopBar: React.FC<TopBarProps> = (p) => {
  const { icon, title } = p
  return (
    <div className="pt-6 pl-6 pb-2 bg-gradient-to-b from-[#5C33BE] to-[#8F4CD7]">
      <div className='flex gap-3 text-white'>
        {icon || <Icon name="menu" color='white'/>}
        <span className='text-sm'>{title}</span>
      </div>
    </div>
  )
}
