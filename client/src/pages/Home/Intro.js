import React from "react"
import { useSelector } from "react-redux"

function Intro() {
  const { portfolioData } = useSelector((state) => state.root)
  const { intros } = portfolioData
  const { firstName, lastName, welcomeText, description, caption } = intros
  return (
    <div className='flex flex-row'>
      <div className='h-[80vh] w-3/5 sm:w-full bg-primary flex flex-col items-start justify-center gap-8 sm:gap-3 py-10'>
        <h1 className='text-2xl sm:text-xl text-white'>{welcomeText || ""} </h1>
        <h1 className='text-4xl sm:text-2xl text-secondary font-semibold'>
          {firstName || ""} {lastName || ""}
        </h1>
        <h1 className='text-xl sm:text-[15px] text-white font-semibold'>
          {caption || ""}
        </h1>
        <p className='text-white  sm:w-full'>{description || ""}s</p>
        {/* <button className='border-2 border-tertiary text-tertiary px-10 py-3 rounded'>
        Get Started
      </button> */}
      </div>

      <div className='h-[80vh] w-2/4 sm:w-ful flex flex-col items-start justify-center gap-5 sm:gap-3 sm:hidden'>
        <lottie-player
          src='https://lottie.host/046bfae0-0890-4b1e-b076-e31e9885f28b/AjwM9rOELA.json'
          background='transparent'
          speed='1'
          autoplay
        ></lottie-player>
      </div>
    </div>
  )
}

export default Intro
