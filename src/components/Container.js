import React from 'react'

const Container = ({ children }) => (
  <section className="section">
    <div className="container">
      <div className="columns is-centered">
        <div className="column is-10">{children}</div>
      </div>
    </div>
  </section>
)

export default Container
