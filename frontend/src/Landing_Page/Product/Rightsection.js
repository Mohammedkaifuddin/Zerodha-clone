import React from "react";

function RightSection({imageURL, productName, productDescription, learnMore}) 
{
  return <div className="container  ">
    <div className="row p-5">

      <div className="col-1 p-5"></div>

      <div className="col-6 p-5 mt-5">
        <h1>{productName}</h1>

        <p>{productDescription}</p>

        <div >
          {/* <a href={tryDemo}>Try Demo</a><i class="fa fa-long-arrow-right" aria-hidden="true"></i> */}
          <a href={learnMore} style={{marginLeft: "0px"}}>Learn More</a><i class="fa fa-long-arrow-right" aria-hidden="true"></i>
        </div>
      </div>
      <div className="col-5 p-1">
        <img src ={imageURL} alt='' className=""/>
      </div>
      {/* <div className="col-6"></div> */}
    </div>
  </div>
}

export default RightSection;