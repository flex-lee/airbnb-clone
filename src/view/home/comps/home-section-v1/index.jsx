import PropTypes from 'prop-types'
import React, { memo } from 'react'

import SectionHeader from '@/components/section-header'
import SectionRooms from '@/components/section-rooms'
import { HomeSectionV1Wrapper } from './style'
import SectionFooter from '@/components/section-footer'

const HomeSectionV1 = memo((props) => {

    const { infoData } = props

    return (
        <HomeSectionV1Wrapper>
            <SectionHeader title={infoData.title} subtitle={infoData.subtitle}></SectionHeader>
            <SectionRooms roomList={infoData.list} itemWidth={"25%"}></SectionRooms>
            <SectionFooter/>
        </HomeSectionV1Wrapper>
    )
})

HomeSectionV1.propTypes = {
    infoData: PropTypes.object
}

export default HomeSectionV1