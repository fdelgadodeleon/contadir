import React from 'react';
import Button from './Button';
import './Counter.css';

class Counter extends React.Component {
    constructor (props) {
        super(props);
        this.state = {value: 10}

        this.increase = this.increase.bind(this);
        this.decrease = this.decrease.bind(this);

    }

    increase() {
        //incorrecto
        //this.state.value = this.state.value + 1;
        this.setState((state) => ({
            value: state.value+1
        }));
    }

    decrease() {
        this.setState((state) => ({
            value: state.value-1
        }));
    }

    render ()  {
        return (
            <div className="container">
                <h2>Contador</h2>
                <div className="counter">
                    <Button label="-" onClick={this.decrease}/>            
                    <h1>{this.state.value}</h1>
                    <Button label="+" onClick={this.increase}/>
                </div>
            </div>
            
        )
    }
}

export default Counter;