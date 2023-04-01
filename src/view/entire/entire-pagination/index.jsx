import React, { memo } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Pagination } from '@mui/material'

import { changeCurrentPageAction } from '@/store/modules/entire'
import { EntirePaginationWrapper } from './style'



const EntirePagination = memo(() => {
  const { currentPage, totalCount } = useSelector((state) => ({
    currentPage: state.entire.currentPage,
    totalCount: state.entire.totalCount
  }))

  const dispatch = useDispatch()

  /**处理分页函数 */
  function handleChange(e) {
    const value = e.target.innerText
    dispatch(changeCurrentPageAction(value))
  }

  return (
    <EntirePaginationWrapper>
      <div className="pageInfo">
        <Pagination count={totalCount / 20} defaultPage={1} onChange={handleChange} />
        <div className="countMessage">
          <span>第{(currentPage-1)*20+1}-{currentPage*20}个房源,共超过{totalCount}个</span>
        </div>
      </div>
    </EntirePaginationWrapper>
  )
})

export default EntirePagination