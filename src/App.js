import React, { Component } from 'react';
import './App.css';

// import CurrencyChooser from './components/CurrencyChooser/CurrencyChooser.js';
import BarChart from './components/BarChart/BarChart.js';
import Bar from './components/Bar/Bar.js';

class App extends Component {
  state = {
    apiData: '',
    currencies: [
        "EUR",
        "USD",
        "AUD",
        "GBP",
        "BRL",
    ],
    rates: [
    
    ],
    selectedCurrency: "EUR",
    highest: 0,
  }
  

  handleChange = (ev) => {
    console.log(ev.target.value);
    this.state.selectedCurrency = ev.target.value;
    this.doFetch();
  }
  
  doFetch = () => {
    fetch("https://api.exchangeratesapi.io/latest?base=" + this.state.selectedCurrency)
    .then(response => response.json())
    .then(data => {    

        this.setState({
            apiData: data,
        });
        
        
        this.state.highest = 0;
        for (let currency of this.state.currencies) {
            let rate = data.rates[currency]   
            if (rate > this.state.highest) {
            this.state.highest = rate;
            }
        }
        
        if (this.state.selectedCurrency === "EUR") {
            data.rates.EUR = 1.00;
        }
        
        
        let rates = [];
        for (let currency of this.state.currencies) {

            let height = data.rates[currency]/this.state.highest * 100;
            let item =  {
                    currency: currency,
                    height: height,
                    rate: data.rates[currency].toFixed(2),
                };
                  
            rates.push(item);
        }
        
        this.setState({
            rates: rates
        }); 
    });
  }
  
  
  componentDidMount() {
    this.doFetch();
  }
  
  render() {
    return (
      <div className="App">

        <BarChart 
            rates={this.state.rates}
        />
      </div>      
    );
  }
}

export default App;
