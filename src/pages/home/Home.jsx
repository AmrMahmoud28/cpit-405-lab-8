import React, { useState } from "react";
import "./home.css";

const Home = () => {
  const [longUrl, setLongUrl] = useState("");
  const [shortCode, setShortCode] = useState("");
  const [shortUrl, setShortUrl] = useState(null);

  const handleShorten = () => {
    if (longUrl) {
      setShortUrl(shortCode ? `https://cpit405.co/${shortCode}` : `https://cpit405.co/${Math.random().toString(36).substring(6)}`);
    }
  };

  return (
    <div className="container">
      <h1>Link Shrinker</h1>

      <label htmlFor="longUrl">Long URL:</label>
      <input
        type="text"
        id="longUrl"
        name="longUrl"
        required
        value={longUrl}
        onChange={(e) => setLongUrl(e.target.value)}
      />

      <label htmlFor="shortURL">Enter short code:</label>
      <input
        type="text"
        id="shortURL"
        name="shortURL"
        required
        value={shortCode}
        onChange={(e) => setShortCode(e.target.value)}
      />

      <button type="submit" onClick={handleShorten}>
        Shorten
      </button>

      <p>Short URL</p>
      <div className="result">
        <p>
          {shortUrl && (
            <a href={longUrl} target="_blank">
              {shortUrl}
            </a>
          )}
        </p>
      </div>
    </div>
  );
};

export default Home;
