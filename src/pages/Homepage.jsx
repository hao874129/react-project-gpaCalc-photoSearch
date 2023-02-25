// import React from 'react'
import logo from '../assets/images/logo.jpg'
import Typography from '@mui/material/Typography'

// typewriter-effect
import Typewriter from "typewriter-effect"


const Homepage = () => {
  return (
    <div className="home"  style={{ position: 'relative', height: '100vh' }}>
        <header className="home_wrapper">
          <div className="logo_wrapper">
            <img src={logo} className="logo_img" alt="logo" />
          </div>
        </header>
        <Typography variant="h4">
          <div className='typewriter' >
            <Typewriter
              options={{
                strings: [
                  "Hi,    I am Ian",
                  "Hi,    I am EN"
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
              }}
            />
          </div>
        </Typography>
    </div>
  )
}

export default Homepage 