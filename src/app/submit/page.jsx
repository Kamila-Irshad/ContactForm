import React from 'react'
import Wrapper from '@/Components/Wrapper'
const page = () => {
  return (
    <Wrapper >
  <div className=' text-black text-center flex flex-col m-10 '>
  <h1> Thank you</h1>
      <h2>Your form has been submitted Succesfully </h2>
      <h3>We will reach out you as soon as possible</h3>



      
  </div>
  <button className='w-full p-2 bg-[#0E7D69] '>Dismiss Message</button>
    </Wrapper>
  )
}

export default page
