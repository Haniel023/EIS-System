
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
    <div className='suppBackground'>
      <SupportHeader/>
      <div className="talk-bubble tri-right round btm-left">
  <div class="talktext">
    <p>Hello! I am your assistant for support. Are you experiencing any difficulties on using the system? Are you having issues or errors
        in navigating the websites? You can send all your tickets through here! We will happily assist you with all our skills.
    </p>
  </div>
    </div>
    <div className="">
        <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
            <h2>Send your feedbacks!</h2>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control" aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea className="form-control" rows="5" value={this.state.message} onChange={this.onMessageChange.bind(this)} />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    <div className='contact-us'>
      <p>You can contact us through this emails, we will happily respond to you</p>
      <ul>EIS@company.com</ul>
      <ul>HR@company.com</ul>
      <ul>Support@company.com</ul>
    </div>
    <div className='contact-us2'>
      <p>You can also contact us through this numbers, we will happily respond to you</p>
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
