import React from 'react'

const Container = ({children}) => {
  return (
    <div  className='w-full h-screen flex justify-center items-center  bg-green-100 '>
      {children}
    </div>
  )
}

export default Container
