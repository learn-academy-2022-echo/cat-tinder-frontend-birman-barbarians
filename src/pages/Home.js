import React from 'react'
import Bannercat from '../assets/bannercat.jpg'


const Home = () => {
    return (
        <>
        <p className='Breaker'></p>
            <div className='Banner'>
                <div className='BannerBigMessage'> 
                    <h2> Cat Tinder </h2>
                    <div className='BannerSmallMessage'>
                        <h8> The site to find your feline friend a new buddy!</h8>
                    </div>
                </div>
                <div>
                    <img className='BannerImage' src={Bannercat}></img>
                </div>
            </div>
        </>
    )
}


export default Home