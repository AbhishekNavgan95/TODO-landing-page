import React from 'react'

const Button = ({ variant = 'default', rounded = true, type, children, onClick, style, ...props }) => {

    return (
        <button
            className={`${style} ${rounded? 'rounded-full': 'rounded-md'} ${variant === 'outline' ? 'border-2 border-pink-500 font-semibold bg-white text-pink-500' : 'border border-pink-500 bg-pink-500 text-white '} px-8 md:px-10  text-xs md:text-base py-2 `}
            onClick={onClick}
            type={type}
            {...props}
        >
            {children}
        </button>
    )
}

export default Button