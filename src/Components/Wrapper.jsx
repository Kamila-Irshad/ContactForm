import React, { Children } from 'react'
import Container from './Container'
const Wrapper = ({children}) => {
  return (
    <Container>
    <div className='lg:w-1/2  rounded-md shadow-2xl mx-auto  bg-white'>
        {children}
      
    </div>
    </Container>
  )
}

export default Wrapper
