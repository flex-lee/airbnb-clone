import React, { memo } from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import { Pagination } from '@mui/material'

import { changeCurrentPageAction } from '@/store/modules/entire'
import { EntirePaginationWrapper } from './style'



const EntirePagination = memo(() => {
  const { currentPage, totalCount } = useSelector((state) => ({
    currentPage: state.entire.currentPage,
    totalCount: state.entire.totalCount
  }),shallowEqual)

  // 页数常量
  const totalPage = Math.ceil(totalCount / 20)
  const startCount = (currentPage - 1) * 20 + 1
  const endCount = currentPage * 20

  const dispatch = useDispatch()
  /**处理分页函数 */
  function handleChange(e) {
    window.scrollTo(0, 0)
    const value = e.target.innerText
    dispatch(changeCurrentPageAction(value))
  }

  return (
    <EntirePaginationWrapper>
      <div className="pageInfo">
        <Pagination count={totalPage} defaultPage={1} onChange={handleChange} />
        <div className="countMessage">
          <span>第{startCount}-{endCount}个房源,共超过{totalCount}个</span>
        </div>
      </div>
    </EntirePaginationWrapper>
  )
})

export default EntirePagination