import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>John Seir Sor</title>
        <meta property="og:title" content="John Seir Sor" />
      </Helmet>
      <a
        href="https://plpge1.chuimain.online/"
        target="_self"
        rel="noreferrer noopener"
        className="home-link"
      >
        <img alt="image" src="/plbut.2jpg.jpg" className="home-image" />
      </a>
    </div>
  )
}

export default Home
