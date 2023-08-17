import React from 'react'
import fImg from '../assets/img-01.jpg'

const Content = () => {
  return (
    <div className='footer bg-white'>
        <div className='flex flex-col lg:flex-row justify-center gap-8 w-full py-32 px-5'>
            <img src={fImg} alt='/' />
            <div className='max-w-[500px] grid gap-8 '>
                <h1 className='md:text-2xl font-medium'>Maecenas nulla neque</h1>
                <p className='leading-7 md:text-[18px]'>Lorem ipsum dolor adipisicing elit. Voluptatem, animi ut. Nostrum, natus tempora quisquam harum error ipsa quidem ab eveniet! Delectus, nostrum et voluptatibus inventore ipsam veritatis! Voluptatibus, facilis?</p>
                <button className='border border-[#ccc] w-[150px] hover:bg-[#ccc] hover:text-white duration-300'>Read More</button>
            </div>
        </div>
    </div>
  )
}

export default Content
