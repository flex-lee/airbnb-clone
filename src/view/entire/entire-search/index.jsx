import React, { memo, useState } from 'react'
import { EntireSearchWrapper } from './style'
import filterData from '@/assets/data/filter_data.json'
import ScrollView from '@/base-ui/scroll-view'
import classNames from 'classnames'

const EntireSearch = memo(() => {

  const [filterArr, setFilterArr] = useState([]);

  /**处理改变选择函数 */
  function changeFilterListHandle(item) {
    const newFilterArr = [...filterArr]
    if (newFilterArr.includes(item)) {
      const itemIndex = newFilterArr.findIndex(filterItem => filterItem === item)
      newFilterArr.splice(itemIndex, 1)
    } else {
      newFilterArr.push(item)
    }
    setFilterArr(newFilterArr)

  }
  return (
    <EntireSearchWrapper>
      <div className='filterList'>
        <ScrollView>
          {
            filterData.map(item => {
              return (
                <div className={classNames("item", { "active": filterArr.includes(item) })} key={item} onClick={() => changeFilterListHandle(item)}>{item}</div>
              )
            })
          }
        </ScrollView>
      </div>
    </EntireSearchWrapper>
  )
})

export default EntireSearch