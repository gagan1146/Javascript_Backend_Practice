import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

const Home = () => {
  return (
    <div className='home-main'>
      <Link to="/signup">Signup</Link>
      <Link to="/login">Login</Link>
    </div>
  )
}

export default Home
