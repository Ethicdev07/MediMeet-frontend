import React from 'react'
import {assets} from '../assets/assets'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-400'>
      <div className='w-[100px] cursor-pointer'>
        <img src={assets.medimeetlogo} alt="" />
      </div>
      <ul className='hidden md:flex items-start gap-5 font-medium'>
        <NavLink>
            <li>HOME</li>
            <hr />
        </NavLink>
        <NavLink>
            <li>ALL DOCTORS</li>
            <hr />
        </NavLink>
        <NavLink>
            <li>ABOUT</li>
            <hr />
        </NavLink>
        <NavLink>
            <li>CONTACT</li>
            <hr />
        </NavLink>
      </ul>

      <div>
        <button>Create Account</button>
      </div>
    </div>
  )
}

export default Navbar