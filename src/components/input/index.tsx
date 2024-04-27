export interface InputProps {
  labelName?: string
  className?: string
  placeholder?: string
}

export const Input: React.FC<InputProps> = (p) => {
  const { labelName, className, placeholder } = p
  return (
    <div className={className}>
      <div className="pb-2">{labelName}</div>
      <input placeholder={placeholder} className="px-2 w-full h-8 border-solid border-[1px] rounded outline-none focus:border-indigo-500 transition-all" type="text" />
    </div>
  )
}
