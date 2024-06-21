import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { Icon } from '../../components/icon'
import { TopBar } from '../../components/top-bar'
import { Input } from '../../components/input'
import { emojis } from '../../assets/emojis'
import s from './index.module.scss'

export const TagSelectForm: React.FC = () => {
  console.log(emojis)
  const emojisNames = emojis.map(v => v.name)
  const [activeName, setActiveName] = useState(emojisNames[0])
  const [selectedTag, setSelectedTag] = useState({})
  const nav = useNavigate()
  return (
    <div className={s.root}>
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
        title='查看标签'
      />
      <Input label='标签名'/>
      {/* 图标选择框 */}
      <div className='tag-select'>
        <div className='tag-select-nav'>
          <span>图标</span>
          <span>{selectedTag?.char}</span>
        </div>
        <div className='tag-select-container'>
          <div className='tag-select-container-nav'>
            {
              emojisNames.map(v => <span onClick={() => { setActiveName(v) }} style={{ color: activeName === v ? 'red' : '' }} key={v}>{v}</span>)
            }
          </div>
          {
            emojis.find(val => val.name === activeName)?.chars.map((v) => {
              return (
                <b key={v} className={ v === selectedTag.char ? 'active' : '' } onClick={() => { setSelectedTag({ name: activeName, char: v }) }}>{v}</b>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}
