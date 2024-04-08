export interface IconProps {
  className?: string
  color?: string
  name: string
}

export const Icon: React.FC<IconProps> = (p) => {
  const { className, color, name } = p
  return (
    <svg className={`${className} w-[1.2em] h-[1.2em] fill-[${color}] text-[${color}]`}>
      <use xlinkHref={`#${name}`}></use>
    </svg>
  )
}
