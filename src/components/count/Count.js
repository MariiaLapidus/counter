//rcc авто заполнение
import React, {Component} from 'react';
import './count.css'

class Count extends Component {
    render() {
        return (
            <div className="count">
                <h1>{this.props.count}</h1>
            </div>
        );
    }
}

export default Count;