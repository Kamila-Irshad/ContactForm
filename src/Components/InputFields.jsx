import React from 'react'

const InputFields = ({type, className,...rest }) => {
  return (
    <div>
      <input  type={type} {...rest}   className={` p-2  text-black border  rounded-md mt-2 mb-2  w-full focus:border-blue-950 ${className} `} />
    </div>
  )
}

export default InputFields
