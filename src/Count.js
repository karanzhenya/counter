import React from 'react';
import style from './Count.module.css';

class Count extends React.Component {

    render = () => {
        let styleValue = this.props.state.value === this.props.state.maxValue ? style.valueMax : style.value;
        return (
            <h1 className={styleValue}>
                {this.props.state.value}
            </h1>
        )
    }
}

export default Count;
