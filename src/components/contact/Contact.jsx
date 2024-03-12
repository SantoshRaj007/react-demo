import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/image/msg-icon.png'
import mail_icon from '../../assets/image/mail-icon.png'
import phone_icon from '../../assets/image/phone-icon.png'
import location_icon from '../../assets/image/location-icon.png'
import white_arrow from '../../assets/image/white-arrow.png'

const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "796062b6-28e4-41b1-8b19-28d90471c57c");

        const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
        }).then((response) => response.json());

        // const data = await response.json();

        if (response.success) {
            console.log("Success", response);
            setResult(response.message);
            event.target.reset();
        } else {
        console.log("Error", response);
        setResult(response.message);
        }
    };
    return (
        <div className='contact'>
            <div className='contact-col'>
                <h3>Send us a message <img src={msg_icon} alt='' /></h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <ul>
                    <li><img src={mail_icon} alt='' /> Contact@santosh.com</li>
                    <li><img src={phone_icon} alt='' /> +91-981-216-4562</li>
                    <li><img src={location_icon} alt='' /> 6703-Mayur Vihar, New Delhi<br/> Delhi 110091, India</li>
                </ul>
            </div>
            <div className='contact-col'>
                <form onSubmit={onSubmit}>
                    <label>Your Name</label>
                    <input type='text' name='name' placeholder='Enter Your Name' required />

                    <label>Phone Number</label>
                    <input type='tel' name='phone' placeholder='Enter Your Mobile Number' required />

                    <label>Write your message here</label>
                    <textarea name='message' rows='6' placeholder='Enter your message' required></textarea>

                    <button type='submit' className='btn dark-btn'>Submit now <img src={white_arrow} alt='' /></button>
                </form>
                <span>{result}</span>
            </div>
        </div>
    )
}

export default Contact
