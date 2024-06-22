import React from "react"
import { useSelector } from "react-redux"
import SectionTitle from "../../components/SectionTitle"

function Courses() {
  // const [selectedItemIndex, setSelectedItemIndex] = React.useState(0)
  const { portfolioData } = useSelector((state) => state.root)
  const { courses } = portfolioData
  return (
    <div  className='bg-primary  sm:px-5'>
      <SectionTitle title='Our Courses' />
      <div className='grid grid-cols-3 gap-5 mt-5 sm:grid-cols-1'>
        {courses.map((courses) => (
          <div className='shadow bg-[#1f1f35] border p-5 border-tertiary flex flex-col gap-5'>
            <h1 className='text-white text-center text-xl font-bold'>
              {courses.title}
            </h1>
            <hr className='mt-[-10px] border-tertiary' />
            {/* <img src={courses.image} alt='' className='h-60 w-80 rounded' /> */}
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

      {/* <div className='flex py-10 gap-20 sm:gap-5 sm:flex-col'>
        <div className='flex flex-col gap-10 sm:gap-5 border-l-2 border-[#135e4c82] w-1/3 sm:flex-row sm:overflow-x-scroll sm:w-full'>
          {courses.map((course, index) => (
            <div
              onClick={() => {
                setSelectedItemIndex(index)
              }}
              className='cursor-pointer'
            >
              <h1
                className={`text-xl sm:text-[15px] px-5 sm:px-2
                 ${
                   selectedItemIndex === index
                     ? "text-tertiary border-tertiary border-l-4 -ml-[3px] bg-[#1a7f5a31] py-3"
                     : "text-white"
                 } `}
              >
                {course.title}
              </h1>
            </div>
          ))}
        </div>

        <div className='flex items-center justify-center gap-10 sm:gap-5 sm:flex-col'>
          <div className='flex flex-col gap-5'>
            <h1 className='text-secondary text-xl'>
              {courses[selectedItemIndex].title}
            </h1>

            <p className='text-white'>
              {courses[selectedItemIndex].description}
            </p>
            <p className='text-white'>
              TAKA: {courses[selectedItemIndex].price}৳
            </p>

            <a href={courses[selectedItemIndex].link}>Link</a>
          </div>
          <img
            src={courses[selectedItemIndex].image}
            alt=''
            className='h-52 w-80'
          />
          <lottie-player
            className='h-52 w-80'
            src={courses.image}
            background='transparent'
            speed='1'
            autoplay
          ></lottie-player>
        </div>
      </div> */}
    </div>
  )
}

export default Courses
