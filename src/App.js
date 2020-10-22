import React, { Component } from 'react';
import axios from 'axios';
import DisplayQuote from './components/DisplayQuote';
import './App.css';

const initialQuote = [
  {
    quote: "By chilling my loins I increase the chances of impregnating my wife.",
    character: "Apu Nahasapeemapetilon",
    image: "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FApuNahasapeemapetilon.png?1497567511629",
    characterDirection: "Left",
  },
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state =
    {
      quote: initialQuote,
    };
    this.getQuote = this.getQuote.bind(this);
  }

  getQuote() {
    axios.get('https://simpsons-quotes-api.herokuapp.com/quotes')
      .then(response => response.data)
      .then(data => {
        console.log(data);
        this.setState({
          quote: data,
        });
      });
  }

  render() {

    return (
      <div className="App">
        <button onClick={this.getQuote}>New Quote !</button>
        <DisplayQuote quote={this.state.quote} />
      </div>
    );
  }
}


export default App;
