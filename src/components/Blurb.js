import React from 'react'
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import avatar from '../images/avatar.png'

export default function Blurb({ title, children, data, img }) {
  return (
    <section className="blurb">
      <div className="container">
        <div>
          <h1>{title}</h1>
          {children}
        </div>
        <div>
            <img src={avatar} className="avatar"/>
          
        </div>
      </div>
    </section>
  )
}

// export const pageQuery = graphql`
//      query {
//        file(
//          relativePath: { eq: "../images/avatar.png" }
//        ) {
//         childImageSharp {
//           gatsbyImageData(
//             width: 300
//             placeholder: BLURRED
//             formats: [WEBP]
//           )
//         }
//        }
//       }
// `;