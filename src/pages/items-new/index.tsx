import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Icon } from '../../components/icon'
import { Tabs } from '../../components/tabs/tabs'
import { TopBar } from '../../components/top-bar'
import { TabPanel } from '../../components/tabs/tab-panel'
import { Draw } from '../../components/draw'
import { Calculator } from '../../components/calculator'
import { useRequest } from '../../hooks/useRequest'

type Tag = {
  id: number
  kind: 'expenses' | 'income'
  sign: string
  name: string
}

export const ItemsNew = () => {
  const [activeTab, setActiveTab] = useState('支出')
  const nav = useNavigate()
  const [tags, setTags] = useState<Tag[]>([])
  const request = useRequest()
  const hClickTab = (p: string) => {
    setActiveTab(p)
  }
  useEffect(() => {
    request.get('/api/v1/tags', {
      params: {
        kind: activeTab === '支出' ? 'expenses' : 'income',
      },
    }).then((v) => {
      const { resources = [] } = v.data
      setTags(resources)
    })
  }, [activeTab])
  return (
    <div className='flex flex-col pb-[30vh] h-[100vh]'>
      <TopBar
        icon={
          <Icon
            className='w-[2em] h-[2em]'
            name='return'
            color='white'
            onClick={() => {
              nav(-1)
            }}
          />
        }
        title='记一笔'
      />
      <div className=''>
        <Tabs type='full' active={activeTab} onClick={hClickTab}>
          <TabPanel name={'支出'}>
            <div className='grid gap-3 p-5 justify-center' style={{
              gridTemplateColumns: 'repeat(auto-fill, 50px)',
              gridTemplateRows: 'repeat(auto-fill, 80px)',
              height: 'calc(100vh - 30vh - 108px)',
              overflow: 'scroll',
            }}>
              {
                tags.map((_) => {
                  return (
                    <div key={_.id}>
                      <div className='flex w-[45px] h-[45px] rounded-[50%] justify-center items-center bg-slate-200 border-indigo-400'>{_.sign}</div>
                      <div className='text-[12px] text-center pt-1'>{_.name}</div>
                    </div>
                  )
                })
              }
            </div>
          </TabPanel>
          <TabPanel name={'收入'}>
          <div className='grid gap-3 p-5 justify-center' style={{
            gridTemplateColumns: 'repeat(auto-fill, 50px)',
            gridTemplateRows: 'repeat(auto-fill, 80px)',
            height: 'calc(100vh - 30vh - 108px)',
            overflow: 'scroll',
          }}>
              {
                tags.map((_, i) => {
                  return (
                    <div onClick={() => { nav('/tag-list') }} key={i}>
                      <div className='flex w-[45px] h-[45px] rounded-[50%] justify-center items-center bg-slate-200 border-indigo-400'>{_.sign}</div>
                      <div className='text-[12px] text-center pt-1'>{_.name}</div>
                    </div>
                  )
                })
              }
            </div>
          </TabPanel>
        </Tabs>
      </div>
      <Calculator className='fixed bottom-0 w-full'/>
      <Draw>
      </Draw>
    </div>
  )
}
