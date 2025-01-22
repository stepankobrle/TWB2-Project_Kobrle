import React from 'react';



const Hero = () => {
    return (
        <section className={"bg-hero bg-cover bg-center bg-no-repeat h-[800px] w-full mb-10 relative"}>
            <div className='container mx-auto pl-4 flex h-full'>
                {/* Textová sekce */}
                <div className='flex flex-col justify-center'>
                    {/* Pretitle */}
                    <div className='text-lg font-medium mb-2'>
                        New Trend
                    </div>
                    {/* Title */}
                    <h1 className='text-[65px] leading-[1.1] font-light mb-4'>
                        AUTUMN SALE STYLISH <br/>
                        <span className='font-semibold'>MOMENTS</span>
                    </h1>
                </div>
            </div>
        </section>
    );
};

export default Hero;