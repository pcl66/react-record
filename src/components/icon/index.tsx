import type { SVGProps } from 'react'

export interface IconProps {
  className?: string
  color?: string
  name: string
}

export const Icon: React.FC<IconProps & SVGProps<SVGSVGElement>> = (p) => {
  const { className, color, name, ...rest } = p
  return (
    <svg {...rest} className={`${className || ''} w-[1.2em] h-[1.2em]`} style={{ fill: color }}>
      <use xlinkHref={`#${name}`}></use>
    </svg>
  )
}
