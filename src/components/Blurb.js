import React from 'react'
import { graphql } from "gatsby"
import { StaticImage, getImage } from 'gatsby-plugin-image'
import avatar from '../images/typing.png'

export default function Blurb({ title, children }) {
  return (
    <section className="blurb">
      <div className="container">
        <div>
          <h1>{title}</h1>
          {children}
        </div>
        <div>
          <StaticImage src="../images/typing.png" width="310" className="avatar" alt="Typing on Keyboard" />
        </div>
      </div>
    </section>
  )
}