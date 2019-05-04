import React, { Component } from 'react';
import './Bar.css';

class Bar extends Component {
    render() {
        return (
            <div className="BarChart-bar" 
                    style={{ height: this.props.height + "%"}}>
                    {this.props.currency} {this.props.rate.toFixed(2)}
            </div>
        );
    }
}

export default Bar;
