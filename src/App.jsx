import React from 'react'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import Program from './components/programs/Program'
import Title from './components/title/Title'
import About from './components/about/About'
import Product from './components/product/Product'
import Testimonial from './components/testimonial/Testimonial'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

const App = () => {
    return (
        <div>
            <Navbar/>
            <Hero/>
            <div className='container'>
                <Title subTitle='Our Program' title='What We Offer'/>
                <Program/>
                <About/>
                <Title subTitle='Gallery' title='Product Photo'/>
                <Product/>
                <Title subTitle='Testimonials' title='What Client Says'/>
                <Testimonial/>
                <Title subTitle='Contact Us' title='Get in Touch'/>
                <Contact/>
                <Footer/>
            </div>
        </div>
    )
}

export default App
