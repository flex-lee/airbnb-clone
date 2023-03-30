import IconLeftArrow from '@/assets/svg/icon-left-arrow'
import IconRightArrow from '@/assets/svg/icon-right-arrow'
import React, { memo, useRef, useEffect, useState } from 'react'
import { ScrollViewWrapper } from './style'

const ScrollView = memo((props) => {
    const [isShowRight, setIsShowRight] = useState(false)
    const [isShowLeft, setIsShowLeft] = useState(false)
    const [posIndex, setPosIndex] = useState(0)
    const totalDistanceRef = useRef()


    const scrollRef = useRef()
    useEffect(() => {
        const scrollWidth = scrollRef.current.scrollWidth //需要展示数据的总宽度
        const offsetWidth = scrollRef.current.offsetWidth //可视区域总宽度
        const totalDistance = scrollWidth - offsetWidth   //隐藏区域总宽度
        totalDistanceRef.current = totalDistance
        setIsShowRight(totalDistance > 0)
    }, [props.children]);

    /**事件处理函数 */
    function scrollClickHandle(isRight) {
        const newIndex = isRight ? posIndex + 1 : posIndex - 1
        const newEl = scrollRef.current.children[newIndex]
        const newOffsetWidth = newEl.offsetLeft
        scrollRef.current.style.transform = `translate(-${newOffsetWidth}px)`
        setPosIndex(newIndex)

        setIsShowRight(totalDistanceRef.current > newOffsetWidth)
        setIsShowLeft(newOffsetWidth > 0)
    }

    return (
        <ScrollViewWrapper>

            {
                isShowLeft && <span className='left' onClick={() => scrollClickHandle(false)}>
                    <IconLeftArrow />
                </span>
            }
            {
                isShowRight && <span className='right' onClick={() => scrollClickHandle(true)}>
                    <IconRightArrow />
                </span>
            }
            <div className="scroll">
                <div className="scrollView" ref={scrollRef}>
                    {
                        props.children
                    }
                </div>
            </div>

        </ScrollViewWrapper>
    )
})

export default ScrollView