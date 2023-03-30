import PropTypes from 'prop-types'
import React, { memo, useCallback, useState } from 'react'

import SectionHeader from '@/components/section-header'
import SectionRooms from '@/components/section-rooms'
import { HomeSectionV2Wrapper } from './style'
import SectionFooter from '@/components/section-footer'
import SectionTabs from '@/components/section-tabs'

const HomeSectionV2 = memo((props) => {
    /**获取tab数据 */
    const { infoData } = props

    /* tab数据转换 */
    const tabNames = infoData.dest_address?.map(item => item.name)
    // !!  useState只初始化第一次的值,所有请求的数据选用父组件先确认是否有值才能赋初始值
    const [currentCity, setCurrentCity] = useState(Object.keys(infoData.dest_list)[0])

    /**事件处理函数 */
    const changeCity = useCallback((name) => {
        setCurrentCity(name)
    }, [])




    return (
        <HomeSectionV2Wrapper>
            <SectionHeader title={infoData.title} subtitle={infoData.subtitle} />
            <SectionTabs tabNames={tabNames} name={currentCity} changeCity={(name) => changeCity(name)} />
            <SectionRooms roomList={infoData.dest_list?.[currentCity]} />
            <SectionFooter name={currentCity} />
        </HomeSectionV2Wrapper>
    )
})

HomeSectionV2.propTypes = {
    infoData: PropTypes.object
}

export default HomeSectionV2