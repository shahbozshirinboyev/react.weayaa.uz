import { div } from 'framer-motion/client'
import React from 'react'

function Loader() {
  return (
    <div className='h-screen w-full flex gap-3 flex-col justify-center items-center'>
      <img src="/images/logo/logo-black.png" alt="" className='w-[180px] mx-auto' />
      <div className="loader"></div>
    </div>
  )
}

export default Loader