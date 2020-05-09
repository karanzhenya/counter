import React from 'react';
import style from './App.module.css';
import Counter from "./Counter/Counter";
import Setting from "./Setting/Setting";

class App extends React.Component {

    state = {
        value: 0,
        startValue: 0,
        maxValue: 0,
    };
    increment = (value) => {
        if (this.state.value < this.state.maxValue) {
            this.setState(
                {value: this.state.value + 1})
        }
    };
    reset = (value) => {
        this.setState(
            {value: this.state.value = this.state.startValue}
        )
    };
    changeMaxValue = (newMaxValue) => {
        this.setState({maxValue: newMaxValue})
    };
    changeStartValue = (newStartValue) => {
        this.setState({startValue: newStartValue})
    };
    changeSetting = () => {
        this.setState(this.setState({value: this.state.startValue}))
    };

    render = () => {
        return (
            <div className={style.app}>
                <Counter state={this.state} reset={this.reset} increment={this.increment}/>
                <Setting state={this.state} changeSetting={this.changeSetting} changeMaxValue={this.changeMaxValue} changeStartValue={this.changeStartValue} />
            </div>
        )
    }
}

export default App;