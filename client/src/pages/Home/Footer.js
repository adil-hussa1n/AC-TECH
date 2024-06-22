import React from "react"

function Footer() {
  return (
    <div className='py-10 pb-[80px] sm:pb-[50px]'>
      <div className='h-[1px] w-full bg-gray-700'></div>

      <div className='flex items-center justify-center flex-col mt-10 opacity-70'>
        <h1 className='text-white'>Designed and Developed By</h1>
        <h className='text-white'>
          <span className='text-white'>Tanvir Hussain</span>
        </h>
      </div>
    </div>
  )
}

export default Footer
