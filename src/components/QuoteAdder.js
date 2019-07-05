import React from "react";

class QuoteAdder extends React.Component {
  state = {
    text: "it's better than html",
    author: "jacob 2019",
    showMsg: false
  };
  render() {
    console.log(this.state);
    const { text, author, showMsg } = this.state;
    return (
      <section>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="text">New quote:</label>
          <input
            type="text"
            id="text"
            value={text}
            onChange={this.handleChange}
          />
          <label htmlFor="author">Author:</label>
          <input
            type="text"
            id="author"
            value={author}
            onChange={this.handleChange}
          />
          <button type="submit">Add Quote</button>
        </form>
        {showMsg ? <p>Thanks for adding a quote</p> : null}
      </section>
    );
  }
  handleSubmit = event => {
    event.preventDefault();
    const { text, author } = this.state;
    const { addQuote } = this.props;
    const newQuote = { text, author };
    addQuote(newQuote);
    this.setState({
      text: "",
      author: "",
      showMsg: true
    });
  };

  handleChange = event => {
    // console.log(event.target.value);
    const { value, id } = event.target;
    this.setState({
      [id]: value
    });
  };
}

export default QuoteAdder;
