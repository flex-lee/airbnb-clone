import IconSearch from '@/assets/svg/icon_search'
import React, { memo } from 'react'
import { CenterWrapper } from './style'

const HeaderCenter = memo(() => {
  return (
    <CenterWrapper>
      <div className="text">搜索房源和体验</div>
      <div className="icon">
        <div>
          <IconSearch/>
        </div>
      </div>
    </CenterWrapper>
  )
})

export default HeaderCenter