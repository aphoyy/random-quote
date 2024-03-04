import twitterLogo from './twitter.svg';
import { ReactComponent as Logo } from './quote-left-solid.svg';
import './App.css';
import data from './quotes.json';
import React, { useEffect } from 'react';

function App() {
  let tweetURL = "";
  
  // Set random color and call getQuote()
  function changeQuote() {
    const randomColor = "rgb(" + Math.floor(Math.random() * 255 + 1) + ", " + Math.floor(Math.random() * 255 + 1) + ", " + Math.floor(Math.random() * 255 + 1) + ")";
    document.documentElement.style.cssText = `--main-color: ${randomColor}`;
    getQuote();
  }
  
  // Set a new quote
  function getQuote() {
    const randomNumber = Math.floor(Math.random() * data.length);
    document.getElementById("insertQuoteHere").innerText = data[randomNumber]["q"];
    document.getElementById("author").innerText = data[randomNumber]["a"];
    // Change the tweet link
    const tweet = data[randomNumber]["q"].replace(/\s/g, "%20") + "%0A-%20" + data[randomNumber]["a"].replace(/\s/g, "%20") + "%0A%0ASource:";
    tweetURL = "https://twitter.com/intent/tweet?text=" + tweet + "&url=https://github.com/aphoyy";
    document.getElementById("tweet-quote").setAttribute("href", tweetURL);
  }

  // On load change color and set a quote
  useEffect(() => {
    changeQuote()
  });

  return (
    <div className="App">
      <div id="quote-box">
        <p id="text"><Logo className="quote-icon" /><span id="insertQuoteHere"></span></p>
        <p id="author"></p>
        <div className="footer">
          <div>
            <a 
              href={tweetURL}
              rel="noreferrer" 
              target="_blank" 
              id="tweet-quote"
            >
              <img src={twitterLogo} id='twitter-logo' alt="twitter logo" />
            </a>
          </div>
          <button id="new-quote" onClick={changeQuote}>New quote</button>
        </div>
      </div>
      <p id="credits">by <a href="https://github.com/aphoyy" alt="aphoyy github">Aphoyy</a></p>
    </div>
  );
}

export default App;
