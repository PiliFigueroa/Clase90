import React from 'react';
import { Navbar } from '../Navbar/Navbar'
import { Footer } from '../Footer/Footer'

const Layout = ({ children, showNavbar, showFooter }) => {
    console.log(showNavbar, showFooter)
    return(
        <>
            {showNavbar && <Navbar />}
            { children }
            {showFooter && <Footer />}
        </>
    )
}

export { Layout }