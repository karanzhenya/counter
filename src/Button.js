import React from 'react';
import style from './Button.module.css';

class Button extends React.Component {
        render = () => {
                let buttonStyle = this.props.state.value === this.props.state.maxValue ? style.buttonMax : style.button;
        return (
            <div>
                <button className={buttonStyle} onClick={()=>{this.props.increment()}} disabled={this.props.state.value === 5}>INC</button>
                <button onClick={()=>{this.props.reset()}} disabled={this.props.state.value === 0}>Reset</button>
            </div>
        )}
}

export default Button;