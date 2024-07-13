import React from 'react'

const Hero = () => {
  return (
    <section className='flex flex-row justify-around items-center h-screen'>
        <div>
            <h1 className='text-2xl font-semibold'>Ever heard of Antelopes ?</h1>
            <div className='mt-6'>   
                <p>Pretty sure you did but ...</p>
                <p>here is a quick reminder of what they looks like</p>
            </div>
        </div>
        <div>
            <img src="images/arrow_hero.png" alt="arrow in the hero" />
        </div>
        <div className="p-10">
            <div className="grid grid-cols-3 grid-rows-4 gap-4 h-[400px] w-[400px]">
                <div className="rounded-lg col-span-1 row-start-2 row-span-2 flex items-center justify-center overflow-hidden shadow-2xl group">
                <img
                    src="/images/antelope_1.jpg"
                    alt="Image 1 of antelope"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                </div>
                <div className="rounded-lg col-start-3 row-start-1 row-span-2 flex items-center justify-center overflow-hidden shadow-2xl group">
                <img
                    src="/images/antelope_2.jpg"
                    alt="Image 2 of antelope"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                </div>
                <div className="rounded-lg col-span-2 row-start-3 row-span-2 flex items-center justify-center overflow-hidden shadow-2xl group">
                <img
                    src="/images/antelope_3.jpg"
                    alt="Image 3 of antelope"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero