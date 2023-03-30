import ScrollView from '@/base-ui/scroll-view';
import LongForItem from '@/components/longfor-item';
import SectionHeader from '@/components/section-header';
import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { HomeLongForWrapper } from './style'

const HomeLongFor = memo((props) => {
    const { infoData } = props;
    return (
        <HomeLongForWrapper>
            <SectionHeader title={infoData.title} subtitle={infoData.subtitle} />

            <div className="inner-list">
                <ScrollView>
                    {
                        infoData.list?.map(item => {
                            return (
                                <LongForItem key={item.city} itemData={item} itemWidth={"20%"} />
                            )
                        })
                    }
                </ScrollView>
            </div>

        </HomeLongForWrapper>
    )
})

HomeLongFor.propTypes = {
    infoData: PropTypes.object
}

export default HomeLongFor