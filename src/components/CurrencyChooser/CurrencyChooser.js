import React, { Component } from 'react';
import './CurrencyChooser.css';

class CurrencyChooser extends Component {
    render() {
        return (
            <div className="TitleBar">
                <h1>Currency</h1>
            
                <div className="CurrencyChooser">
                    <label>Base currency:
                        <select className="CurrencyChooser-select"  onChange={this.handleChange}>
                             {
                                this.state.currencies.map(currency => (
                                    <option value={currency}>{currency}</option>
                                ))
                             }
                        </select>
                    </label>
                </div>
            </div>
        );
    }
}

export default CurrencyChooser;
