import React from "react";

function LeftSection({
  imageURL,
  productName, 
  productDescription, 
  tryDemo, 
  learnMore, 
  googlePlay, 
  appStore
}) {
  return <div className="container  ">
    <div className="row p-5">

      <div className="col-5 p-1">
        <img src ={imageURL} alt='#product-kite' className=""/>
      </div>

      <div className="col-1 p-5"></div>

      <div className="col-6 p-5 mt-5">
        <h1>{productName}</h1>

        <p>{productDescription}</p>

        <div >
          <a href={tryDemo}>Try Demo</a><i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          <a href={learnMore} style={{marginLeft: "40px"}}>Learn More</a><i class="fa fa-long-arrow-right" aria-hidden="true"></i>
        </div>
        
        <div className="p-3">
          <a href={googlePlay} style={{margin:'-20px'}}><img src='media/google-play-badge.svg' alt='#google-play-logo'/></a>
          <a href={appStore} style={{marginLeft: "40px"}}><img src='media/appstore-badge.svg' alt='#app-store-logo'/></a>
        </div>

      </div>
      {/* <div className="col-6"></div> */}
    </div>
  </div>
}

export default LeftSection;