import React from "react"
import { useSelector } from "react-redux"
import SectionTitle from "../../components/SectionTitle"
import Try from "./Try"
import LeftSider from "./LeftSider"

function Contact() {
  const { portfolioData } = useSelector((state) => state.root)
  const { contacts } = portfolioData

  return (
    <div className='bg-primary px-40 sm:px-5 pb-10'>
      <Try />
      <SectionTitle title='Say Hello' />
      
      <div className='flex sm:flex-col items-center justify-between mt-5'> 
        <LeftSider /> 
        <div className='flex flex-col'>
          <p className='text-tertiary'>{"{"}</p>
          {Object.keys(contacts).map(
            (key) =>
              key !== "_id" && (
                <p key={key} className='ml-5'>
                  <span className='text-tertiary'>{key} : </span>
                  <span className='text-tertiary'>{contacts[key]}</span>
                </p>
              )
          )}
          <p className='text-tertiary'>{"}"}</p>
        </div>
        <div className='h-[400px]'>
          <lottie-player
            src='https://assets9.lottiefiles.com/packages/lf20_eroqjb7w.json'
            background='transparent'
            speed='1'
            autoplay
          ></lottie-player>
        </div>
      </div>
    </div>
  )
}

export default Contact
