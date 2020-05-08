import React from 'react';
import style from './App.module.css';
import Counter from "./Counter/Counter";
import Setting from "./Setting/Setting";

class App extends React.Component {

    state = {
        value: 0,
        startValue: 0,
        maxValue: 5,
    };
    increment = (value) => {
        if (this.state.value < this.state.maxValue) {
            this.setState(
                {value: this.state.value + 1})
        }
    };
    reset = (value) => {
        this.setState(
            {value: this.state.value = 0}
        )
    };
    setSetting = (newMaxValue, newStartValue) => {
        this.setState({maxValue: newMaxValue, startValue: newStartValue})
    }

    render = () => {
        return (
            <div className={style.app}>
                <Counter state={this.state} reset={this.reset} increment={this.increment}/>
                <Setting state={this.state} setSetting={this.setSetting}/>
            </div>
        )
    }
}

export default App;