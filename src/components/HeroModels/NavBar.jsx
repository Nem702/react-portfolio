import React from 'react'
import { navLinks } from '../../constants'
import { useEffect, useState } from 'react'

const NavBar = () => {
    const [scrolled, setScrolled] = React.useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10; // Change 10 to the scroll position you want to trigger the change
            setScrolled(true);
        };

        window.addEventListener('scroll', handleScroll);
        // Cleanup the event listener on component unmount
        // This prevents memory leaks and ensures that the event listener is removed when the component is no longer in use
        // This is a good practice in React to avoid performance issues
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

  return (
    // applying dynamic class based on scroll state
    <header className={`navbar ${scrolled ? 'scrolled' : 'not-scrolled'}`}>
        <div className="inner">
            <a className='logo' href="#hero">Logo</a>

            <nav className="desktop">
                <ul>
                    {navLinks.map(({ link, name }) => ( 
                        <li key={name} className='group'>
                            <a href={link}>
                                <span className='text'>{name}</span>
                                <span className='underline'/>
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
            <a href="#contact" className='contact-btn group'>
                <div className="inner">
                    <span>Contact me</span>
                </div>
            </a>
        </div>
    </header>
  )
}

export default NavBar