import React, { useState, useEffect } from 'react'
import Logo from '../assets/simple-house-logo.png'
import { Link, useLocation } from 'react-router-dom'



const Navbar = () => {

const location = useLocation()
const [activePath, setActivePath] = useState(location.pathname)

  useEffect(() => {
    setActivePath(location.pathname)
  }, [location])


  return (
    <div className='w-full' name='/'>
      <div className='nav image relative h-[465px]'>
        <div className="navbar bottom-6 absolute flex justify-between items-center w-full">
          <div className="logo text-white flex items-center px-6 lg:px-12">
              <img className='lg:mx-2' src={Logo}  alt='/'/>
              <h1 className='lg:text-4xl text-2xl font-normal'>Restaurant House</h1>
          </div>
          <ul className='text-white flex gap-4 lg:gap-10 px-6 lg:px-12'>
              <li className={activePath === '/' ? 'md:text-[20px] hover:border-b-[1px] border-b-[1px]' : 'md:text-[20px] hover:border-b-[1px]'}><Link to='/'>Home</Link></li>
              <li className={activePath === '/about' ? 'md:text-[20px] hover:border-b-[1px] border-b-[1px]' : 'md:text-[20px] hover:border-b-[1px]'}><Link to='/about'>About</Link></li>
              <li className={activePath === '/contact' ? 'md:text-[20px] hover:border-b-[1px] border-b-[1px]' : 'md:text-[20px] hover:border-b-[1px]'}><Link to='/contact'>Contact</Link></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
