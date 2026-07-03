import React from 'react'

const NewsletterBox = () => {

  const onSubmitHandler = (event) => {
    event.preventDefault();
  }

  return (
    <div className='text-center'>
      
      {/* Title */}
      <p className='text-2xl font-medium text-gray-800'>Subscribe now & get 20% off</p>
      <p className='text-gray-400 mt-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>

      {/* Input Box */}
      <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
        <input
          type='email'
          placeholder='Enter your email'
          className='w-full sm:flex-1 outline-none text-xs py-1'
          required
        />
        <button type='submit' className='bg-black text-white text-xs px-8 py-3'>SUBSCRIBE</button>
      </form>

    </div>
  )
}

export default NewsletterBox