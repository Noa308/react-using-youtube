import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/images/logo.png'


const Navbar = () => {
const linkClas = ({isActive}) => isActive? ' bg-black text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2' : 'text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2'
//it make it be with black backgrond on the current page
//there is no isActive that i defined befaor.
//the isActive here is a property i recieved from 'react-router-dom' and this is why i put the '{isActive}' and not a regular boolean 'isActive'
  return (
    <nav className="bg-indigo-700 border-b border-indigo-500">
    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div className="flex h-20 items-center justify-between">
        <div
          className="flex flex-1 items-center justify-center md:items-stretch md:justify-start"
        >
          <NavLink className="flex flex-shrink-0 items-center mr-4" 
          to="/">
            <img
              className="h-10 w-auto"
              src= {logo}
              alt="React Jobs"
            />
            <span className="hidden md:block text-white text-2xl font-bold ml-2"
              >React Jobs</span>
          </NavLink>
          <div className="md:ml-auto">
            <div className="flex space-x-2">
              <NavLink
                to="/"
                className={ linkClas }
                >Home</ NavLink >
              <NavLink
                to="/jobs"
                className= { linkClas }
                >Jobs</NavLink>
              <NavLink
                to="/add-job"
                className={ linkClas }
                >Add Job</NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
  )
}

export default Navbar