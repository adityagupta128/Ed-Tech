import React from 'react'
import './Contact.css'
import message_icon from '../../assets/message_icon.png'
import call_icon from '../../assets/call.png'
import location_icon from '../../assets/location.png'
import mail_icon from '../../assets/mail.png'

const Contact = () => {

        const [result, setResult] = React.useState("");
      
        const onSubmit = async (event) => {
          event.preventDefault();
          setResult("Sending....");
          const formData = new FormData(event.target);
      
          formData.append("access_key", "779876de-ce6a-46f9-9bb9-09f600192082");
      
          const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
          });
      
          const data = await response.json();
      
          if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
          } else {
            console.log("Error", data);
            setResult(data.message);
          }
        };

  return (
    <div className="contact">
        <div className="contact-col">
            <h3>Send us a message <img src={message_icon} alt="" /></h3>
            <p>Feel free to reach out through contact form or find our contact information below. Your feedback, questions and suggestions are important to us as we strive to provide exceptional services to our students.</p>
            <ul>
                <li><img src={mail_icon} alt="" />Contact@Academix.in</li>
                <li><img src={call_icon} alt="" />+91 123-456-7890</li>
                <li><img src={location_icon} alt="" />Shiva Enclave, Paschim Vihar <br />New Delhi, India</li>
            </ul>
        </div>
        <div className="contact-col">
            <form onSubmit={onSubmit}>
                <label>Your Name</label>
                <input type="text" name='name' placeholder='Enter your name' required />
                <label>Phone Number</label>
                <input type="tel" name='phone' placeholder='Enter your phone number' required />
                <label>Write your messages here</label>
                <textarea name="message" rows={6} placeholder='Enter your message' required></textarea>
                <button type='submit' className='btn dark-btn'>Submit Now</button>
            </form>
            <span>{result}</span>
        </div>
    </div>
  )
}

export default Contact