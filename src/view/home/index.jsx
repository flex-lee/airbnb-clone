import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'

import { fetchHomeDataAction } from '@/store/modules/home'
import HomeBanner from './comps/home-banner'
import { HomeWrapper } from './style'
import HomeSectionV1 from './comps/home-section-v1'
import { isEmptyObject } from '@/utils'
import HomeSectionV2 from './comps/home-section-V2'
import HomeLongFor from './comps/home-longfor'
import HomeSectionV3 from './comps/home-section-v3'


const Home = memo(() => {
    /* 获取异步数据 */
    const { goodPriceInfo, highScore, popularInfo, hotCommendInfo, longForInfo, plusInfo } = useSelector((state) => ({
        goodPriceInfo: state.home.goodPriceInfo,
        highScore: state.home.highScore,
        popularInfo: state.home.popularInfo,
        hotCommendInfo: state.home.hotCommendInfo,
        longForInfo: state.home.longForInfo,
        plusInfo: state.home.plusInfo
    }), shallowEqual)



    /* 执行异步请求 */
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchHomeDataAction())
    }, [dispatch]);

    return (
        <HomeWrapper>
            <HomeBanner />
            <div className='container'>
                {
                    isEmptyObject(popularInfo) && <HomeSectionV2 infoData={popularInfo} />
                }
                {
                    isEmptyObject(hotCommendInfo) && <HomeSectionV2 infoData={hotCommendInfo} />
                }
                {
                    isEmptyObject(longForInfo) && <HomeLongFor infoData={longForInfo} />
                }
                {
                    isEmptyObject(highScore) && <HomeSectionV1 infoData={highScore} />
                }
                {
                    isEmptyObject(goodPriceInfo) && <HomeSectionV1 infoData={goodPriceInfo} />
                }
                {
                    isEmptyObject(plusInfo) && <HomeSectionV3 infoData={plusInfo} />
                }
            </div>
        </HomeWrapper>

    )
})

export default Home