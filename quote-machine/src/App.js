import React from "react";
import "./App.css";

class App extends React.Component {
  state = {
    quotes: [
      {
        quotes: "Any program is only as good as it is useful",
        author: "Linus Torvalds",
        id: 0
      },
      {
        quotes:
          "Focus is a matter of deciding what things you're not going to do.",
        author: "John Carmack",
        id: 0
      },
      {
        quotes:
          "We can only see a short distance ahead, but we can see plenty there that needs to be done.",
        author: "Alan Turing",
        id: 0
      },
      {
        quotes: "A.I began with the ancient wish to forge the gods",
        author: "Paula Mccorduck",
        id: 0
      },
      {
        quotes:
          "The future depends on some graduate student who is deeply suspicious of everything I have said.",
        author: "Geofrey Hinton",
        id: 0
      }
    ],
    currentQuote: {},
    tweetedLink: window.location.href
  };
  componentDidMount() {
    const random = Math.floor(Math.random() * 4);
    this.setState({ currentQuote: this.state.quotes[random] });
  }
  handleQuoteClick = () => {
    const random = Math.floor(Math.random() * 4);
    this.setState({ currentQuote: this.state.quotes[random] });
  };

  render() {
    return (
      <div id="root-container">
        <div id="quote-box">
          <h1 id="text">{this.state.currentQuote.quotes}</h1>
          <h2 id="author"> {this.state.currentQuote.author}</h2>
          <div id="buttons-container">
            <button id="new-quote" onClick={this.handleQuoteClick}>
              New Quote
            </button>

            <a
              id="tweet-quote"
              href={
                "https://twitter.com/intent/tweet?" +
                "&text=" +
                this.state.currentQuote.quotes +
                " " +
                this.state.currentQuote.author
              }
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fab fa-twitter fa-lg twitter"></i>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
