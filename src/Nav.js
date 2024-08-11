import React, { useEffect, useState } from 'react'
import "./Nav.css"

const Nav = () => {

    const [show, setShow] = useState(false);

    const transitionNavbar = () => {
        if (window.scrollY > 100) {
            setShow(true);
        } else {
            setShow(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', transitionNavbar)
        return () => window.removeEventListener("scroll", transitionNavbar);
    }, [])



    return (
        <>
            <div className={`nav ${show && 'nav-black'}`}>
                <div className="nav-content">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="" className="nav-logo" />
                    <img src="https://i.pinimg.com/originals/2b/90/0d/2b900d5612554cd0b5edf7d8e848c3ea.png" alt="" className="nav-avatar" />

                </div>
            </div>
        </>
    )
}

export default Nav
