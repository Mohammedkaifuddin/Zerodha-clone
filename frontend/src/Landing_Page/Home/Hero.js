import React from 'react'

function Hero() {
    return ( 
        <div className='container p-5 mb-5'>
            <div className='row text-center'>
                <img src = 'media/landing.png' alt='HeroImage' className='mb-5'/>
                <h1 className='mt-6'>Invest in everything</h1>
                <p>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                <button className= 'p-2 btn btn-primary fs-6 mb-5' style={{width:"30%", margin:"0 auto"}}>SignUp now</button>
            </div>
        </div>
     );
}

export default Hero;