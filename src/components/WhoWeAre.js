import React, { Component } from 'react'

import GirlsImg from '../img/girls.svg'
import ShowMore from './ShowMore'

const WhoWeAre = class extends Component {
  render() {
    return (
      <div className="flex">
        <img src={GirlsImg} style={{ width: "45%" }}/>
        <div className="container gc-ended-content" style={{ paddingTop: "2em" }}>
          <span className="principal-title">Quienes somos</span>
          <p className="title-content">Buscamos la inclusión digital de mujeres en las áreas de STEAM en todo Paraguay con espacios de aprendizaje en base a nuestros valores.</p>
          <ShowMore 
            link="/team"
            label="Equipo"
          />
        </div>
      </div>
    )
  }
}

export default WhoWeAre