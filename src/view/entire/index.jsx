import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchEntireListAction, changeTotalListAction } from '@/store/modules/entire'
import EntireList from './entire-list'
import EntirePagination from './entire-pagination'
import EntireSearch from './entire-search'
import { EntireWrapper } from './style'

const Entire = memo(() => {
    const dispatch = useDispatch()
    /* 从redux中获取存储的数据 */
    const { infoList, currentPage, totalList } = useSelector((state) => ({
        infoList: state.entire.infoList,
        currentPage: state.entire.currentPage,
        totalList: state.entire.totalList
    }))
    /* 进入页面发送请求 */
    useEffect(() => {
        dispatch(fetchEntireListAction({ offset: (currentPage - 1) * 20, size: 20 }))
        dispatch(changeTotalListAction(infoList.totalCount))
    }, [dispatch]);

    console.log(infoList)
    return (
        <EntireWrapper>
            <EntireSearch />
            <EntireList />
            <EntirePagination />
        </EntireWrapper>
    )
})

export default Entire