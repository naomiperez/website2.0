import React from 'react'

export default function Blurb({ title, children, img }) {
  return (
    <section className="blurb">
      <div className="container">
        <div>
          <h1>{title}</h1>
          {children}
        </div>
        <div>
          <img src={img} alt="Naomi" className="avatar" />
        </div>
      </div>
    </section>
  )
}