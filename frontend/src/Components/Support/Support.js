
import SupportHeader from './SupportHeader'
import React from 'react'

class Support extends React.Component {
  constructor(props) {
    super(props);
    this.state = {   
      email: '',
      message: ''
    }
  }

 render() {
  return (
    <div className='support-container'>
      <SupportHeader/>
      <div className="talk-bubble tri-right round btm-left">
    <p className='support-text2'>Hello! I am your assistant for support. Are you experiencing any difficulties on using the system? Are you having issues or errors
        in navigating the websites? You can send all your tickets through here! We will happily assist you with all our skills.
    </p>
  </div>
    <div>
        <form onSubmit={this.handleSubmit.bind(this)} method="POST">
            <h2 className = 'h2-feedback'>Send your feedbacks!</h2>
          <div>
          
            <input type="email" className="email-area" aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange.bind(this)} 
            placeholder = 'Enter your Email Address'/>
          </div>
          <div>
            
            <textarea className="comment-area" rows="5" value={this.state.message} onChange={this.onMessageChange.bind(this)} 
            placeholder ='Type your message here, criticism, feedbacks, praises, issues, difficulties or anything that you think'/>
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
</div>
  )
}



onEmailChange(event) {
  this.setState({email: event.target.value})
}

onMessageChange(event) {
  this.setState({message: event.target.value})
}

handleSubmit(event) {
}
}
export default Support
