export interface InputProps {
  label?: string
  className?: string
  placeholder?: string
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  error?: string
}

export const Input: React.FC<InputProps> = (p) => {
  const { label, className, placeholder, error } = p
  return (
    <div className={className}>
      <div className="pb-2">{label}</div>
      <input {...p} placeholder={placeholder} className="px-2 w-full h-8 border-solid border-[1px] rounded outline-none focus:border-indigo-500 transition-all" type="text" />
      {error && <div className="text-red-500 text-[12px] absolute">{error}</div>}
    </div>
  )
}
