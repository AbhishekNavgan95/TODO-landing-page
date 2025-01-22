import React from 'react'
import Button from '../core/Button'
import { FaPlay } from "react-icons/fa";
import heroImage from '../../assets/heroSection.png'
import googleLogo from '../../assets/brand logos/google.png'
import { FaYoutube } from "react-icons/fa";
import { FaTwitch } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa";
import { RiContrastLine } from "react-icons/ri";
import { useSearchParams } from 'react-router-dom';

const Hero = () => {

    const [searchParams, setSearchParams] = useSearchParams();

    const setFormOpen = () => {
        setSearchParams({ form: 'open' })
    }

    return (
        <header className=' font-roboto py-8 bg-navy-100'>
            <div className='max-w-contain mx-auto space-y-12'>

                <div className='flex flex-col items-center gap-5'>
                    <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold text-center leading-tight w-[90%] sm:w-[70%] md:w-[50%] xl:w-[40%]'>Simplify Your Life with Our Todo App</h1>
                    <p className='w-[90%] sm:w-[70%] md:w-[50%] xl:w-[40%] text-blue-900 font-light text-center'>Stay organized and boost your productivity with our intuitive todo website. Experience a modern approach to task management that fits your lifestyle.</p>
                    <span className='flex items-center gap-5'>
                        <Button variant='default' rounded={true} onClick={setFormOpen}> Get started</Button>
                        <Button variant='outline' rounded={true} >Learn more</Button>
                    </span>
                </div>

                <div className='flex flex-col xl:flex-row items-stretch gap-y-3 md:gap-5 px-3'>

                    <div className='bg-pink-500 w-full cols-span-2 text-white p-10 md:p-12 rounded-3xl flex flex-col gap-7 md:gap-10'>
                        <span>
                            <h2 className='text-6xl xl:text-8xl text-gray-200 opacity-70'>Organize.</h2>
                            <h2 className='text-6xl xl:text-8xl text-gray-200'>Acheive.</h2>
                            <h2 className='text-6xl xl:text-8xl text-gray-200'>Relax.</h2>
                        </span>
                        <p className='text-lg font-light w-full md:w-[90%]'>Turn clutter into clarity, chaos into control, and dreams into done.bold visions into market success</p>
                        <span className='flex items-start gap-5 mt-7 md:mt-10'>
                            <Button variant='outline' style="text-sm font-semibold text-black py-3 px-5" rounded={true} >Get Started Today</Button>
                            <Button variant='default' style="bg-pink-400 text-sm font-semibold py-3 px-5" rounded={true}>Discover Features </Button>
                        </span>
                    </div>

                    <div className='w-full xl:w-[600px] min-h-[500px] relative cols-span-1 overflow-hidden text-white p-10 rounded-3xl bg-pink-500 flex flex-col justify-between' >
                        <img loading='lazy' src={heroImage} className='absolute inset-0 w-full h-full object-cover opacity-80' alt="hero section image" />
                        <span className='w-full h-[20%] bg-gradient-to-b from-transparent to-gray-200 absolute bottom-0 left-0'></span>
                        <div className='flex items-start justify-between relative z-2'>
                            <div>
                                <h3 className='text-4xl font-bold text-gray-200 opacity-70'>Your Tasks.</h3>
                                <h3 className='text-4xl font-bold'>Our Tools.</h3>
                            </div>
                            <p className='flex gap-1'>
                                <span className='w-[10px] aspect-square rounded-full bg-white border-2 border-white '></span>
                                <span className='w-[10px] aspect-square rounded-full  border-2 border-white '></span>
                                <span className='w-[10px] aspect-square rounded-full  border-2 border-white '></span>
                            </p>
                        </div>
                        <div className='flex justify-between items-end relative z-2'>
                            <span>
                                <p className='text-base text-white mb-2 font-bold flex items-center gap-2'> <RiContrastLine className='text-2xl' />logoipsum</p>
                                <h4 className='text-xl text-semibold text-black'>Freddie Halvorson</h4>
                                <p className='text-sm mt-1 text-black font-light'>Chief Productivity Enthusiast</p>
                            </span>
                            <span className='text-2xl p-5 bg-black rounded-full'>
                                <FaPlay />
                            </span>
                        </div>
                    </div>

                </div>

                <div className='flex flex-wrap w-[90%] md:w-full mx-auto justify-around items-center tracking-tighter select-none py-5 text-blue-900 gap-x-5 gap-y-5'>
                    <span className='flex items-center gap-2 text-3xl md:text-4xl font-semibold font-sans opacity-50'>Google</span>
                    <span className='flex items-center gap-2 text-3xl md:text-4xl font-bold font-sans opacity-50'>facebook</span>
                    <span className='flex items-center gap-2 text-3xl md:text-4xl font-bold font-sans opacity-50'><FaYoutube /> YouTube</span>
                    <span className='flex items-center gap-2 text-3xl md:text-4xl font-bold font-sans opacity-50'><FaPinterest /> Pinterest</span>
                    <span className='flex items-center gap-2 text-3xl md:text-4xl font-bold font-sans opacity-50'><FaTwitch /> twitch</span>
                </div>
            </div>
        </header>
    )
}

export default Hero