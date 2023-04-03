import PropTypes from 'prop-types'
import React, { memo, useRef, useEffect } from 'react'
import { IndicatorWrapper } from './style'

const Indicator = memo((props) => {
    const { selectIndex } = props

    const contentRef = useRef()

    useEffect(() => {
        const selectItemEl = contentRef.current.children[selectIndex]
        // item距离左边的距离
        const itemOffsetLeft = selectItemEl.offsetLeft
        // 获取item的宽度
        const itemWidth = selectItemEl.clientWidth
        // 获取整个content的宽度
        const indicatorWidth = contentRef.current.clientWidth
        // 获取整个可以移动的距离
        const contentScroll = contentRef.current.scrollWidth
        // 获取item要滚动距离
        let distance = itemOffsetLeft + itemWidth * 0.5 - indicatorWidth * 0.5
        //获取总共可以移动的距离
        const totalDistance = contentScroll - indicatorWidth
        // 移动item
        if (distance < 0) distance = 0
        if (distance > totalDistance) distance = totalDistance
        contentRef.current.style.transform = `translate(${-distance}px)`
    }, [selectIndex]);
    return (
        <IndicatorWrapper>
            <div className='indicator-content' ref={contentRef}>
                {
                    props.children
                }
            </div>
        </IndicatorWrapper>
    )
})

Indicator.propTypes = {
    selectIndex:PropTypes.number
}

export default Indicator