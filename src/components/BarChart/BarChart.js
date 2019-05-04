import React, { Component } from 'react';
import './BarChart.css';

import Bar from '../Bar/Bar.js';

class BarChart extends Component {
    render() {
        return (
            <div className="MainContainer">
              <div className="CurrencyCheckboxList">
              </div>
              <div className="BarChart">
                  {
                    this.props.rates.map(item => (
                      <Bar
                        currency={item.currency}
                        rate={item.rate}
                        height={item.height} />
                    ))
                  }
              </div>
            </div>
        );
    }
}

export default BarChart;
