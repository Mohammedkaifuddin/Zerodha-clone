import React from 'react'

// import Navbar from '../Navbar'
// import Footer from '../Footer';

import Hero from './Hero';
import LeftSection from './Leftsection';
import RightSection from './Rightsection';

import Universe from './Universe'; 

function ProductPage() {
    return ( 
        <>
            {/* <Navbar /> */}
            <Hero />
            <LeftSection 
                imageURL='media/products-kite.png' 
                productName='Kite' 
                productDescription='Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices.' 
                tryDemo = 'https://kite-demo.zerodha.com/dashboard' 
                learnMore ='https://zerodha.com/products/kite' 
                googlePlay = 'https://play.google.com/store/apps/details?id=com.zerodha.kite3' 
                appStore = 'https://apps.apple.com/in/app/zerodha-kite-trade-invest/id1449453802'
            />
            
            <RightSection 
                imageURL='media/products-console.png' 
                productName='Console' 
                productDescription='Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase.' 
                
                learnMore ='https://zerodha.com/products/kite' 
                />


            <LeftSection 
                imageURL='media/products-coin.png' 
                productName='Coin' 
                productDescription='Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices.'   
                 tryDemo = 'https://kite-demo.zerodha.com/dashboard' 
                learnMore ='https://zerodha.com/products/kite' 
                googlePlay = 'https://play.google.com/store/apps/details?id=com.zerodha.kite3' 
                appStore = 'https://apps.apple.com/in/app/zerodha-kite-trade-invest/id1449453802'
                />

            <RightSection 
                imageURL='media/kite-connect-api.svg' 
                productName='Kite connect api' 
                productDescription='Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase.' 
 
                learnMore ='https://zerodha.com/products/kite' 
                />


            <LeftSection 
                imageURL='media/varsity-products.svg' 
                productName='Varsity mobile' 
                productDescription='An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go.' 
                tryDemo = 'https://kite-demo.zerodha.com/dashboard' 
                learnMore ='https://zerodha.com/products/kite' 
                googlePlay = 'https://play.google.com/store/apps/details?id=com.zerodha.kite3' 
                appStore = 'https://apps.apple.com/in/app/zerodha-kite-trade-invest/id1449453802'
            />

            <p className="text-center mt-5 mb-5">
                Want to know more about our technology stack? Check out the Zerodha.tech
                blog.
            </p>
                
            <Universe />
            {/* <Footer /> */}
        </>
     );
}

export default ProductPage;
