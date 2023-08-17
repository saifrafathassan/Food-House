import React from 'react'
import {FaTwitter, FaFacebook, FaInstagram} from 'react-icons/fa'
import Img1 from '../../assets/about-01.jpg'
import Img2 from '../../assets/about-02.jpg'
import Img3 from '../../assets/about-03.jpg'
import Img4 from '../../assets/about-04.jpg'

const About = () => {
  return (
    <div className='about bg-white w-full'>
        <div className="welcome flex flex-col text-center items-center py-12 px-12">
            <h1 className='lg:text-4xl text-2xl pb-10 font-medium'>About Food House</h1>
            <p className='text-[18px] pb-6 max-w-[600px] leading-8'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. culpa amet. Rerum, deserunt cupiditate dicta veritatis quasi eos nulla tempora reiciendis sint excepturi deleniti assumenda id quas amet?</p>
        </div>
        <div className='grid sm:grid-col-1 lg:grid-cols-2 gap-6 m-auto w-full py-20'>
            <div className="card flex flex-row gap-5 m-auto w-full h-full justify-center items-center">
                <div>
                    <img src={Img1} className='max-w-full h-auto' alt='/'/>
                </div>
                <div className='grid gap-5'>
                    <h1 className='text-[#319966] md:text-4xl leading-5'>Jennifer Soft</h1>
                    <h3 className='text-[#626364] text-[20px]'>Founder and CEO</h3>
                    <p className='text-[#626364] leading-7 max-w-[300px] text-[17px]'>Vivamus cursus leo nec sem feugiat sagittis. Duis ut feugiat odio, sit amet accumsan odio.</p>
                    <div className='icons flex md:gap-5'>
                        <FaFacebook size={40} className='text-[#626364] px-2 hover:bg-[#626364] hover:text-white transition-all cursor-pointer'/>
                        <FaTwitter size={40} className='text-[#626364] px-2 hover:bg-[#626364] hover:text-white transition-all cursor-pointer'/>
                        <FaInstagram size={40} className='text-[#626364] px-2 hover:bg-[#626364] hover:text-white transition-all cursor-pointer'/>
                    </div>
                </div>
            </div>
            <div className="card flex flex-row gap-5 m-auto w-full h-full justify-center items-center">
                <div>
                    <img src={Img2} className='max-w-full h-auto' alt='/'/>
                </div>
                <div className='grid gap-5'>
                    <h1 className='text-[#319966] md:text-4xl leading-5'>Daisy Walker</h1>
                    <h3 className='text-[#626364] text-[20px]'>Executive Chef</h3>
                    <p className='text-[#626364] leading-7 max-w-[300px] text-[17px]'>Praesent non vulputate elit. Orci varius natoque et magnis dis parturient, nascetur ridiculus mus.</p>
                    <div className='icons flex md:gap-5'>
                        <FaFacebook size={40} className='text-[#626364] px-2 hover:bg-[#626364] hover:text-white transition-all cursor-pointer'/>
                        <FaTwitter size={40} className='text-[#626364] px-2 hover:bg-[#626364] hover:text-white transition-all cursor-pointer'/>
                        <FaInstagram size={40} className='text-[#626364] px-2 hover:bg-[#626364] hover:text-white transition-all cursor-pointer'/>
                    </div>
                </div>
            </div>
            <div className="card flex flex-row gap-5 m-auto w-full h-full justify-center items-center">
                <div>
                    <img src={Img3} className='max-w-full h-auto' alt='/'/>
                </div>
                <div className='grid gap-5'>
                    <h1 className='text-[#319966] md:text-4xl leading-5'>Florence Nelson</h1>
                    <h3 className='text-[#626364] text-[20px]'>Kitchen Manager</h3>
                    <p className='text-[#626364] leading-7 max-w-[300px] text-[17px]'>Aenean sapien sem, ultricies sed vulputate et, auctor vel mauris. Integer sit amet diam eget est facilisis lacinia vitae.</p>
                    <div className='icons flex md:gap-5'>
                        <FaFacebook size={40} className='text-[#626364] px-2 hover:bg-[#626364] hover:text-white transition-all cursor-pointer'/>
                        <FaTwitter size={40} className='text-[#626364] px-2 hover:bg-[#626364] hover:text-white transition-all cursor-pointer'/>
                        <FaInstagram size={40} className='text-[#626364] px-2 hover:bg-[#626364] hover:text-white transition-all cursor-pointer'/>
                    </div>
                </div>
            </div>
            <div className="card flex flex-row gap-5 m-auto w-full h-full justify-center items-center">
                <div>
                    <img src={Img4} className='max-w-full h-auto' alt='/'/>
                </div>
                <div className='grid gap-5'>
                    <h1 className='text-[#319966] md:text-4xl leading-5'>Valentina Martin</h1>
                    <h3 className='text-[#626364] text-[20px]'>Culinary Director</h3>
                    <p className='text-[#626364] leading-7 max-w-[300px] text-[17px]'>Vivamus cursus leo nec sem feugiat sagittis. Duis ut feugiat odio, sit amet accumsan odio.</p>
                    <div className='icons flex md:gap-5'>
                        <FaFacebook size={40} className='text-[#626364] px-2 hover:bg-[#626364] hover:text-white transition-all cursor-pointer'/>
                        <FaTwitter size={40} className='text-[#626364] px-2 hover:bg-[#626364] hover:text-white transition-all cursor-pointer'/>
                        <FaInstagram size={40} className='text-[#626364] px-2 hover:bg-[#626364] hover:text-white transition-all cursor-pointer'/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About
