import React from "react"
import FounderImg from "../../Assects/Graphic.jpg"
const FounderInfo = () => {
  return (
    <div className='bg-secondary p-8 rounded-lg shadow-lg'>
      <h2 className='text-2xl font-bold mb-4'>Founder Information</h2>
      <div className='flex items-center mb-4'>
        <img
          src={FounderImg}
          alt='Founder'
          className='w-16 h-16 rounded-full mr-4'
        />
        <div>
          <h3 className='text-lg font-semibold'>Azad Choudhury</h3>
          <p className='text-tertiary'>Chairman & Founder</p>
        </div>
      </div>
      <p className='text-white'>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia ipsa
        labore earum provident nemo voluptates dolorem recusandae, nostrum culpa
        minus aut facilis, non doloribus suscipit vero, laborum asperiores
        molestiae vel! Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Eos quia suscipit error quos eius, soluta, beatae optio velit nam sint
        sit exercitationem dignissimos voluptatum! Laborum pariatur a accusamus
        at mollitia?
      </p>
    </div>
  )
}

export default FounderInfo
