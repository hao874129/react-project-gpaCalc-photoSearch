import React from 'react'
import { Typography } from '@mui/material'

const Footer = () => {
  return (
      <div className='footer'>
        <div className='icon-bar'  >
          {/* eslint-disable-next-line */}
          <a href="#" onClick={(e) => (e.preventDefault())}>
            <i className="fab fa-facebook fa-2x" style={{ color: "#d1dddb" }} />
          </a>
          {/* eslint-disable-next-line */}
          <a href="#" onClick={(e) => (e.preventDefault())}>
            <i className="fab fa-github fa-2x" style={{ color: "#d1dddb" }} />
          </a>
          {/* eslint-disable-next-line */}
          <a href="#" onClick={(e) => (e.preventDefault())}>
            <i className="fab fa-instagram fa-2x" style={{ color: "#d1dddb" }} />
          </a>
        </div>
        <div style={{ color: "#d1dddb" }}>
          <Typography >© 2023 EN. All Rights Reserved</Typography>
        </div>
      </div >

  )
}

export default Footer