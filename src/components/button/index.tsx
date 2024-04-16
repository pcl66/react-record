export interface ButtonProps {
  text?: string
  block?: boolean
}

export const Button: React.FC<ButtonProps> = (p) => {
  const {
    text = 'button',
    block = false,
    ...args
  } = p
  return (
    <button {...args} className={`${block ? 'block w-full' : ''} bg-main-backgroundColor text-white py-2 rounded`}>{text}</button>
  )
}
