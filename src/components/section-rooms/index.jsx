import React, { memo } from 'react'
import PropTypes from "prop-types"

import RoomItem from '@/components/room-item'
import { SectionRoomWrapper } from './style'

const SectionRooms = memo((props) => {

    const { roomList = [], itemWidth } = props

    return (
        <SectionRoomWrapper>
            {
                roomList?.slice(0, 8).map(item => {
                    return (
                        <RoomItem key={item.id} roomItem={item} itemWidth={itemWidth}></RoomItem>
                    )
                })
            }
        </SectionRoomWrapper>

    )
})

SectionRooms.propTypes = {
    roomList: PropTypes.array
}

export default SectionRooms