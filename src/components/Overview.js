import * as React from 'react';
import './Overview.css';
import home1 from '../image/home1.jpeg'


const Overview = () => {
    return (
        <div className='mainoverviewcontainer'>
            <h3>Our Features</h3>
            <h1>Simple Overview Bhoomi The Real State</h1>
            <div className='row overviewcontainer'>
                <div className='col-lg-7 overviewcontainerImage'>
                    <img src={home1} width="750px" height="500px"/>
                </div>
                <div className='col-lg-5 overviewcontainerdetails'>
                    <div className='first-container'>
                        <div>
                          <img src={home1}  width="100px" height="100px"/>
                        </div>
                        <div className='first-container-details'>
                          <div>
                            <h3>Choose A Category</h3>
                          </div>
                          <div>
                            <p>Hello</p>
                          </div>
                        </div>
                    </div>
                    <div className='first-container'>
                        <div>
                          <img src={home1}  width="100px" height="100px"/>
                        </div>
                        <div className='first-container-details'>
                          <div>
                            <h3>Find Location</h3>
                          </div>
                          <div>
                            <p>Lorem ipsum dolor sit amet, qui assum oblique praesent te. Quo ei erant essent scaevola, est ut clita dolorem, ei est mazim fuisset scribentur</p>
                          </div>
                        </div>
                    </div>
                    <div className='first-container'>
                        <div>
                          <img src={home1}  width="100px" height="100px"/>
                        </div>
                        <div className='first-container-details'>
                          <div>
                            <h3>Contact A Few Owners</h3>
                          </div>
                          <div>
                            <p>Hello</p>
                          </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        
    )
}

export default Overview;