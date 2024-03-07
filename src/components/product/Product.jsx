import React from 'react'
import './Product.css'
import gallery_1 from '../../assets/image/gallery-1.png'
import gallery_2 from '../../assets/image/gallery-2.png'
import gallery_3 from '../../assets/image/gallery-3.png'
import gallery_4 from '../../assets/image/gallery-4.png'
import white_arrow from '../../assets/image/white-arrow.png'
 
const Product = () => {
    return (
        <div className='product'>
            <div className='gallery'>
                <img src={gallery_1} alt='' className=''/>
                <img src={gallery_2} alt='' className=''/>
                <img src={gallery_3} alt='' className=''/>
                <img src={gallery_4} alt='' className=''/>
            </div>
            <button className='btn dark-btn'>See more here <img src={white_arrow} /></button>
        </div>
    )
}

export default Product
