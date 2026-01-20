import React from 'react'
import { useState } from 'react';

function Team() {
    const [showBio, setShowBio] = useState(false);

    return ( 
        <div className="container">
            <div className="row p-3 mt-5 border-top">
                <h1 className="text-center ">People</h1>
            </div>

            <div className="row p-3 text-muted" style={{ lineHeight: "1.8", fontSize: "1.2em" }}>
                <div className="col-6 p-3 text-center">
                    <img src="media/nithin-kamath.jpg" style={{ borderRadius: "100%", width: "50%" }} />
                    <h4 className="mt-5">Nithin Kamath</h4>
                    <h6>Founder, CEO</h6>
                </div>
                <div className="col-6 p-3">
                    <p>
                        Nithin bootstrapped and founded Zerodha in 2010 to overcome the
                        hurdles he faced during his decade long stint as a trader. Today,
                        Zerodha has changed the landscape of the Indian broking industry.
                    </p>
                    <p>
                        He is a member of the SEBI Secondary Market Advisory Committee
                        (SMAC) and the Market Data Advisory Committee (MDAC).
                    </p>
                    <p>Playing basketball is his zen.</p>
                    <p>
                        Connect on <a target="_blank" rel="noreferrer" href="https://nithinkamath.me/">Homepage</a> / <a target="_blank" rel="noreferrer" href="https://tradingqna.com/u/nithin/summary">TradingQnA</a> /{" "}
                        <a target="_blank" rel="noreferrer" href="https://x.com/Nithin0dha">Twitter</a>
                    </p>
                </div>
            </div>

            <div className='row p-3 mt-5'>
                <div className='col-4 text-center'>
                    <img src='media/Nikhil.jpg' alt='nikhil' style={{ borderRadius: "100%", width: "50%" }}/>
                    <h5 className='mt-5'>Nikhil Kamath</h5>
                    <p className='text-grey'>Co-founder, CEO</p>
                    <p>
                        <a>
                            Bio
                            <i class="fa fa-angle-up" aria-hidden="true"></i>
                        </a>
                    </p>
                    <div className='team-featured-desc text-left' style={{display: 'block'}}>
                        <p>
                            Nikhil is an astute and experienced investor, and he heads financial planning at Zerodha. An avid reader, he always appreciates a good game of chess.
                        </p>
                    </div>
                </div>

                <div className='col-4 text-center'>
                    <img src='media/Kailash.jpg' alt='nikhil' style={{ borderRadius: "100%", width: "50%" }}/>
                    <h5 className='mt-5'>Dr. Kailash Nadh</h5>
                    <p className='text-grey'>CTO</p>
                    <p>
                        <a>
                            Bio
                            <i class="fa fa-angle-up" aria-hidden="true"></i>
                        </a>
                    </p>
                    <div className='team-featured-desc text-left' style={{display: 'block'}}>
                        <p>
                            Kailash has a PhD in Artificial Intelligence & Computational Linguistics, and is the brain behind all our technology and products. He has been a developer from his adolescence and continues to write code every day.
                        </p>
                    </div>
                </div>

                <div className="col-4 text-center">
                    <img src="media/Venu.jpg" alt="Venu" style={{ borderRadius: "100%", width: "50%" }} />

                    <h5 className="mt-5">Venu Madhav</h5>
                    <p className="text-grey">COO</p>

                    <p>
                        <a href="#!" onClick={() => setShowBio(!showBio)} style={{ cursor: "pointer" }}>
                            Bio{" "}
                            <i className={`fa ${showBio ? "fa-angle-up" : "fa-angle-down"}`} aria-hidden="true"></i>
                        </a>
                    </p>

                {showBio && (
                <div className="team-featured-desc text-left">
                    <p>
                        Venu is the backbone of Zerodha taking care of operations and ensuring
                        that we are compliant to rules and regulations. He has over a dozen
                        certifications in financial markets and is also proficient in
                        technical analysis. Workouts, cycling, and adventuring is what he
                        does outside of Zerodha.
                    </p>
                </div>
                )}
            </div>


            </div>
        </div>  
     );
}

export default Team;