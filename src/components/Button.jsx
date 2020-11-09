import React from 'react';

/*
class Button extends React.Component {
    render () {
        return (
            <button 
                style={{color: "green", fontSize: 100, backgroundColor: "white", border: 0}}
                onClick={this.props.onClick}>{this.props.label}</button>
        )
    }
};
*/

const Button = ({label, onClick}) => {
    return (
        <button 
            style={{color: "green", fontSize: 100, backgroundColor: "white", border: 0}}
            onClick={onClick}>
                {label}
        </button>
    )
}

export default Button;