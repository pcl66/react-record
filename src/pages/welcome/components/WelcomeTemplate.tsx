export interface WelcomeTemplateProps {
  imgSrc: string
  word1: string
  word2: string
  isLast?: boolean
  onClick?: () => void
}

export const WelcomeTemplate: React.FC<WelcomeTemplateProps> = (props) => {
  const { imgSrc, word1, word2, isLast } = props
  return (
        <div className='h-[450px] w-11/12 bg-white rounded-md flex flex-col justify-center items-center absolute top-0'>
            <img src={imgSrc} alt="" className='w-[80px] h-[80px]' />
            <div className='my-12 text-center font-[350] text-[#333333] text-[32px]'>
              <p className=''>{word1}</p>
              <p className=''>{word2}</p>
            </div>
            <p className='text-[#6035BF] text-[30px] font-normal' onClick={props.onClick}>{isLast ? '开始使用' : '下一步'}</p>
        </div>
  )
}
