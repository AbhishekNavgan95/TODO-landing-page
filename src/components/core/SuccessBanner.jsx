import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import { FaHeart } from "react-icons/fa";

const SuccessBanner = () => {

    const [searchParams, setSearchParams] = useSearchParams();
    const [showBanner, setShowBanner] = useState(false);

    const closeBanner = () => {
        setShowBanner(false)
        setSearchParams({})
    }

    useEffect(() => {
        if (searchParams.get("success") === "true") {
            setShowBanner(true)
        }
    }, [searchParams])

    if (!showBanner) return null

    return (
        <div className='fixed inset-0 bg-black/50 flex justify-center items-center z-[2]'>
            <div className='w-[450px] p-8 bg-white rounded-xl flex flex-col items-center gap-3'>
                <FaHeart className='text-6xl text-pink-500' />
                <h2 className='font-semibold text-xl'>Thank you for connect with us.</h2>
                <p className='text-light '>Our team will contacting with you soon</p>
                <button onClick={closeBanner} className='bg-pink-500 text-white rounded-md w-[300px] py-2'>Done</button>
            </div>
        </div>
    )
}

export default SuccessBanner