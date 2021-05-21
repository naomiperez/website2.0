import React from 'react'
import Helmet from 'react-helmet'
import Nav from './Nav'
import '../style.css'
import '../new-moon.css'
import favicon from '../../src/images/smallfloppy.png'
import { GatsbyImage } from "gatsby-plugin-image"

export default function Layout({ children }) {
    return (
      <>
        <Helmet>
          <link rel="shortcut icon" type="image/jp2" href={favicon} />
        </Helmet>
        <Nav />
        <main>{children}</main>
      </>
    )
  }