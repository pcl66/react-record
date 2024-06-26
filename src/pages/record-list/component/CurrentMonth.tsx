import { useEffect, useRef, useState } from 'react'
// import { ajax } from '../../../ajax/ajax'
import { useRequest } from '../../../hooks/useRequest'
import { Button } from '../../../components/button'

const pageItems = 25

export const CurrentMonth = () => {
  const request = useRequest()
  const [currentPage, setCurrentPage] = useState(1)
  const [items, setItems] = useState<any[]>([])
  const [hasMore, setHasMore] = useState(false)
  const count = useRef(0)
  useEffect(() => {
    request.get(`/api/v1/items?page=${currentPage}`).then((v) => {
      setItems(last => last.concat(...v.data.resources))
      count.current = v.data.pager.count
      if (currentPage * pageItems >= count.current) {
        setHasMore(false)
      }
      else {
        setHasMore(true)
      }
    })
  }, [currentPage])
  const hLoadMore = () => {
    setCurrentPage(currentPage + 1)
  }
  return (
    <>
    <ol className='px-5'>{
      items.length > 0
        && items.map((item) => {
          return (
            <div key={item.id}>
              <li className='flex items-center b-[#EEE] justify-between border-b py-2'>
                <div className='text-[24px] w-[48px] h-[48px]
                  bg-[#D8D8D8] rounded-[50%] flex justify-center items-center'>
                  😘
                </div>
                <div className='flex flex-col grow px-4'>
                  <div>
                    旅行
                  </div>
                  <div className='text-[#999999]'>
                    2011年1月1日
                  </div>
                </div>
                <div className='text-[#53A867]'>
                  ￥{item.amount / 100}
                </div>
              </li>
            </div>
          )
        })
      }</ol>
      {
        hasMore && (
          <div className='mx-5'>
            <Button onClick={hLoadMore} text='加载更多' block />
          </div>
        )
      }
      {
        items.length > 0 && !hasMore && (
          <span>没有更多了</span>
        )
      }

    </>
  )
}
