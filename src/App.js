import React from 'react';
import style from './App.module.css';
import Count from "./Count";
import Button from "./Button";

class App extends React.Component {

    state = {
        value: 0,
        maxValue: 5,
    };
    increment = (value) => {
        if (this.state.value < 5) {
            this.setState(
                {value: this.state.value + 1})
        }
    };
    reset = (value) => {
        this.setState(
            {value: this.state.value = 0}
        )
    };

    render = () => {
        return (
            <div className={style.app}>
                <Count state={this.state}/>
                <Button reset={this.reset} increment={this.increment} state={this.state}/>
            </div>
        )
    }
}

export default App;