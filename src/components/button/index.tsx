export interface ButtonProps {
  text?: string
  block?: boolean
  className?: string
}

export const Button: React.FC<ButtonProps> = (p) => {
  const {
    text = 'button',
    block = false,
    className,
    ...args
  } = p
  return (
    <button {...args} className={`${block ? 'block w-full' : ''} bg-main-backgroundColor text-white py-2 rounded ${className}`}>{text}</button>
  )
}
