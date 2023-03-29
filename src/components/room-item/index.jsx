import IconStar from '@/assets/svg/icon_star'
import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { RoomItemWrapper } from './style'

const RoomItem = memo((props) => {
    const { roomItem, itemWidth = "33.33%" } = props
    return (
        <RoomItemWrapper itemWidth={itemWidth} verifyColor={roomItem.verify_info.text_color ?? "#929292"}>
            <div className='inner'>
                <div className='cover'>
                    <img src={roomItem.picture_url} alt="" />
                </div>
                <div className="detail">
                    <div className='verifyInfo'>
                        <div className="message">
                            {roomItem.verify_info.messages.join(" · ")}
                        </div>
                        <div className="rating">
                            {
                                roomItem.star_rating && (
                                    <>
                                        <span className='star'>
                                            <IconStar />
                                        </span>
                                        <span>
                                            {roomItem.star_rating} ({roomItem.reviews_count})
                                        </span>
                                    </>
                                )
                            }
                        </div>
                    </div>
                    <div className="desc">
                        {roomItem.name}
                    </div>
                    <div className="price">
                        <span> {roomItem.price_format}</span>
                        <span className='night'>/晚</span>
                    </div>
                </div>
            </div>
        </RoomItemWrapper>
    )
})

RoomItem.propTypes = {
    roomItem: PropTypes.object
}

export default RoomItem