import { useEffect, useRef } from 'react'
import { useSwipe } from '../../../hooks/useSwipe'

export interface WelcomeTemplateProps {
  imgSrc: string
  word1: string
  word2: string
  isLast?: boolean
  onClick?: () => void
  onSwipeChange?: (direction: string) => void
}

export const WelcomeTemplate: React.FC<WelcomeTemplateProps> = (props) => {
  const { imgSrc, word1, word2, isLast } = props
  const cardRef = useRef<HTMLDivElement | null>(null)
  const direction = useSwipe(cardRef)

  const hClick = (e: React.TouchEvent) => {
    e.stopPropagation()
    props.onClick && props.onClick()
  }
  useEffect(() => {
    props.onSwipeChange && props.onSwipeChange(direction)
  }, [direction])
  return (
        <div ref={cardRef} className='h-[450px] w-11/12 bg-white rounded-md flex flex-col justify-center items-center absolute top-0'>
            <img src={imgSrc} alt="" className='w-[80px] h-[80px]' />
            <div className='my-12 text-center font-[350] text-[#333333] text-[32px]'>
              <p className=''>{word1}</p>
              <p className=''>{word2}</p>
            </div>
            <p className='text-[#6035BF] text-[30px] font-normal' onTouchStart={hClick}>{isLast ? '开始使用' : '下一步'}</p>
        </div>
  )
}
