import React from 'react'
import {
  BrowserRouter as Router,
  NavLink
} from "react-router-dom"

import Routes from './routes'

export default function App() {
  return (
    <Router>
      <aside className='w-32 hidden sm:block z-10 fixed bg-blue-700 min-h-screen'>
        <p>Sidebar</p>
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