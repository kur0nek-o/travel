import React from 'react'
import {
  BrowserRouter as Router,
  NavLink
} from "react-router-dom"
import Routes from './routes'

export default function App() {
  return (
    <Router>
      <div>
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
      </div>
    </Router>
  )
}