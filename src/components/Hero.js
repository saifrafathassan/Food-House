import React, { useState } from 'react'
import {data} from '../data/data'

const Hero = () => {
const [foods, setFoods] = useState(data)

const fliterType = (category) => {
  setFoods(
    data.filter((item) => {
      return item.category === category
    })
  )
}

  return (
    <div className='bg-white h-full w-full '>

        <div className="welcome flex flex-col text-center items-center py-12 px-12">
            <h1 className='lg:text-4xl text-2xl pb-10 font-medium'>Welcome to Restaurant House</h1>
            <p className='text-[18px] pb-6 max-w-[600px] leading-8'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. culpa amet. Rerum, deserunt cupiditate dicta veritatis quasi eos nulla tempora reiciendis sint excepturi deleniti assumenda id quas amet?</p>
        </div>

        <div className='menu'>
            <div className="btns flex justify-center gap-4 pb-12">
              <button onClick={() => setFoods(data)} className='bg-white duration-300 border font-medium border-[#2F956D]'>All</button>
              <button onClick={() => fliterType('pizza')} className='bg-white duration-300 border font-medium border-[#2F956D]'>Pizza</button>
              <button onClick={() => fliterType('salad')} className='bg-white duration-300 border font-medium border-[#2F956D]'>Salad</button>
              <button onClick={() => fliterType('noodle')} className='bg-white duration-300 border font-medium border-[#2F956D]'>Noodle</button>
            </div>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 w-full h-full'>
              {foods.map((item) => (
                  <div key={item.id} className='card grid place-content-center border-[1px] border-[#ccc] rounded-lg mx-2 py-2 hover:scale-105 duration-300'>
                    <img className='object-cover w-[230px] h-[230px]' src={item.image} alt={item.name} />
                    <div className='flex justify-between px-2 py-1'>
                      <h2 className='md:text-[18px] font-medium'>{item.name}</h2>
                      <p className='text-green-600 md:text-[18px] font-medium'>{item.price}</p>
                    </div>
                  </div>
              ))}
            </div>
        </div>
    </div>
  )
}

export default Hero
