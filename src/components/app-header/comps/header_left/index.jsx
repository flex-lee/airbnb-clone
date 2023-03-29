import IconLogo from '@/assets/svg/icon_logo'
import React, { memo } from 'react'
import { LeftWrapper } from './style'

const HeaderLeft = memo(() => {
  return (
    <LeftWrapper>
      <div className='logo'>
        <div>
          <IconLogo />
        </div>
      </div>
    </LeftWrapper>
  )
})

export default HeaderLeft