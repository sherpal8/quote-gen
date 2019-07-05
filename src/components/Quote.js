import React from "react";

class Quote extends React.Component {
  state = { currentQuoteIndex: 0 };
  render() {
    const { quotes } = this.props;
    const { currentQuoteIndex } = this.state;
    const selectedQuote = quotes[currentQuoteIndex];
    //console.log(selectedQuote);
    return (
      <section>
        <p>{selectedQuote.text}</p>
        <p>{selectedQuote.author}</p>
        <button onClick={this.updateQuote}>Quote me!</button>
      </section>
    );
  }

  updateQuote = () => {
    const { quotes } = this.props;
    this.setState({
      currentQuoteIndex: Math.floor(Math.random() * quotes.length)
    });
  };
}

export default Quote;
