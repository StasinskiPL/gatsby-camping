import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import Slider from './Slider'

const Layout = ({children}) => {
    const [openSlider,setOpenSlider] = React.useState(false);
    return (
        <main>
            <Navbar setOpenSlider={setOpenSlider}/>
            <Slider openSlider={openSlider} setOpenSlider={setOpenSlider}/>
            {children}
            <Footer/>            
        </main>
    )
}

export default Layout
