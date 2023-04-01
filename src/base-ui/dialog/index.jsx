import PropTypes from 'prop-types'
import React, { memo, useCallback, useEffect } from 'react'

import IconCancel from '@/assets/svg/icon_cancel'
import { DialogWrapper } from './style'
import footerData from "@/assets/data/footer.json"

const Dialog = memo((props) => {
    const { showDialog, changeDialog } = props


    /**取消dialog函数 */
    const unDialogHandle = useCallback(() => {
        document.documentElement.style.overflow = "scroll"
        changeDialog(false)
    }, [changeDialog])
    /**监听dialog变化的时候执行 */
    useEffect(() => {
        const dialogEl = document.getElementById("showDialog")
        dialogEl.addEventListener('click', unDialogHandle)
        return () => {
            dialogEl.removeEventListener('click', unDialogHandle)
        };
    }, [showDialog, unDialogHandle]);

    return (
        <DialogWrapper showDialog={showDialog} >
            <div id='showDialog'>
            </div>
            <div className='info'>
                <div className='btn' onClick={() => unDialogHandle()}>
                    <IconCancel />
                </div>
                <div className='info-content'>
                    <div className="server">
                        {
                            footerData.map(item => {
                                return (
                                    <div className='item' key={item.name}>
                                        <div className='name'>{item.name}</div>
                                        <div className='list'>
                                            {
                                                item.list.map(iten => {
                                                    return <div className='iten' key={iten}>{iten}</div>
                                                })
                                            }
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </DialogWrapper >
    )
})

Dialog.propTypes = {
    showDialog: PropTypes.bool
}

export default Dialog