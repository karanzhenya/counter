import React from 'react';
import style from './Counter.module.css';
import Display from "./Display/Display";
import Button from "./Button/Button";

class Counter extends React.Component {


    render = () => {
        return (
            <div className={style.counter}>
                <Display state={this.props.state}/>
                <Button reset={this.props.reset} increment={this.props.increment} state={this.props.state}/>
            </div>
        )
    }
}

export default Counter;