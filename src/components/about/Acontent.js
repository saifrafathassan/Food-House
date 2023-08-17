import React from 'react'
import { Parallax } from 'react-scroll-parallax';
import {FaCocktail, FaEnvira, FaPepperHot} from 'react-icons/fa'
import Imga from '../../assets/about-05.jpg'
import Imgf from '../../assets/about-06.jpg'
import {useNavigate} from 'react-router-dom'

const Acontent = () => {
    
const navigate = useNavigate();
  const handleClick = () => {
    navigate('/');
    window.scrollTo(0, 0);
  }

  return (
    <div className='bg-white w-full h-full flex justify-center flex-col items-center'>
        <div className="imgp">
            <Parallax className='overflow-clip' translateY={['-800px', '700px']}><img src={Imga} alt="" /></Parallax>
        </div>
        <div className='contenta py-32 flex flex-col lg:flex-row justify-center items-center w-full h-full gap-12'>
            <div className="con flex flex-col justify-center items-center">
                <div className="icon"><FaPepperHot size={50} className='text-[#9f9c9c]'/></div>
                <p className='py-8 leading-8 lg:w-[300px] text-center'>Donec sed orci fermentum, convallis lacus id, tempus elit. Sed eu neque accumsan, porttitor arcu a, interdum est. Donec in risus eu ante.</p>
                <button onClick={handleClick} className='bg-[#2D99CC] text-white hover:bg-slate-500 duration-300'>Read More</button>
                
            </div>
            <div className="con flex flex-col justify-center items-center">
                <div className="icon"><FaEnvira size={50} className='text-[#9f9c9c]'/></div>
                <p className='py-8 leading-8 lg:w-[300px] text-center'>Donec sed orci fermentum, convallis lacus id, tempus elit. Sed eu neque accumsan, porttitor arcu a, interdum est. Donec in risus eu ante.</p>
                <button onClick={handleClick} className='bg-[#319966] text-white hover:bg-slate-500 duration-300'>Read More</button>
            </div>
            <div className="con flex flex-col justify-center items-center">
                <div className="icon"><FaCocktail size={50} className='text-[#9f9c9c]'/></div>
                <p className='py-8 leading-8 lg:w-[300px] text-center'>Donec sed orci fermentum, convallis lacus id, tempus elit. Sed eu neque accumsan, porttitor arcu a, interdum est. Donec in risus eu ante.</p>
                <button onClick={handleClick} className='bg-[#993332] text-white hover:bg-slate-500 duration-300'>Read More</button>
            </div>
        </div>
        {/* footer */}
        <div className='flex flex-col lg:flex-row items-center justify-center gap-20'>
            <div>
                <img src={Imgf} alt="" className='w-full h-full'/>
            </div>
            <div className='flex flex-col gap-16 justify-center text-center'>
                <h1 className='text-3xl'>History of our restaurant</h1>
                <p className='lg:w-[500px] leading-8'>Sed ligula risus, interdum aliquet imperdiet sit amet, auctor sit amet justo. Maecenas posuere lorem id augue interdum vehicula. Praesent sed leo eget libero ultricies congue.</p>
            </div>
        </div>
    </div>
  )
}

export default Acontent
