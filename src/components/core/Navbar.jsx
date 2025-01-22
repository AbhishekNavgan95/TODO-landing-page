import React, { useState } from 'react'
import logo from '../../assets/logo.png'
import Button from './Button'
import { IoClose } from "react-icons/io5";
import { BiMenuAltRight } from "react-icons/bi";

const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false)

    const navlinks = ["Home", "About Us", "Features", "More Options", "Contact"]

    const toggleMenu = () => {
        if(menuOpen) {
            setMenuOpen(false)
            document.body.style.overflow = 'auto'
        } else {
            setMenuOpen(true)
            document.body.style.overflow = 'hidden'
        }
    }

    return (
        <nav className=' py-3 px-8'>
            <div className='max-w-contain relative mx-auto flex justify-between items-center w-full'>
                <div className=''>
                    <img loading='lazy' className='w-[90px] object-cover' src={logo} alt="" />
                </div>
                <div className='hidden lg:flex items-center gap-8 font-semibold text-blue-900'>
                    {
                        navlinks.map((link, index) => (
                            <span key={index}>{link}</span>
                        ))
                    }
                    <span className='flex items-center gap-3'>
                        <Button variant='outline' rounded={false} >Log In</Button>
                        <Button variant='default' rounded={false}>Sign Up</Button>
                    </span>
                </div>
                <button className='lg:hidden text-3xl' onClick={toggleMenu}>
                    <BiMenuAltRight />
                </button>
                <div className={`${menuOpen ? 'flex' : 'hidden'} fixed top-0 left-0 bg-white shadow-md h-screen py-10 px-12 z-50 w-max`}>
                    <div className='flex flex-col items-center gap-5 font-semibold text-blue-900 w-max '>
                        <button onClick={toggleMenu} className='text-3xl self-end'>
                            <IoClose />
                        </button>

                        {
                            navlinks.map((link, index) => (
                                <span key={index}>{link}</span>
                            ))
                        }
                        <Button variant='outline' rounded={false} >Log In</Button>
                        <Button variant='default' rounded={false}>Sign Up</Button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar