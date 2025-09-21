import React from 'react'

const Button = ({ children }) => {
    return (
        <>
            <button
                class="relative flex items-center justify-center px-2 py-1.5 text-[17px] font-semibold 
         text-[rgb(40,144,241)] border border-[rgb(40,144,241)] rounded-full 
         bg-transparent cursor-pointer overflow-hidden outline-none 
         transition-colors duration-300 delay-100 hover:text-white
         before:content-[''] before:absolute before:inset-0 before:m-auto 
         before:rounded-full before:block before:w-[20em] before:h-[20em] 
         before:-left-20 before:z-[-1] before:transition-[box-shadow] 
         before:duration-500 hover:before:[box-shadow:inset_0_0_0_10em_rgb(40,144,241)]"
            >
                <span class="mx-4">{children}</span>
            </button>

        </>
    )
}

export default Button
