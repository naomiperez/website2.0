import React from 'react'
import tania from '../images/avatar.jpg'

export default function Blurb({ title, children }) {
  return (
    <section className="blurb">
      <div className="container">
        <div>
          <h1>{title}</h1>
          {children}
        </div>
        <div>
          <img src={tania} alt="Tania" className="avatar" />
        </div>
      </div>
    </section>
  )
}