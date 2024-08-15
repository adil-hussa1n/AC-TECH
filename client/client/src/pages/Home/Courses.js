import React from "react"
import { useSelector } from "react-redux"
import SectionTitle from "../../components/SectionTitle"
import Try from "./Try"
import LeftSider from "./LeftSider"

function Courses() {
  const { portfolioData } = useSelector((state) => state.root)
  const { courses } = portfolioData
  return (
    <div className='bg-primary px-40 sm:px-5 pb-10'>
      <Try />
      <LeftSider />
      <SectionTitle title='Our Courses' />
      <div className='grid grid-cols-3 gap-5 mt-5 sm:grid-cols-1'>
        {courses.map((courses) => (
          <div className='shadow bg-[#1f1f35] border p-5 border-tertiary flex flex-col gap-5'>
            <h1 className='text-white text-center text-xl font-bold'>
              {courses.title}
            </h1>
            <hr className='mt-[-10px] border-tertiary' />
            <lottie-player
              className='h-60 w-80 rounded'
              src={courses.image}
              background='transparent'
              speed='1'
              autoplay
            ></lottie-player>
            <h1 className='text-white text-center'>{courses.description}</h1>
            <div className='flex flex-row  items-center'>
              <h1 className='text-white text-center font-bold button-border'>
                TK {courses.price} /-
              </h1>

              <h1 className=' text-white text-center font-bold button-border-color '>
                Course Structure
              </h1>
            </div>
          </div>
        ))}
      </div>
      
    </div>
  )
}

export default Courses
