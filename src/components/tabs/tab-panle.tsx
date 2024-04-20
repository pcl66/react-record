import type { ReactNode } from 'react'

export interface TabPanelProps {
  name: String
  children?: ReactNode
}

export const TabPanel: React.FC<TabPanelProps> = (p) => {
  const { children } = p
  return (
    <div>
      {children}
    </div>
  )
}
