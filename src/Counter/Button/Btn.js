import React from 'react';
import style from './Btn.module.css';

class Btn extends React.Component {
        render = () => {

                let inc = this.props.state.value === this.props.state.maxValue ? style.buttonMax : style.button;
                let reset = this.props.state.value === 0 ? style.buttonMax : style.button;
                let classes = this.props.name;

            return (
            <div className={style.butn}>
                    <button className={style[classes]} onClick={()=>{this.props.function()}} /*disabled={this.props.state.value === 5*/>{this.props.name}</button>
            </div>
        )}
}

export default Btn;
