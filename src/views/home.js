import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Insistent Cute Mole</title>
        <meta property="og:title" content="Insistent Cute Mole" />
      </Helmet>
      <h1>Heading</h1>
    </div>
  )
}

export default Home
