import IconLike from '@/assets/svg/icon_like'
import IconStar from '@/assets/svg/icon_star'
import PropTypes from 'prop-types'
import React, { memo, useRef } from 'react'
import { Carousel } from 'antd'

import { RoomItemWrapper } from './style'
import IconLeftArrow from '@/assets/svg/icon-left-arrow'
import IconRightArrow from '@/assets/svg/icon-right-arrow'

const RoomItem = memo((props) => {
    const { roomItem, itemWidth = "33.33%" } = props

    const carouselRef = useRef()


    /**点击切换图片函数处理 */
    function changeImgHandle(isNext) {
        isNext ? carouselRef.current.next() : carouselRef.current.prev()

    }

    // 判断是否需要展示slider
    const homeItem = (
        <div className='cover'>
            <img src={roomItem.picture_url} alt="" />
        </div>
    )

    const entireItem = (
        <div className='slider'>
            <div className='prevent' onClick={() => changeImgHandle(false)}>
                <span>
                    <IconLeftArrow size={30} />
                </span>
            </div>
            <div className='next' onClick={() => changeImgHandle(true)}>
                <span>
                    <IconRightArrow size={30} />
                </span>
            </div>
            <Carousel dots={false} ref={carouselRef}>
                {
                    roomItem?.picture_urls?.map(item => {
                        return (
                            <div className='cover' key={item}>
                                <img src={item} alt="" />
                            </div>
                        )
                    })
                }
            </Carousel>
        </div>
    )
    return (
        <RoomItemWrapper itemWidth={itemWidth} verifyColor={roomItem.verify_info.text_color ?? "#929292"} starColor={roomItem.star_rating_color}>
            <div className='inner'>
                {
                    roomItem.picture_urls ? entireItem : homeItem
                }

                {
                    roomItem?.bottom_info && <span className='info'>{roomItem.bottom_info.content}</span>
                }
                <span className='like'>
                    <IconLike />
                </span>
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
        </RoomItemWrapper >
    )
})

RoomItem.propTypes = {
    roomItem: PropTypes.object
}

export default RoomItem