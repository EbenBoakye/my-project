import React from 'react';
const Hero = () => {
    
    return (
        <div className='text-white'>
                <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
                    <p className='font-bold p-2 text-[#5C8374]'>Tenant Shield® IS A WEB TOOL DESINGED FOR TENSNTS FACING EVICTION DUE TO RENT ARREAS WHO ARE BEING ASKED TO APPEAR IN COURT.</p>
                    <p className='font-bold p-3'>THIS TOOL IS SUITABLE ALL TENANTS, WHETHER ELIGIBLE FOR LEGAL AID OR OTHERWISE.</p>
                    <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold text-red-500'>IT IS IN YOUR BEST INTEREST TO SHOW UP FOR YOUR COURT HEARING </h1>
                    <div>
                       {/* <p className='md:text-5xl sm:text-4xl text xl font-bold'> Your presence </p>
                       <p className='md:text-5xl sm:text-4xl text xl font-bold'> is your best defense </p>       */}
                       

                   </div>
                </div>
            </div>
    );
};

export default Hero;
