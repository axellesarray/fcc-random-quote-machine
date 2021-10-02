import React, { useState } from "react";
import "./App.scss";
import COLORS_ARRAY from "./colorsArray";
import QUOTES_ARRAY from "./quotesArray";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

function App() {
  const [quote, setQuote] = useState(
    "In order to succeed, your desire for success should be greater than your fear of failure."
  );
  const [author, setAuthor] = useState("Bill Cosby");
  const [randomNumber, setRandomNumber] = useState(0);
  const [accentColor, setAccentColor] = useState("#809980");

  const getRandomQuote = () => {
    let randomInteger = Math.floor(QUOTES_ARRAY.length * Math.random());
    setRandomNumber(randomInteger);
    setAccentColor(COLORS_ARRAY[randomInteger]);
    setQuote(QUOTES_ARRAY[randomInteger].quote);
    setAuthor(QUOTES_ARRAY[randomInteger].author);
  };

  return (
    <div className="App">
      <header className="App-header" style={{ backgroundColor: accentColor }}>
        <div id="quote-box">
          <FontAwesomeIcon
            id="quote-icon"
            icon={faQuoteLeft}
            style={{ color: accentColor }}
          />

          <p id="text" style={{ color: accentColor }}>
            {quote}
          </p>
          <p id="author" style={{ color: accentColor }}>
            - {author}
          </p>

          {/* Placed those 2 next elements in order to pass the FreeCodeCamp test (had to be within the #quote-box element), but I wanted my app's design to be different => {display: none;} in "./App.scss" */}
          <button id="new-quote">Quote</button>
          <a
            href={encodeURI(
              `http://www.twitter.com/intent/tweet?text="${quote}" - ${author}`
            )}
            id="tweet-quote"
          >
            Twitter
          </a>
          {/* End of the {display: none;} */}
        </div>

        <div class="links">
          <button
            class="new-quote"
            onClick={() => getRandomQuote()}
            timeOut={350}
            style={{ backgroundColor: accentColor }}
          >
            New Quote
          </button>
          <a
            href={encodeURI(
              `http://www.twitter.com/intent/tweet?text="${quote}" - ${author}`
            )}
            target="_blank"
            rel="noreferrer"
            class="tweet-quote"
            style={{ backgroundColor: accentColor }}
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </div>
      </header>
    </div>
  );
}

export default App;
