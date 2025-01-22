import React, { useState } from 'react'
import { testimonials } from '../../data/staticData'
import Button from '../core/Button'
import { MdKeyboardArrowLeft } from "react-icons/md";

const Testimonials = () => {

    const [testimonial, setTestimonial] = useState(testimonials[0])

    const handleNext = () => {
        const nextIndex = (testimonials.indexOf(testimonial) + 1) % testimonials.length;
        setTestimonial(testimonials[nextIndex]);
    };
    
    const handlePrev = () => {
        const prevIndex =(testimonials.indexOf(testimonial) - 1 + testimonials.length) % testimonials.length;

        setTestimonial(testimonials[prevIndex]);
    };

    return (
        <section className='md:pt-20 bg-white'>
            <div className='max-w-contain mx-auto px-3'>

                <div>
                    <h2 className='text-3xl md:text-5xl font-bold text-blue-900 text-center lg:text-start'>Customer Testimonials</h2>
                    <p className='text-lg font-semibold text-blue-900 mt-10 text-center lg:text-start'> This tool has tranformed my productivity and organization!</p>
                </div>

                <div className='lg:my-28 relative lg:pl-10 '>
                    <div className='absolute hidden lg:block w-[40%] h-[120%] border-[15px] border-pink-500 left-0 top-[50%] translate-y-[-50%]'></div>
                    <div className='relative px-3 md:px-20 py-20 flex flex-col-reverse lg:flex-row justify-between items-center gap-10 bg-white'>

                        <div className='bg-white flex flex-col gap-10 w-[90%] lg:w-[60%] '>
                            <h5 className='text-2xl md:text-4xl leading-snug font-bold '>{testimonial?.comment}</h5>
                            <div className='flex items-center gap-14'>
                                {/* design */}
                                <span className='relative'>
                                    <div className='w-[30px] h-[30px] bg-pink-500'></div>
                                    <div className='absolute top-[50%] left-[50%] w-[50px] bg-black h-[1px]'></div>
                                </span>

                                <span>
                                    <h6 className="text-xl font-bold">{testimonial?.name}</h6>
                                    <p className='text-lg font-semibold opacity-70'>{testimonial?.designation}, {testimonial?.company}</p>
                                </span>
                            </div>

                            <span className='flex gap-3'>
                                <button onClick={handlePrev} className='p-2 text-2xl  border-2 border-pink-500 rounded-full'>< MdKeyboardArrowLeft /></button>
                                <button onClick={handleNext} className='p-2 text-2xl border-2 bg-pink-500 text-white  border-pink-500 rounded-full'>< MdKeyboardArrowLeft className='rotate-180' /> </button>
                            </span>
                        </div>

                        <div className='relative lg:min-w-[450px] h-[400px]'>
                            <img loading='lazy' className='relative z-[2] aspect-square mx-auto md:h-[350px] overflow-hidden border-[10px] border-white object-cover max-h-[400px]' src={testimonial?.img} alt="" />
                            <div className='absolute hidden lg:block lg:w-[355px] bg-pink-500 h-[380px] md:left-[60px] top-[-15px]'></div>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    )
}

export default Testimonials