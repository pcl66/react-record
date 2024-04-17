import { Icon } from '../icon'

export interface AddButtonProps {
  className?: string
}

export const AddButton: React.FC<AddButtonProps> = ({ className }) => {
  return (
    <div className={`rounded-full p-2 bg-main-backgroundColor inline-block ${className}`}>
      <Icon name="add" color='white'/>
    </div>
  )
}
