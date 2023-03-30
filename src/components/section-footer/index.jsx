import IconMoreArrow from '@/assets/svg/icon-more-arrow'
import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { useNavigate } from 'react-router-dom'
import { SectionFooterWrapper } from './style'

const SectionFooter = memo((props) => {
    const { name } = props
    const navigate = useNavigate()


    function navigateTo(name) {
        navigate("/entire/" + name)
    }

    return (
        <SectionFooterWrapper color={name ? "#00848A" : "#000"}>
            <div className="info" onClick={() => navigateTo(name)}>
                <span className="text">{name ? `显示更多${name}房源 ` : "显示全部"}</span>
                <IconMoreArrow />
            </div>
        </SectionFooterWrapper>
    )
})

SectionFooter.propTypes = {
    name: PropTypes.string
}

export default SectionFooter