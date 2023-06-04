import React from 'react'
import {
  BrowserRouter as Router,
  NavLink
} from "react-router-dom"

import Routes from './routes'

import { FiDownload } from 'react-icons/fi'
import { ImAirplane } from 'react-icons/im'

export default function App() {
  return (
    <Router>
      <aside className='w-32 hidden sm:block z-10 fixed bg-blue-700 min-h-screen'>
        <header className='w-full text-center py-5 bg-blue-600'>
          <h5 className='font-bold text-lg text-white'>eTravel</h5>
        </header>

        <nav className='py-5'>
          <ul>
            <li className='mb-5'>
              <NavLink exact to="/" activeClassName='bg-white text-blue-700 font-semibold' className='block transition-all duration-300 ease-in-out text-center py-3 text-white text-sm tracking-wider rounded-l-full hover:bg-white hover:text-blue-700' href="#">
                <FiDownload className='mx-auto text-2xl mb-2' />Import SPPD
              </NavLink>
            </li>
            <li>
              <NavLink to="/trips" activeClassName='bg-white text-blue-700 font-semibold' className='block transition-all duration-300 ease-in-out text-center py-3 text-white text-sm tracking-wider rounded-l-full hover:bg-white hover:text-blue-700' href="#">
                <ImAirplane className='mx-auto text-xl mb-2' />trips
              </NavLink>
            </li>
          </ul>
        </nav>
      </aside>

      <div className='absolute -z-10 w-full h-64 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-700'></div>
      <Routes />
    </Router>
  )
}

{/* <div>
        <nav className='mb-5'>
          <ul>
            <li>
              <NavLink exact to="/" activeClassName='font-bold'>Home</NavLink>
            </li>
            <li>
              <NavLink to="/about" activeClassName='font-bold'>About</NavLink>
            </li>
            <li>
              <NavLink to="/users" activeClassName='font-bold'>Users</NavLink>
            </li>
          </ul>
        </nav>

        <hr />

        <Routes />
      </div> */}