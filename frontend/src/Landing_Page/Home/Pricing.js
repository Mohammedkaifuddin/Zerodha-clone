import React from "react";

function Pricing() {
  return (
    <div className="container mb-5">
      <div className="row">
        <div className="col-4">
          <h1 className="mb-3 fs-2">Unbeatable pricing</h1>
          <p>
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a href="#see pricing" style={{ textDecoration: "none" }}>
            See Pricing{" "}
            <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </div>
        <div className="col-1"></div>
        <div className="col-6  mb-4 p-4 ">
          <div className="row text-center">
            <div className="col p-3">
              {/* <h1 className="mb-3">₹0</h1> */}
              <img src='https://zerodha.com/static/images/pricing-eq.svg' alt="Equity delivery and mutual funds" style={{width:"70%"}}/>
              <p>
                Free equity delivery and
                <br />
                direct mutual funds
              </p>
            </div>
            <div className="col p-4 ">
              {/* <h1 className="mb-3">₹20</h1> */}
              <img src ='media/other-trades-20.svg' alt="20" style={{width:"70%"}}/>
              <p>Intraday and F&O</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;