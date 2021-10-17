import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

export default function Blurb({ title, children, showImage }) {
  return (
    <section className="blurb">
      <div className="container">
        <div>
          <h1>{title}</h1>
          {children}
        </div>
        {showImage ?  <div>
          <StaticImage src="../images/profilePic.jpg" width="310" className="avatar" alt="Typing on Keyboard" />
        </div> : <></>}
      </div>
    </section>
  )
}