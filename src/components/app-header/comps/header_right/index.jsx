import React, { memo, useState, useEffect } from 'react'
import { RightWrapper } from './style'
import IconAvatar from '@/assets/svg/icon_avatar'
import IconGlobal from '@/assets/svg/icon_global'
import IconMenu from '@/assets/svg/icon_menu'

const HeaderRight = memo(() => {

  const [showPanel, setShowPanel] = useState(false)  //判断是否显示panel

  /* 副作用代码 */
  useEffect(() => {

    function windowClickHandle() {
      setShowPanel(false)
    }
    window.addEventListener("click", windowClickHandle)
    //设置为true变为捕获状态
    return () => {
      window.removeEventListener("click", windowClickHandle)
    };
  }, []);

  /* 点击事件处理函数 */
  function profileClickHandle(e) {
    e.stopPropagation()  //阻止冒泡防止window点击执行
    setShowPanel(!showPanel)
  }

  return (
    <RightWrapper>
      <div className='btns'>
        <span className='btn'>登录</span>
        <span className='btn'>注册</span>
        <span className='btn'>
          <IconGlobal />
        </span>
      </div>

      <div className="profile" onClick={profileClickHandle}>
        <IconMenu />
        <IconAvatar />

        {
          showPanel && (
            <div className="panel">
              <div className="top">
                <div className="item register">注册</div>
                <div className="item logon">登录</div>
              </div>
              <div className="bottom">
                <div className="item">发布房源</div>
                <div className="item">开展体验</div>
                <div className="item">帮助</div>
              </div>
            </div>
          )
        }
      </div>
    </RightWrapper>
  )
})

export default HeaderRight