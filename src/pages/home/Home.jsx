import React from 'react'
import "./home.css"

const Home = () => {
  return (
    <div className='container'>
      <h1>Link Shrinker</h1>

      <label htmlFor="longUrl">Long URL:</label>
      <input type="text" id="longUrl" name="longUrl" required />

      <label htmlFor="shortURL">Enter short code:</label>
      <input type="text" id="shortURL" name="shortURL" required />

      <button type="submit">Shorten</button>

      <p>Short URL</p>
      <div className='result'><p>https://cpit405.gitlab.io/labs/lab-8/</p></div>
    </div>
  )
}

export default Home