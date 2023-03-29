import React, { memo } from 'react'
import HeaderCenter from './comps/header_center'
import HeaderLeft from './comps/header_left'
import HeaderRight from './comps/header_right'
import { HeaderWrapper } from './style'

const AppHeader = memo(() => {
  return (
    <HeaderWrapper>
      <HeaderLeft></HeaderLeft>
      <HeaderCenter></HeaderCenter>
      <HeaderRight></HeaderRight>
    </HeaderWrapper>
  )
})

export default AppHeader