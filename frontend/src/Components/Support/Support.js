import SupportHeader from './SupportHeader'
import React, { useState, useEffect } from 'react'
import Sidebar from "../Dashboard/Sidebar";
import Grid from "react-loader-spinner";

const Support = () => {
    const [Loader, setLoader] = useState(true)
    useEffect(() => {
      setTimeout(() => {
        setLoader(false)
      }, 1500)
    }, [])
    return (
            <div className='support-container'>
                <div className="line2"></div>
              <Sidebar/>
              <SupportHeader/>
              <div className="talk-bubble tri-right round btm-left">
            <p className='support-text2'>Hello! I am your assistant for support. Are you experiencing any difficulties on using the system? Are you having issues or errors
                in navigating the websites? You can send all your tickets through here! We will happily assist you with all our skills.
            </p>
          </div>
            <div>
                <div className="SupportLine1">
                </div>

                <form>
                    <h2 className = 'h2-feedback'>Send your feedbacks!</h2>
                  <div>
                  
                    <input type="email" className="email-area" aria-describedby="emailHelp" placeholder = 'Enter your Email Address'/>
                  </div>
                  <div>
                    
                    <textarea className="comment-area" rows="5" placeholder ='Type your message here, criticism, feedbacks, praises, issues, difficulties or anything that you think'/>
                  </div>
                  <button type="submit" className="submit-btn">Submit</button>
                </form>
              </div>
            <div className='contact-us'>
              <p className='support-text'>You can contact us through this emails, we will happily respond to you</p>
              <ul>EIS@company.com</ul>
              <ul>HR@company.com</ul>
              <ul>Support@company.com</ul>
            </div>
            <div className='contact-us2'>
              <p className='support-text'>You can also contact us through this numbers, we will happily respond to you</p>
              <ul>(63)9 0429 43432</ul>
              <ul>(63)9 4375 95435</ul>
              <ul>(0444) 754 9342</ul>
            </div>
            <div style={{ minHeight: '120%', minWidth: '100%', backgroundColor: '#e5e5e5', display: Loader === true ? 'flex' : 'none', 
                          justifyContent: 'center', alignItems:'center', position:'absolute', top: 0, }}>
            <Grid
              type="Puff"
              color="#0abab5"
              height={100}
              width={100}
              timeout={1500}
            />
          </div>
        </div>
        
    )
}

export default Support
