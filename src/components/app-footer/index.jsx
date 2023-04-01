import IconTopArrow from '@/assets/svg/icon-top-arrow'
import IconGlobal from '@/assets/svg/icon_global'
import IconWeiBo from '@/assets/svg/icon_weibo'
import IconWeiXin from '@/assets/svg/icon_weixin'
import React, { memo } from 'react'
import { AppFooterWrapper } from './style'

const AppFooter = memo((props) => {

  const { changeDialog } = props

  function showDialogHandle() {
    changeDialog(true)
  }
  return (
    <AppFooterWrapper>
      <div className="resource">
        <span className='svg-link'>
          <IconWeiBo />
        </span>
        <span className='svg-link'>
          <IconWeiXin />
        </span>
        <div className="world">
          <div className="language">
            <span>
              <IconGlobal />
            </span>
            <span className='link'>
              简体中文 (CN)
            </span>
          </div>
          <div className="currency">
            <span className='link'>￥</span>
            <span className='link'>CNY</span>
          </div>
          <div className="support link" onClick={showDialogHandle}>
            <span>支持和支援</span>
            <span>
              <IconTopArrow />
            </span>
          </div>
        </div>
      </div>
      <div className="record">
        <div className="info">
          <span className='record-link'>京ICP备16017121号</span>
          <span className='record-link'> 京ICP证 160773号</span>
          <span className='dot'>·</span>
          <span className='record-link'>京公网安备 11010502032345号</span>
          <span className='dot'>·</span>
          <span>安彼迎网络（北京）有限公司</span>
          <span className='dot'>·</span>
          <span className='record-link'>营业执照</span>
        </div>
        <div className="suggest">
          <span>© 2023 Airbnb, Inc. All rights reserved.</span>
          <span className='dot'>·</span>
          <span className='record-link'>条款</span>
          <span className='dot'>·</span>
          <span className='record-link'>隐私政策</span>
          <span className='dot'>·</span>
          <span className='record-link'>网站地图</span>
          <span className='dot'>·</span>
          <span className='record-link'>全国旅游投诉渠道 12301</span>
        </div>
      </div>
    </AppFooterWrapper>
  )
})

export default AppFooter