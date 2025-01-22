import React from 'react'
import logo from '../../assets/logo.png'
import Button from './Button'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";


const Footer = () => {
    return (

        <footer className='py-10 mt-20 bg-white font-roboto'>
            <div className='max-w-contain mx-auto px-3'>

                <div className='flex flex-col lg:flex-row items-center lg:items-start gap-5 justify-between'>
                    <div className='flex flex-col items-center lg:items-start gap-5'>
                        <img loading='lazy' src={logo} className='w-[120px] lg:w-[100px] pb-5' alt="logo" />
                        <p className='text-sm my-5 w-[80%] md:w-full text-center lg:text-start'>Subscribe to our newsletter for the latest features and updates delivered to you.</p>
                        <span className='space-x-3 flex'>
                            <input type="text" className='border border-gray-800 py-2 px-2 w-full max-w-[400px]' placeholder='Your email here...' />
                            <Button rounded={false}>Join</Button>
                        </span>
                        <p className='text-xs pt-3'>By subscribing, you consent to our Privacy Policy and agree to receive updates.</p>
                    </div>

                    <div className='flex flex-wrap flex-row justify-evenly gap-x-5 gap-y-10 items-center w-full '>
                        <ul className='text-xs flex flex-col justify-center gap-4 text-center lg:text-start min-w-[300px] lg:min-w-0'>
                            <p className='font-bold mb-2'>Useful links</p>
                            <li>Home Page</li>
                            <li>About Us</li>
                            <li>Contact Us</li>
                            <li>Blog Posts</li>
                            <li>FAQs</li>
                        </ul>
                        <ul className='text-xs flex flex-col justify-center gap-4 text-center lg:text-start min-w-[300px] lg:min-w-0'>
                            <p className='font-bold mb-2'>Resources</p>
                            <li>Help Center</li>
                            <li>User Guide</li>
                            <li>Community Forum</li>
                            <li>Feedback</li>
                            <li>Support</li>
                        </ul>
                        <ul className='text-xs flex flex-col justify-center  gap-4 text-center lg:text-start min-w-[300px] lg:min-w-0'>
                            <p className='font-bold mb-2'>Connect With Us</p>
                            <li className='flex items-center gap-3 justify-center lg:justify-start'> <span className='text-base text-pink-500'><FaFacebook /> </span>Facebook</li>
                            <li className='flex items-center gap-3 justify-center lg:justify-start'> <span className='text-base text-pink-500'>< FaInstagram /> </span>Instagram</li>
                            <li className='flex items-center gap-3 justify-center lg:justify-start'> <span className='text-base text-pink-500'><FaXTwitter /> </span> X</li>
                            <li className='flex items-center gap-3 justify-center lg:justify-start'> <span className='text-base text-pink-500'><FaLinkedin /></span> LinkedIn</li>
                            <li className='flex items-center gap-3 justify-center lg:justify-start'> <span className='text-base text-pink-500'><FaYoutube /></span> YouTube</li>
                        </ul>
                    </div>
                </div>
                <hr className='my-10 h-[2px] bg-gray-500' />

                <div className='flex justify-between items-center text-sm pb-5 md:pb-10 flex-col-reverse md:flex-row gap-y-5'> 
                    <p>© 2024 Osumare. All rights reserved.</p>
                    <span className='flex gap-10 items-center underline'>
                        <a>Privacy Policy</a>
                        <a>Terms of Service</a>
                        <a>Cookie Settings</a>
                    </span>
                </div>
            </div>

        </footer>
    )
}

export default Footer