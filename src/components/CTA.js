import React from 'react'

const CTA = () => {
  return (
    <section className='overflow-hidden relative mx-auto mt-20 max-w-7xl flex justify-center items-center flex-col'>
        <p className='font-normal mb-2'>Ready to start trading cryptocurrency?</p>
        <h3 className='text-4xl font-semibold text-center mx-auto lg:mx-[300px]'>
        New users can earn up to $80 in crypto rewards.
        </h3>
        <div className='custom-search-box'>
            <input placeholder='Enter your email address' type="text" />
            <button className="grad-btn md-btn w-44">Get Started</button>
        </div>
    </section>
  )
}

export default CTA