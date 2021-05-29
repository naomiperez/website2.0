import React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"

export default function Nav() {
    return (
      <nav className="navbar">
        <div className="container">
          <div className="grid">
            <div>
              <Link to="/" className="brand">
                <span className="emoji">
                  <StaticImage src="../images/smallfloppy.png" width="50" alt="Floppy" />
                </span>{' '}
                Naomi Perez
              </Link>
            </div>
            
            <div className="menu-item flex">
              <Link to="/projects">Projects</Link>
              <Link to="/education">Education</Link>
              <Link to="/about">About Me</Link>
              <Link to="/blog" >Blog</Link>
            </div>
  
            <div className="button-item">
              <button
                id="dark-mode-button"
                onClick={(event) => {
                  const theme =
                    typeof window !== 'undefined' && localStorage.getItem('theme')
  
                  if (theme === 'dark') {
                    typeof window !== 'undefined' &&
                      localStorage.removeItem('theme')
                    const link = document.querySelectorAll('#dark-mode')
  
                    if (link) {
                      link.forEach((el) => el.remove())
                      event.target.textContent = '☕'
                    }
                  } else {
                    typeof window !== 'undefined' &&
                      localStorage.setItem('theme', 'dark')
                    event.target.textContent = '🌿'
                    const head = document.getElementsByTagName('head')[0]
                    const link = document.createElement('link')
                    link.rel = 'stylesheet'
                    link.id = 'dark-mode'
                    link.href = '../dark.css'
  
                    head.appendChild(link)
                  }
                }}
              >
                {typeof window !== 'undefined' &&
                localStorage.getItem('theme') === 'dark'
                  ? '🌿'
                  : '☕'}
              </button>
            </div>
          </div>
        </div>
      </nav>
    )
  }