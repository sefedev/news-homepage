import React from 'react'

const Navigation = () => {
    return (
        <nav className='w-2/5 flex justify-between text-sm items-end'>
        <a href="#" className='hover:text-softRed transition duration-150' alt="link">Home</a>
        <a href="#" className='hover:text-softRed transition duration-150' alt="link">New</a>
        <a href="#" className='hover:text-softRed transition duration-150' alt="link">Popular</a>
        <a href="#" className='hover:text-softRed transition duration-150' alt="link">Trending</a>
        <a href="#" className='hover:text-softRed transition duration-150' alt="link">Categories</a>
      </nav>
    )
}

export default Navigation