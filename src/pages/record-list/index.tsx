import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Icon } from '../../components/icon'
import { TabPanel } from '../../components/tabs/tab-panel'
import { Tabs } from '../../components/tabs/tabs'
import { TopBar } from '../../components/top-bar'
import { Draw } from '../../components/draw'
import { AddButton } from '../../components/add-button'
import { CurrentMonth } from './component/CurrentMonth'
import { Menu } from './component/Menu'

export const RecordList = () => {
  const nav = useNavigate()
  const [activeTab, setActiveTab] = useState('本月')
  const [open, setOpen] = useState(false)
  const hClickTab = (p: string) => {
    setActiveTab(p)
  }
  return (
    <div>
      <TopBar
        icon={
          <Icon
            name='menu'
            color='white'
            onClick={() => {
              setOpen(true)
            }}
          />
        }
        title='山竹记账'
      />
      <div>
        <Tabs active={activeTab} onClick={hClickTab}>
          <TabPanel name={'本月'}>
            <CurrentMonth />
          </TabPanel>
          <TabPanel name={'上个月'}>
            <div>上个月</div>
          </TabPanel>
          <TabPanel name={'今年'}>
            <div>今年</div>
          </TabPanel>
          <TabPanel name={'自定义时间'}>
            <div>自定义时间</div>
          </TabPanel>
        </Tabs>
      </div>
      <Draw open={open} onClose={() => { setOpen(false) }} >
        <Menu />
      </Draw>
      <AddButton className='fixed bottom-[20px] right-[20px]' onTouchStart={ () => { nav('/items-new') } } />
    </div>
  )
}
