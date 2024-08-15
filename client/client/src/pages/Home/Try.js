import React from "react"
import { Link, NavLink } from "react-router-dom"
const Try = () => {
  return (
    <div className='bg-primary px-40 sm:px-5'>
      <div className='fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200 dark:bg-gray-700 dark:border-gray-600'>
        <div className='grid h-full max-w-lg grid-cols-4 mx-auto font-medium'>
          <li className='inline-flex flex-col items-center justify-center px-5 border-gray-200 border-x hover:bg-gray-50 dark:hover:bg-gray-800 group dark:border-gray-600'>
            {" "}
            <Link
              className='text-sm text-white dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500'
              to='/'
            >
              Home
            </Link>{" "}
          </li>

          <li className='inline-flex flex-col items-center justify-center px-5 border-gray-200 border-x hover:bg-gray-50 dark:hover:bg-gray-800 group dark:border-gray-600'>
            {" "}
            <NavLink
              className='text-sm text-white dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500'
              to='/courses'
            >
              Courses
            </NavLink>{" "}
          </li>

          <li className='inline-flex flex-col items-center justify-center px-5 border-gray-200 border-x hover:bg-gray-50 dark:hover:bg-gray-800 group dark:border-gray-600'>
            {" "}
            <NavLink
              className='text-sm text-white dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500'
              to='/about'
            >
              About
            </NavLink>{" "}
          </li>

          <li className='inline-flex flex-col items-center justify-center px-5 border-gray-200 border-x hover:bg-gray-50 dark:hover:bg-gray-800 group dark:border-gray-600'>
            {" "}
            <NavLink
              className='text-sm text-white dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500'
              to='/contact'
            >
              Contact
            </NavLink>{" "}
          </li>
        </div>
      </div>
    </div>
  )
}

export default Try
