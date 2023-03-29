import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'

import { fetchHomeDataAction } from '@/store/modules/home'
import HomeBanner from './comps/home-banner'
import { HomeWrapper } from './style'
import SectionHeader from '@/components/section-header'
import RoomItem from '@/components/room-item'


const Home = memo(() => {
    /* 获取异步数据 */
    const { goodPriceInfo } = useSelector((state) => ({
        goodPriceInfo: state.home.goodPriceInfo
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
                <div className='goodPrice'>
                    <SectionHeader title={goodPriceInfo.title} subtitle={goodPriceInfo.subtitle}></SectionHeader>
                    <div className='items'>
                        {
                            goodPriceInfo.list?.slice(0,8).map(item => {
                                return (
                                    <RoomItem key={item.id} roomItem={item} itemWidth="23%"></RoomItem>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </HomeWrapper>

    )
})

export default Home