import React, { useState } from 'react'
import {FaAngleLeft} from 'react-icons/fa'

const Faq = () => {
  const [text1, setText1] = useState(false)
  const [text2, setText2] = useState(false)
  const [text3, setText3] = useState(false)
  const [text4, setText4] = useState(false)

  const handleClick1 = () => setText1(!text1)
  const handleClick2 = () => setText2(!text2)
  const handleClick3 = () => setText3(!text3)
  const handleClick4 = () => setText4(!text4)

  return (
    <div className='bg-white py-12 w-full h-full flex flex-col'>
        <div className="welcome flex flex-col text-center items-center py-12 px-12">
            <h1 className='lg:text-4xl text-2xl pb-10 font-medium'>FAQs</h1>
            <p className='text-[18px] pb-6 max-w-[600px] leading-8'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. culpa amet. Rerum, deserunt cupiditate dicta veritatis quasi eos nulla tempora reiciendis sint excepturi deleniti assumenda id quas amet?</p>
        </div>
        <div className='faq md:w-[600px] flex flex-col justify-center items-center mx-auto'>
            <button onClick={handleClick1} className='bg-white flex justify-between items-center'>1.Fusce eu lorem et dui #09C maximus varius?{text1 ? <FaAngleLeft className='-rotate-90 duration-300'/> : <FaAngleLeft className='duration-300'/>}</button>
            <div className={`div ${text1 ? 'show' : 'div'}`}>
                <p className='leading-8 text-center md:text-left text-[15px] md:text-[17px] text-[#626364]'>#666 Duis blandit purus vel nenenatis rutrum. Pellentesque pellentesque tindicunt lorem, ac egestas massa sollicitudin vel. Nam scelerisque vulputate quam mollis pretium. Morbi condimentum volutpat.</p>
            </div>
        </div>
        <div className='faq md:w-[600px] flex flex-col justify-center items-center mx-auto'>
            <button onClick={handleClick2} className='bg-white flex justify-between items-center'>2. Vestibulum #999 ante ipsum primis in faucibus orci?{text2 ? <FaAngleLeft className='-rotate-90 duration-300'/> : <FaAngleLeft className='duration-300'/>}</button>
            <div className={`div ${text2 ? 'show' : 'div'}`}>
                <p className='leading-8 text-center md:text-left text-[15px] md:text-[17px] text-[#626364]'>Mauris euismod odio at commodo rhoncus. Maecenas nec interdum purus, sed auctor est. Sed eleifend urna nec diam consectetur, a aliquet turpis facilisis. Integer est sapien, sagittis vel massa vel, interdum euismod erat. Aenean sollicitudin nisi neque, efficitur posuere urna rutrum porta</p>
            </div>
        </div>
        <div className='faq md:w-[600px] flex flex-col justify-center items-center mx-auto'>
            <button onClick={handleClick3} className='bg-white flex justify-between items-center'>3.Fusce eu lorem et dui #09C maximus varius?{text3 ? <FaAngleLeft className='-rotate-90 duration-300'/> : <FaAngleLeft className='duration-300'/>}</button>
            <div className={`div ${text3 ? 'show' : 'div'}`}>
                <p className='leading-8 text-center md:text-left text-[15px] md:text-[17px] text-[#626364]'>#666 Duis blandit purus vel nenenatis rutrum. Pellentesque pellentesque tindicunt lorem, ac egestas massa sollicitudin vel. Nam scelerisque vulputate quam mollis pretium. Morbi condimentum volutpat.</p>
            </div>
        </div>
        <div className='faq md:w-[600px] flex flex-col justify-center items-center mx-auto'>
            <button onClick={handleClick4} className='bg-white flex justify-between items-center'>4. Ut ac erat sit amet neque efficitur faucibus et in lectus?{text4 ? <FaAngleLeft className='-rotate-90 duration-300'/> : <FaAngleLeft className='duration-300'/>}</button>
            <div className={`div ${text4 ? 'show' : 'div'}`}>
                <p className='leading-8 text-center md:text-left text-[15px] md:text-[17px] text-[#626364]'>Vivamus viverra pretium ultricies. Praesent feugiat, sapien vitae blandit efficitur, sem nulla venenatis nunc, vel maximus ligula sem a sem. Pellentesque ligula ex, facilisis ac libero a, blandit ullamcorper enim.</p>
            </div>
        </div>
    </div>
  )
}

export default Faq
