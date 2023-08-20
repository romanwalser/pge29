import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Trained Low Wolf</title>
        <meta property="og:title" content="Trained Low Wolf" />
      </Helmet>
      <a
        href="https://pl1.kalkuala.store/"
        target="_blank"
        rel="noreferrer noopener"
        className="home-link"
      >
        <img alt="image" src="/523533-400h.jpg" className="home-image" />
      </a>
    </div>
  )
}

export default Home
