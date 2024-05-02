import React, { useEffect, useState } from 'react'

export interface TabsProps {
  active: string
  type?: 'normal' | 'full'
  onClick?: (name: string) => void
  children: React.ReactNode
  className?: string
}

export const Tabs: React.FC<TabsProps> = (p) => {
  const {
    active,
    children,
    onClick,
    type = 'normal',
    className,
  } = p

  const childrenArray: (React.ReactElement<{ name: string }, string | React.JSXElementConstructor<any>>)[] = React.Children.toArray(children) as (React.ReactElement<{ name: string }, string | React.JSXElementConstructor<any>>)[]
  const activeTab = childrenArray.find((v) => {
    return v.props.name === active
  })

  const [indicatorWidth, setIndicatorWidth] = useState(0)
  const [indicatorLeft, setIndicatorLeft] = useState(0)
  const tabsRef = React.useRef<Record<string, HTMLSpanElement | null> >({})

  useEffect(() => {
    const width = tabsRef.current[active]?.offsetWidth || 0
    setIndicatorLeft(tabsRef.current[active]?.offsetLeft || 0)
    setIndicatorWidth(width)
  }, [active])

  return (
    <div className={className}>
      {/* select bar */}
      {
        <div className={`relative flex ${type === 'full' ? 'justify-center' : ''} items-center p-2 ${type === 'normal' && 'pl-5'} bg-gradient-to-b from-[#8F4CD7] to-[#8F4CD7]`}>
          {
            childrenArray.map((v) => {
              return (
                <span
                ref={(e) => {
                  tabsRef.current[v.props.name] = e
                }}
                onClick={() => {
                  onClick?.(v.props.name as string)
                }}
                key={(v.props.name) as React.Key}
                className={`text-white px-2 ${type === 'full' ? 'grow' : ''} text-center`}
                >
                  {v.props.name}
                </span>
              )
            })
          }
          {/* indicator */}
          <div style={{
            width: indicatorWidth,
            // TODO 优化为transform位移
            left: indicatorLeft,
          }} className='absolute bottom-0 h-[3px] w-6 bg-[#C8B1FF] transition-all duration-500'></div>
        </div>
      }
      {activeTab}
    </div>
  )
}
