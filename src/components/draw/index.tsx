import { animated, useSpring } from '@react-spring/web'
import { useEffect, useState } from 'react'

export interface DrawProps {
  children?: React.ReactNode
  onClose?: () => void
  open?: boolean
}

export const Draw: React.FC<DrawProps> = (p) => {
  const { onClose, open = false, children } = p
  const [visible, setVisible] = useState(open)
  const { opacity, transform } = useSpring({
    opacity: open ? 1 : 0,
    transform: open ? 'translateX(0%)' : 'translateX(-100%)',
    config: {
      duration: 300,
      tension: 200,
    },
    onStart({ value }) {
      const { opacity } = value
      if (opacity < 0.1) {
        setVisible(true)
      }
    },
    onRest({ value }) {
      const { opacity } = value
      if (opacity < 0.1) {
        setVisible(false)
      }
    },
  })

  // 侧边栏打开时禁止滚动
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    }
    else {
      document.body.style.overflow = 'auto'
    }
  }, [open])

  return (
    <div style={{ display: visible ? 'block' : 'none' }} className='h-[100vh] fixed inset-0'>
      {/* mask */}
      <animated.div onClick={() => { onClose?.() }} style={{ opacity }} className="bg-slate-500/70 w-full h-[100vh] fixed inset-0 z-0"></animated.div>
      <animated.div style={{ opacity, transform }} className="absolute left-0 bg-white h-full w-[50vw] z-1">
        {children}
      </animated.div>
    </div>
  )
}
