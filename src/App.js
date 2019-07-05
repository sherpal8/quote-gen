import React from "react";
import Heading from "./components/Heading";
import "./App.css";
import QuoteAdder from "./components/QuoteAdder";
import Quote from "./components/Quote";
import quotes from "./quotes.json";

class App extends React.Component {
  state = { quotes };
  render() {
    console.log(this.state);
    return (
      <div className="App">
        <Heading />
        <QuoteAdder addQuote={this.addQuote} />
        <Quote quotes={this.state.quotes} />
      </div>
    );
  }

  addQuote = quoteToAdd => {
    this.setState(state => ({
      quotes: [...state.quotes, quoteToAdd]
    }));
  };
}

export default App;
