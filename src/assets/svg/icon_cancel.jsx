import { styleStrToObj } from '@/utils'
import React, { memo } from 'react'

const IconCancel = memo(() => {
  return (
    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={styleStrToObj("display: block; fill: none; height: 16px; width: 16px; stroke: currentcolor; stroke-width: 3; overflow: visible;")}><path d="m6 6 20 20"></path><path d="m26 6-20 20"></path></svg>
  )
})

export default IconCancel