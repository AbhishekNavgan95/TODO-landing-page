import React from 'react'
import { LuAppWindow } from "react-icons/lu";
import { FaRegPaperPlane } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { GrNotes } from "react-icons/gr";


const Features = () => {

    const features = [
        {
            id: '01',
            icon: LuAppWindow,
            title: 'User-Friendly Interface',
            description: 'Our platform offers seamless task management to boost your efficiency.'
        },
        {
            id: '02',
            icon: FaRegPaperPlane,
            title: 'Collaborate & Share Effortlessly',
            description: 'Invite team members to work together and achieve your goals faster.'
        },
        {
            id: '03',
            icon: FaRegUser,
            title: 'Effortless Collaboration',
            description: 'Invite team members to work together and achieve your goals faster.'
        },
        {
            id: '04',
            icon: GrNotes,
            title: ' Seamless Access    ',
            description: 'Stay connected and manage your tasks on the go with ease.'
        },
    ]

    return (
        <main className='py-20 bg-white'>
            <section className='max-w-contain px-3 mx-auto'>
                <div className='flex flex-col gap-14'>
                    <h2 className='w-full md:w-[80%] xl:w-[65%] mx-auto text-4xl xl:text-[2.5rem] leading-[3rem] font-bold text-blue-900 text-center'>Transform Your Productivity with Our Innovative To-Do List Features</h2>

                    <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 place-items-center gap-5'>
                        {
                            features.map((feature) => {
                                const Icon = feature.icon
                                return (
                                    <div key={feature?.id} className='max-w-[500px] bg-gray-200 h-full px-8 py-10 flex flex-col relative justify-between rounded-lg'>
                                        <span className='text-5xl text-blue-900 absolute top-0 right-0 font-bold mx-3 py-5 font-roboto tracking-widest'>{feature?.id}</span>
                                        <span>
                                            <Icon className='mx-2 w-12 h-12 text-pink-500 mb-10' />
                                            <h3 className='text-xl text-blue-900 font-bold'>{feature?.title}</h3>
                                        </span>
                                        <div className='pb-10 pt-2' >
                                            <span className='space-x-3 flex mb-5'>
                                                <div className='min-w-[60px] h-2 rounded-lg  bg-pink-500'></div>
                                                <div className='min-w-[20px] h-2 rounded-lg  bg-pink-500'></div>
                                            </span>
                                            <p className='text-base font-semibold '>{feature?.description}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>

                </div>
            </section>
        </main>
    )
}

export default Features