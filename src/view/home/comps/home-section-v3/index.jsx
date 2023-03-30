import ScrollView from '@/base-ui/scroll-view'
import RoomItem from '@/components/room-item'
import SectionFooter from '@/components/section-footer'
import SectionHeader from '@/components/section-header'
import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { HomeSectionV3Wrapper } from './style'

const HomeSectionV3 = memo((props) => {
    const { infoData } = props
    return (
        <HomeSectionV3Wrapper>
            <SectionHeader title={infoData.title} subtitle={infoData.subtitle} />
            <div className="inner-list">
                <ScrollView>
                    {
                        infoData.list.map(item => {
                            return (
                                <RoomItem key={item.id} roomItem={item} itemWidth={"20%"} />
                            )
                        })
                    }
                </ScrollView>
            </div>
            <SectionFooter name={infoData.type} />
        </HomeSectionV3Wrapper>
    )
})

HomeSectionV3.propTypes = {
    infoData: PropTypes.object
}

export default HomeSectionV3