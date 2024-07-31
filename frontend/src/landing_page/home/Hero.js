import React from 'react';

function Hero() {
    return ( 
        <div className='container p-5 mb-5'>
            <div className='row text-center'>
                <img src='media/images/homeHero.png' alt='Hero_Image' className='mb-5' />
                <h1 className='mt-2'>Invest in everything</h1>
                <p>Online platform to invest in stocks, derivatives, mutual funds, and more</p>
                <button className='p-1 btn btn-primary fs-6 mb-5 mt-4' style={{width:"15%", margin:"0 auto"}}>Sign up Now</button>
            </div>
        </div>
     );
}

export default Hero;