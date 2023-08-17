import React from 'react'
import {FaTwitter, FaFacebook, FaInstagram, FaEnvelope, FaPhone} from 'react-icons/fa'

const Contactc = () => {
  return (
    <div className='contact bg-white w-full h-full py-12'>
        <div className="welcome flex flex-col text-center items-center py-12 px-12">
            <h1 className='lg:text-4xl text-2xl pb-10 font-medium'>Contact Page</h1>
            <p className='text-[18px] pb-6 max-w-[600px] leading-8'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. culpa amet. Rerum, deserunt cupiditate dicta veritatis quasi eos nulla tempora reiciendis sint excepturi deleniti assumenda id quas amet?</p>
        </div>
        <div className='w-full gap-40 flex flex-col lg:flex-row items-center justify-center pb-12'>
            <div>
                <form className='flex flex-col gap-6 w-[400px] lg:w-[330px]'>
                    <input className='border-b w-full h-[40px]' type="text" placeholder='Name'/>
                    <input className='border-b w-full h-[40px]' type="email" placeholder='Email Adress'/>
                    <textarea className='border-b w-full h-[120px]' name="message" placeholder='Message' ></textarea>
                    <button className='bg-[#319966] text-white hover:bg-slate-600 duration-300 w-32'>Send</button>
                </form>
            </div>
            <div className='lg:w-[300px] px-4 flex flex-col gap-6 h-full lg:items-start items-center'>
                <h1 className='text-[#319966] text-2xl'>Our Address</h1>
                <p className='lg:text-[17px] text-center lg:text-start leading-8'>180 Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus 10550</p>
                <div className='flex items-center gap-3'><FaPhone size={20} className='text-[#319966] cursor-pointer'/>080-090-0110</div>
                <div className='flex items-center gap-3'><FaEnvelope size={20} className='text-[#319966] cursor-pointer'/>info@company.co</div>
                <div className="icos flex gap-3">
                    <FaFacebook size={40} className='text-[#626364] px-2 hover:bg-[#626364] hover:text-white transition-all cursor-pointer'/>
                    <FaInstagram size={40} className='text-[#626364] px-2 hover:bg-[#626364] hover:text-white transition-all cursor-pointer'/>
                    <FaTwitter size={40} className='text-[#626364] px-2 hover:bg-[#626364] hover:text-white transition-all cursor-pointer'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contactc
