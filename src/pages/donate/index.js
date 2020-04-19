import React, { Component } from 'react'
 
import Layout from '../../components/Layout'
import Donate from '../../components/Donate';


const DonatePage  = class extends Component {
  render() {
    return (
      <Layout>
        <Donate />
      </Layout>
    )
  }
}

export default DonatePage
