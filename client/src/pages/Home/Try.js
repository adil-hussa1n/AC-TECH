import React from "react"
import { Link, NavLink } from "react-router-dom"


const Try = () => {

  return (
    <><div>
        <nav className='navbar navbar-expand-lg'>
          <button
            className='navbar-toggler'
            type='button'
            data-toggle='collapse'
            data-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>

          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav ml-auto'>
              <li className='nav-item active'>
                <Link className='nav-link mr-5' to='/'>
                  Home <span className='sr-only'>(current)</span>
                </Link>
              </li>
              <li className='nav-item'>
                <NavLink className='nav-link mr-5' to='/about'>
                  About
                </NavLink>
              </li>

              <li className='nav-item'>
                <NavLink className='nav-link mr-5 ' to='/courese'>
                  Courses
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink className='nav-link mr-5' to='/contact'>
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div></>
  )
}

export default Try
