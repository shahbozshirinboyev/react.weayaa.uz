import { div } from 'framer-motion/client'
import React from 'react'

function Loader() {
  return (
    <div className='h-screen w-full flex justify-center items-center'>
      <div className="loader"></div>
    </div>
  )
}

export default Loader