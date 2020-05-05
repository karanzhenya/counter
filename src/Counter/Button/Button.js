import React from 'react';
import style from './Button.module.css';

class Button extends React.Component {
        render = () => {
                let incrementStyle = this.props.state.value === this.props.state.maxValue ? style.buttonMax : style.button;
                let resetStyle = this.props.state.value === 0 ? style.buttonMax : style.button;
        return (
            <div className={style.butn}>
                <button className={incrementStyle} onClick={()=>{this.props.increment()}} disabled={this.props.state.value === 5}>INC</button>
                <button className={resetStyle} onClick={()=>{this.props.reset()}} disabled={this.props.state.value === 0}>Reset</button>

            </div>
        )}
}

export default Button;