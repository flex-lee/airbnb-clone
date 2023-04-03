import Indicator from '@/base-ui/indicator'
import React, { memo, useState } from 'react'
import { DemoWrapper } from './style'

const Demo = memo(() => {
    const names = ['kid', 'pig', 'foo', 'dit', 'common', 'luna']
    const [selectIndex, setSelectIndex] = useState(0);

    function toggleClickHandle(isNext) {
        let newIndex = isNext ? selectIndex + 1 : selectIndex - 1
        if (newIndex < 0) newIndex = names.length - 1
        if (newIndex > names.length - 1) newIndex = 0
        setSelectIndex(newIndex)
    }
    return (
        <DemoWrapper>
            <div className="control">
                <button onClick={() => toggleClickHandle(false)}>prev</button>
                <button onClick={() => toggleClickHandle(true)}>next</button>
            </div>
            <div className="list">
                <Indicator selectIndex={selectIndex}>
                    {
                        names.map(item => {
                            return <button key={item}>{item}</button>
                        })
                    }
                </Indicator>
            </div>
        </DemoWrapper>
    )
})

export default Demo