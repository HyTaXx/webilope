import React from "react";

const Hero = () => {
    return (
        <section className="flex flex-col-reverse lg:flex-row lg:justify-around items-center h-screen lg:gap-40 px-6">
            <div>
                <h1
                    className="text-2xl lg:text-4xl xl:text-6xl font-semibold"
                    id="#antelopes"
                >
                    Ever heard of Antelopes ?
                </h1>
                <div className="mt-6">
                    <p>Pretty sure you did but ...</p>
                    <p>here is a quick reminder of what they looks like</p>
                    <p>Yeahhhh all of these are different.</p>
                    <p>Lets discover a bit more about them together !</p>
                    <p>(and also add some colors to this page)</p>
                </div>
                <div className="mt-6 flex flex-col gap-4">
                    <a
                        href="#content"
                        className="text-white bg-[#B45921] py-2 px-4 rounded w-[200px] text-center hover:bg-[#c2672f]"
                    >
                        Learn more
                    </a>
                </div>
            </div>
            <div className="p-10">
                <div className="grid grid-cols-3 grid-rows-4 gap-4 pt-10 lg:pt-0 h-[400px] w-[400px] lg:h-[450px] lg:w-[450px] xl:h-[600px] xl:w-[600px]">
                    <div className="rounded-lg col-span-1 row-start-2 row-span-2 flex items-center justify-center overflow-hidden hover:shadow-2xl group">
                        <img
                            src="/images/antelope_1.jpg"
                            alt="Image 1 of antelope"
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                    </div>
                    <div className="rounded-lg col-start-3 row-start-1 row-span-2 flex items-center justify-center overflow-hidden hover:shadow-2xl group">
                        <img
                            src="/images/antelope_2.jpg"
                            alt="Image 2 of antelope"
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                    </div>
                    <div className="rounded-lg col-span-2 row-start-3 row-span-2 flex items-center justify-center overflow-hidden hover:shadow-2xl group">
                        <img
                            src="/images/antelope_3.jpg"
                            alt="Image 3 of antelope"
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
