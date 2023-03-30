import PropTypes from 'prop-types'
import React, { memo } from 'react'
import classNames from 'classnames'

import { SectionTabsWrapper } from './style'
import ScrollView from '@/base-ui/scroll-view'

const SectionTabs = memo((props) => {
    const { tabNames, changeCity, name } = props

    function currentClickHandle(name) {
        changeCity(name)
    }

    return (
        <SectionTabsWrapper>
            <ScrollView>
                {
                    tabNames?.map(item => {
                        return (
                            <div key={item} className={classNames('item', { active: item === name })} onClick={() => currentClickHandle(item)}>{item}</div>
                        )
                    })
                }
            </ScrollView>

        </SectionTabsWrapper>
    )
})

SectionTabs.propTypes = {
    tabNames: PropTypes.array
}

export default SectionTabs