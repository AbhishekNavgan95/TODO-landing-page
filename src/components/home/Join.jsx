import React from 'react'
import join from '../../assets/join.png'
import Button from '../core/Button'

const Join = () => {
    return (
        <section className='pb-5 md:py-10 bg-white font-roboto'>
            <div className='max-w-contain mx-auto flex flex-col-reverse lg:flex-row justify-between items-center gap-x-5 gap-y-12 px-3'>
                <img loading='lazy' src={join} alt="join" className='max-w-[400px] md:max-w-[600px] max-h-[350px] object-cover' />
                <div className='w-full'>
                    <h5 className='capitalize text-center lg:text-start text-3xl md:text-5xl font-bold text-blue-900'>Start organizing your life today</h5>
                    <p className='text-lg w-[80%] lg:w-full mx-auto lgw-full my-5 text-center md:text-start'>Join us now and transform your productivity with our intuitive to-do list platform!</p>
                    <div className='space-x-3 flex w-full justify-center lg:justify-start'>
                        <Button variant='default' rounded={false}>Sign Up</Button>
                        <Button variant='outline' rounded={false}>Learn More</Button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Join