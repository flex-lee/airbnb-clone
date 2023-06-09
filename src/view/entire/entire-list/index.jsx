import React, { memo } from 'react'
import { shallowEqual, useSelector } from 'react-redux'

import { EntireListWrapper } from './style'
import RoomItem from '@/components/room-item'

const EntireList = memo(() => {

    const { roomList, totalCount, isLoading } = useSelector((state) => ({
        roomList: state.entire.infoList,
        totalCount: state.entire.totalCount,
        isLoading: state.entire.isLoading
    }),shallowEqual)
    return (
        <EntireListWrapper>
            <div className="title">{totalCount}多所住所</div>
            <div className="room-list">
                {
                    roomList.map(item => {
                        return (
                            <RoomItem key={item._id} roomItem={item} itemWidth={"20%"} />
                        )
                    })
                }
            </div>
            {
                isLoading && <div className="cover"></div>
            }

        </EntireListWrapper>
    )
})

export default EntireList