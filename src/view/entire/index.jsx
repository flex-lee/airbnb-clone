import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchEntireListAction } from '@/store/modules/entire'
import EntireList from './entire-list'
import EntirePagination from './entire-pagination'
import EntireSearch from './entire-search'
import { EntireWrapper } from './style'

const Entire = memo(() => {
    const { currentPage } = useSelector((state) => ({
        currentPage: state.entire.currentPage
    }

    ))
    const dispatch = useDispatch()

    /* 进入页面发送请求 */
    useEffect(() => {
        dispatch(fetchEntireListAction())
    }, [dispatch, currentPage]);

    return (
        <EntireWrapper>
            <EntireSearch />
            <EntireList />
            <EntirePagination />
        </EntireWrapper>
    )
})

export default Entire