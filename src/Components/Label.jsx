import React from 'react'

const Label = ({children,value,className, ...rest}) => {
  return (
    <div>
    <label htmlFor=""value={value} {...rest} className= {`text-black text-sm  mb-4 ${className}`}>{children}</label>
    </div>
  )
}

export default Label
