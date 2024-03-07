import React, { useRef } from 'react'
import './Testimonial.css'
import next_icon from '../../assets/image/next-icon.png'
import back_icon from '../../assets/image/back-icon.png'
import user_1 from '../../assets/image/user-1.png'
import user_2 from '../../assets/image/user-2.png'
import user_3 from '../../assets/image/user-3.png'
import user_4 from '../../assets/image/user-4.png'

const Testimonial = () => {
    const slider = useRef();
    let tx = 0;

    const slideForward = ()=>{
        if(tx > -50){
            tx -= 25;
        } 
        slider.current.style.transform = `translateX(${tx}%)`;
    }
    const slideBackward = ()=>{
        if(tx < 0){
            tx += 25;
        } 
        slider.current.style.transform = `translateX(${tx}%)`;
    }

    return (
        <div className='testimonials'>
            <img src={next_icon} alt='' className='next-btn' onClick={slideForward}/>
            <img src={back_icon} alt='' className='back-btn' onClick={slideBackward}/>
            <div className='slider'>
                <ul ref={slider}>
                    <li>
                        <div className='slide'>
                            <div className='user-info'>
                                <img src={user_1} alt='' />
                                <div>
                                    <h3>Neha Singh</h3>
                                    <span>Oracle, Bengaluru</span>
                                </div>
                            </div>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>
                    </li>
                    <li>
                        <div className='slide'>
                            <div className='user-info'>
                                <img src={user_2} alt='' />
                                <div>
                                    <h3>Aniket Singh</h3>
                                    <span>MindTree(L&T), New Delhi</span>
                                </div>
                            </div>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>
                    </li>
                    <li>
                        <div className='slide'>
                            <div className='user-info'>
                                <img src={user_3} alt='' />
                                <div>
                                    <h3>Sneha Rai</h3>
                                    <span>Infosys, Pune</span>
                                </div>
                            </div>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>
                    </li>
                    <li>
                        <div className='slide'>
                            <div className='user-info'>
                                <img src={user_4} alt='' />
                                <div>
                                    <h3>Pradeep Singh</h3>
                                    <span>SI-UK, New Delhi</span>
                                </div>
                            </div>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Testimonial
