import React from 'react';
import style from './App.module.css';
import Counter from "./Counter/Counter";

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
                <Counter state={this.state} reset={this.reset} increment={this.increment}/>
            </div>
        )
    }
}

export default App;